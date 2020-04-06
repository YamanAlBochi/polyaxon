#!/usr/bin/python
#
# Copyright 2018-2020 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

    Polyaxon SDKs and REST API specification.  # noqa: E501

    OpenAPI spec version: 1.0.73
    Contact: contact@polyaxon.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import polyaxon_sdk
from polyaxon_sdk.api.agents_v1_api import AgentsV1Api  # noqa: E501
from polyaxon_sdk.rest import ApiException


class TestAgentsV1Api(unittest.TestCase):
    """AgentsV1Api unit test stubs"""

    def setUp(self):
        self.api = polyaxon_sdk.api.agents_v1_api.AgentsV1Api()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_agent(self):
        """Test case for create_agent

        Create run profile  # noqa: E501
        """
        pass

    def test_create_agent_status(self):
        """Test case for create_agent_status

        """
        pass

    def test_delete_agent(self):
        """Test case for delete_agent

        Delete run profile  # noqa: E501
        """
        pass

    def test_get_agent(self):
        """Test case for get_agent

        Get run profile  # noqa: E501
        """
        pass

    def test_get_agent_state(self):
        """Test case for get_agent_state

        """
        pass

    def test_get_agent_statuses(self):
        """Test case for get_agent_statuses

        """
        pass

    def test_list_agent_names(self):
        """Test case for list_agent_names

        List run profiles names  # noqa: E501
        """
        pass

    def test_list_agents(self):
        """Test case for list_agents

        List run profiles  # noqa: E501
        """
        pass

    def test_patch_agent(self):
        """Test case for patch_agent

        Patch run profile  # noqa: E501
        """
        pass

    def test_sync_agent(self):
        """Test case for sync_agent

        """
        pass

    def test_update_agent(self):
        """Test case for update_agent

        Update run profile  # noqa: E501
        """
        pass


if __name__ == "__main__":
    unittest.main()
