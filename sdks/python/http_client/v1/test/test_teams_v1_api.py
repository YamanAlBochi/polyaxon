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
from polyaxon_sdk.api.teams_v1_api import TeamsV1Api  # noqa: E501
from polyaxon_sdk.rest import ApiException


class TestTeamsV1Api(unittest.TestCase):
    """TeamsV1Api unit test stubs"""

    def setUp(self):
        self.api = polyaxon_sdk.api.teams_v1_api.TeamsV1Api()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_team(self):
        """Test case for create_team

        Create organization  # noqa: E501
        """
        pass

    def test_create_team_member(self):
        """Test case for create_team_member

        Create organization member  # noqa: E501
        """
        pass

    def test_delete_team(self):
        """Test case for delete_team

        Delete organization  # noqa: E501
        """
        pass

    def test_delete_team_member(self):
        """Test case for delete_team_member

        Delete organization member details  # noqa: E501
        """
        pass

    def test_get_team(self):
        """Test case for get_team

        Get organization  # noqa: E501
        """
        pass

    def test_get_team_member(self):
        """Test case for get_team_member

        Get organization member details  # noqa: E501
        """
        pass

    def test_list_team_members(self):
        """Test case for list_team_members

        Get organization members  # noqa: E501
        """
        pass

    def test_list_team_names(self):
        """Test case for list_team_names

        List organizations names  # noqa: E501
        """
        pass

    def test_list_teams(self):
        """Test case for list_teams

        List organizations  # noqa: E501
        """
        pass

    def test_patch_team(self):
        """Test case for patch_team

        Patch organization  # noqa: E501
        """
        pass

    def test_patch_team_member(self):
        """Test case for patch_team_member

        Patch organization member  # noqa: E501
        """
        pass

    def test_update_team(self):
        """Test case for update_team

        Update organization  # noqa: E501
        """
        pass

    def test_update_team_member(self):
        """Test case for update_team_member

        Update organization member  # noqa: E501
        """
        pass


if __name__ == "__main__":
    unittest.main()
