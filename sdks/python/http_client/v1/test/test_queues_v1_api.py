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
from polyaxon_sdk.api.queues_v1_api import QueuesV1Api  # noqa: E501
from polyaxon_sdk.rest import ApiException


class TestQueuesV1Api(unittest.TestCase):
    """QueuesV1Api unit test stubs"""

    def setUp(self):
        self.api = polyaxon_sdk.api.queues_v1_api.QueuesV1Api()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_queue(self):
        """Test case for create_queue

        Update agent  # noqa: E501
        """
        pass

    def test_delete_queue(self):
        """Test case for delete_queue

        Sync agent  # noqa: E501
        """
        pass

    def test_get_queue(self):
        """Test case for get_queue

        Patch agent  # noqa: E501
        """
        pass

    def test_list_organization_queue_names(self):
        """Test case for list_organization_queue_names

        List agents names  # noqa: E501
        """
        pass

    def test_list_organization_queues(self):
        """Test case for list_organization_queues

        List agents  # noqa: E501
        """
        pass

    def test_list_queue_names(self):
        """Test case for list_queue_names

        Create agent  # noqa: E501
        """
        pass

    def test_list_queues(self):
        """Test case for list_queues

        Get agent  # noqa: E501
        """
        pass

    def test_patch_queue(self):
        """Test case for patch_queue

        Get State (queues/runs)  # noqa: E501
        """
        pass

    def test_update_queue(self):
        """Test case for update_queue

        Delete agent  # noqa: E501
        """
        pass


if __name__ == "__main__":
    unittest.main()
