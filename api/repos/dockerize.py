# -*- coding: utf-8 -*-
from __future__ import absolute_import, division, print_function

import json
import logging
import time
import os
import stat

import jinja2
from django.conf import settings
from docker import APIClient
from docker.errors import DockerException

from repos import git

logger = logging.getLogger('polyaxon.repos.dockerize')

POLYAXON_DOCKER_TEMPLATE = """
FROM {{ from_image }}

ENV LC_ALL en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8
# Use bash as default shell, rather than sh
ENV SHELL /bin/bash

WORKDIR {{ workdir }}

{% if polyaxon_requirements_path -%}
COPY {{ polyaxon_requirements_path }} {{ workdir }}
{% endif -%}

{% if polyaxon_setup_path -%}
COPY {{ polyaxon_setup_path }} {{ workdir }}
{% endif -%}

{% if steps -%}
{% for step in steps -%}
RUN {{ step }}
{% endfor -%}
{% endif -%}

{% if env_vars -%}
{% for env_var in env_vars -%}
ENV {{env_var[0]}} {{env_var[1]}}
{% endfor -%}
{% endif -%}

COPY {{ folder_name }} {{ workdir }}
"""


class DockerBuilder(object):
    def __init__(self,
                 repo_path,
                 from_image,
                 image_tag,
                 steps=None,
                 env_vars=None,
                 workdir='/code',
                 dockerfile_name='Dockerfile'):
        self.repo_path = repo_path
        self.build_path = '/'.join(repo_path.split('/')[:-1])
        self.folder_name = repo_path.split('/')[-1]
        self.from_image = from_image
        self.image_tag = image_tag
        self.steps = steps or []
        self.env_vars = env_vars or []
        self.workdir = workdir
        self.dockerfile_path = os.path.join(self.build_path, dockerfile_name)
        self.polyaxon_requirements_path = self._get_requirements_path()
        self.polyaxon_setup_path = self._get_setup_path()
        self.docker = None

    def connect(self):
        if not self.docker:
            self.docker = APIClient(version='auto')

    def login(self, registry_user, registry_password, registry_host):
        self.connect()
        try:
            self.docker.login(username=registry_user,
                              password=registry_password,
                              registry=registry_host,
                              reauth=True)
        except DockerException as e:
            logger.exception('Failed to connect to registry %s\n' % e)

        return

    def _get_requirements_path(self):
        requirements_path = os.path.join(self.repo_path, 'polyaxon_requirements.txt')
        if os.path.isfile(requirements_path):
            return os.path.join(self.folder_name, 'polyaxon_requirements.txt')
        return None

    def _get_setup_path(self):
        setup_file_path = os.path.join(self.repo_path, 'polyaxon_setup.sh')
        has_setup = os.path.isfile(setup_file_path)
        if has_setup:
            st = os.stat(setup_file_path)
            os.chmod(setup_file_path, st.st_mode | stat.S_IEXEC)
            return os.path.join(self.folder_name, 'polyaxon_setup.sh')
        return None

    def render(self):
        docker_template = jinja2.Template(POLYAXON_DOCKER_TEMPLATE)
        return docker_template.render(
            from_image=self.from_image,
            polyaxon_requirements_path=self.polyaxon_requirements_path,
            polyaxon_setup_path=self.polyaxon_setup_path,
            steps=self.steps,
            env_vars=self.env_vars,
            folder_name=self.folder_name,
            workdir=self.workdir
        )

    def build(self, memory_limit=None):
        limits = {
            # Always disable memory swap for building, since mostly
            # nothing good can come of that.
            'memswap': -1
        }
        if memory_limit:
            limits['memory'] = memory_limit

        # Create DockerFile
        with open(self.dockerfile_path, 'w') as dockerfile:
            dockerfile.write(self.render())

        self.connect()
        for line in self.docker.build(
            path=self.build_path,
            tag=self.image_tag,
            buildargs={},
            decode=True,
            forcerm=True,
            rm=True,
            pull=True,
            nocache=False,
            container_limits=limits,
            stream=True,
        ):
            yield line

    def push(self):
        # Build a progress setup for each layer, and only emit per-layer info every 1.5s
        layers = {}
        last_emit_time = time.time()
        self.connect()
        for line in self.docker.push(self.image_tag, stream=True):
            lines = [l for l in line.decode('utf-8').split('\r\n') if l]
            lines = [json.loads(l) for l in lines]
            for progress in lines:
                print(progress)
                if 'error' in progress:
                    logger.error(progress['error'], extra=dict(phase='failed'))
                    return
                if 'id' not in progress:
                    continue
                if 'progressDetail' in progress and progress['progressDetail']:
                    layers[progress['id']] = progress['progressDetail']
                else:
                    layers[progress['id']] = progress['status']
                if time.time() - last_emit_time > 1.5:
                    logger.info('Pushing image\n', extra=dict(progress=layers, phase='pushing'))
                    last_emit_time = time.time()


def build_experiment(experiment):
    """Build necessary code for an experiment to run"""
    project_name = experiment.project.name
    experiment_spec = experiment.compiled_spec
    if experiment_spec.run_exec.git:  # We need to fetch the repo first
        from repos.models import ExternalRepo

        repo, is_created = ExternalRepo.objects.get_or_create(project=experiment.project,
                                                              git_url=experiment_spec.run_exec.git)
        if not is_created:
            # If the repo already exist, we just need to refetch it
            git.fetch(git_url=repo.git_url, repo_path=repo.path)

        repo_path = repo.path
        repo_name = repo.name
        repo_last_commit = repo.last_commit
    else:
        repo_path = experiment.project.repo.path
        repo_name = project_name
        repo_last_commit = experiment.project.repo.last_commit

    image_tag = '{}/{}:{}'.format(project_name, repo_name, repo_last_commit)

    # Build the image
    docker_builder = DockerBuilder(repo_path=repo_path,
                                   from_image=experiment_spec.run_exec.image,
                                   image_tag=image_tag,
                                   steps=experiment_spec.run_exec.steps,
                                   env_vars=experiment_spec.run_exec.env_vars)
    docker_builder.login(registry_user=settings.REGISTRY_USER,
                         registry_password=settings.REGISTRY_PASSWORD,
                         registry_host=settings.REGISTRY_HOST)
    docker_builder.build()
    docker_builder.push()
