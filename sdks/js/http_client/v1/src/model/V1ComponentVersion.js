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

import ApiClient from '../ApiClient';
import V1StageCondition from './V1StageCondition';
import V1Stages from './V1Stages';

/**
 * The V1ComponentVersion model module.
 * @module model/V1ComponentVersion
 * @version 1.12.2
 */
class V1ComponentVersion {
    /**
     * Constructs a new <code>V1ComponentVersion</code>.
     * @alias module:model/V1ComponentVersion
     */
    constructor() { 
        
        V1ComponentVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1ComponentVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ComponentVersion} obj Optional instance to populate.
     * @return {module:model/V1ComponentVersion} The populated <code>V1ComponentVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ComponentVersion();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('live_state')) {
                obj['live_state'] = ApiClient.convertToType(data['live_state'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('stage')) {
                obj['stage'] = V1Stages.constructFromObject(data['stage']);
            }
            if (data.hasOwnProperty('stage_conditions')) {
                obj['stage_conditions'] = ApiClient.convertToType(data['stage_conditions'], [V1StageCondition]);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
V1ComponentVersion.prototype['uuid'] = undefined;

/**
 * @member {String} name
 */
V1ComponentVersion.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1ComponentVersion.prototype['description'] = undefined;

/**
 * @member {Array.<String>} tags
 */
V1ComponentVersion.prototype['tags'] = undefined;

/**
 * @member {Number} live_state
 */
V1ComponentVersion.prototype['live_state'] = undefined;

/**
 * @member {Date} created_at
 */
V1ComponentVersion.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
V1ComponentVersion.prototype['updated_at'] = undefined;

/**
 * @member {module:model/V1Stages} stage
 */
V1ComponentVersion.prototype['stage'] = undefined;

/**
 * @member {Array.<module:model/V1StageCondition>} stage_conditions
 */
V1ComponentVersion.prototype['stage_conditions'] = undefined;

/**
 * @member {String} content
 */
V1ComponentVersion.prototype['content'] = undefined;

/**
 * @member {String} role
 */
V1ComponentVersion.prototype['role'] = undefined;






export default V1ComponentVersion;

