// Copyright 2018-2021 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.12.2
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import RuntimeError from '../model/RuntimeError';
import V1EntitiesTags from '../model/V1EntitiesTags';
import V1ListTagsResponse from '../model/V1ListTagsResponse';
import V1Tag from '../model/V1Tag';

/**
* TagsV1 service.
* @module api/TagsV1Api
* @version 1.12.2
*/
export default class TagsV1Api {

    /**
    * Constructs a new TagsV1Api. 
    * Polyaxon sdk
    * @alias module:api/TagsV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createTag operation.
     * @callback module:api/TagsV1Api~createTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create tag
     * @param {String} owner Owner of the namespace
     * @param {module:model/V1Tag} body Tag body
     * @param {module:api/TagsV1Api~createTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Tag}
     */
    createTag(owner, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createTag");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTag");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1Tag;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/tags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTag operation.
     * @callback module:api/TagsV1Api~deleteTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete tag
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade Flag to handle sub-entities.
     * @param {module:api/TagsV1Api~deleteTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteTag(owner, uuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deleteTag");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteTag");
      }

      let pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      let queryParams = {
        'cascade': opts['cascade']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/tags/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTag operation.
     * @callback module:api/TagsV1Api~getTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get tag
     * @param {String} owner Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/TagsV1Api~getTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Tag}
     */
    getTag(owner, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getTag");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getTag");
      }

      let pathParams = {
        'owner': owner,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1Tag;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/tags/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listTags operation.
     * @callback module:api/TagsV1Api~listTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListTagsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List tags
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search.
     * @param {Boolean} opts.bookmarks Filter by bookmarks.
     * @param {String} opts.mode Mode of the search.
     * @param {Boolean} opts.no_page No pagination.
     * @param {module:api/TagsV1Api~listTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListTagsResponse}
     */
    listTags(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listTags");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
        'bookmarks': opts['bookmarks'],
        'mode': opts['mode'],
        'no_page': opts['no_page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListTagsResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the loadTags operation.
     * @callback module:api/TagsV1Api~loadTagsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load tags
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search.
     * @param {Boolean} opts.bookmarks Filter by bookmarks.
     * @param {String} opts.mode Mode of the search.
     * @param {Boolean} opts.no_page No pagination.
     * @param {module:api/TagsV1Api~loadTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    loadTags(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling loadTags");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query'],
        'bookmarks': opts['bookmarks'],
        'mode': opts['mode'],
        'no_page': opts['no_page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/tags/load', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchTag operation.
     * @callback module:api/TagsV1Api~patchTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch tag
     * @param {String} owner Owner of the namespace
     * @param {String} tag_uuid UUID
     * @param {module:model/V1Tag} body Tag body
     * @param {module:api/TagsV1Api~patchTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Tag}
     */
    patchTag(owner, tag_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchTag");
      }
      // verify the required parameter 'tag_uuid' is set
      if (tag_uuid === undefined || tag_uuid === null) {
        throw new Error("Missing the required parameter 'tag_uuid' when calling patchTag");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchTag");
      }

      let pathParams = {
        'owner': owner,
        'tag.uuid': tag_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1Tag;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/tags/{tag.uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the syncTags operation.
     * @callback module:api/TagsV1Api~syncTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sync tags
     * @param {String} owner Owner of the namespace
     * @param {module:model/V1EntitiesTags} body Data
     * @param {module:api/TagsV1Api~syncTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    syncTags(owner, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling syncTags");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling syncTags");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/tags/sync', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTag operation.
     * @callback module:api/TagsV1Api~updateTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update tag
     * @param {String} owner Owner of the namespace
     * @param {String} tag_uuid UUID
     * @param {module:model/V1Tag} body Tag body
     * @param {module:api/TagsV1Api~updateTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Tag}
     */
    updateTag(owner, tag_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updateTag");
      }
      // verify the required parameter 'tag_uuid' is set
      if (tag_uuid === undefined || tag_uuid === null) {
        throw new Error("Missing the required parameter 'tag_uuid' when calling updateTag");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTag");
      }

      let pathParams = {
        'owner': owner,
        'tag.uuid': tag_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1Tag;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/tags/{tag.uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
