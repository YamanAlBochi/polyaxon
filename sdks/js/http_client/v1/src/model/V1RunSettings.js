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
import V1RunReferenceCatalog from './V1RunReferenceCatalog';
import V1SettingsCatalog from './V1SettingsCatalog';

/**
 * The V1RunSettings model module.
 * @module model/V1RunSettings
 * @version 1.12.2
 */
class V1RunSettings {
    /**
     * Constructs a new <code>V1RunSettings</code>.
     * @alias module:model/V1RunSettings
     */
    constructor() { 
        
        V1RunSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1RunSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1RunSettings} obj Optional instance to populate.
     * @return {module:model/V1RunSettings} The populated <code>V1RunSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1RunSettings();

            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('agent')) {
                obj['agent'] = V1SettingsCatalog.constructFromObject(data['agent']);
            }
            if (data.hasOwnProperty('queue')) {
                obj['queue'] = V1SettingsCatalog.constructFromObject(data['queue']);
            }
            if (data.hasOwnProperty('artifacts_store')) {
                obj['artifacts_store'] = V1SettingsCatalog.constructFromObject(data['artifacts_store']);
            }
            if (data.hasOwnProperty('tensorboard')) {
                obj['tensorboard'] = ApiClient.convertToType(data['tensorboard'], Object);
            }
            if (data.hasOwnProperty('build')) {
                obj['build'] = ApiClient.convertToType(data['build'], Object);
            }
            if (data.hasOwnProperty('component_version')) {
                obj['component_version'] = V1RunReferenceCatalog.constructFromObject(data['component_version']);
            }
            if (data.hasOwnProperty('model_versions')) {
                obj['model_versions'] = ApiClient.convertToType(data['model_versions'], [V1RunReferenceCatalog]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} namespace
 */
V1RunSettings.prototype['namespace'] = undefined;

/**
 * @member {module:model/V1SettingsCatalog} agent
 */
V1RunSettings.prototype['agent'] = undefined;

/**
 * @member {module:model/V1SettingsCatalog} queue
 */
V1RunSettings.prototype['queue'] = undefined;

/**
 * @member {module:model/V1SettingsCatalog} artifacts_store
 */
V1RunSettings.prototype['artifacts_store'] = undefined;

/**
 * @member {Object} tensorboard
 */
V1RunSettings.prototype['tensorboard'] = undefined;

/**
 * @member {Object} build
 */
V1RunSettings.prototype['build'] = undefined;

/**
 * @member {module:model/V1RunReferenceCatalog} component_version
 */
V1RunSettings.prototype['component_version'] = undefined;

/**
 * @member {Array.<module:model/V1RunReferenceCatalog>} model_versions
 */
V1RunSettings.prototype['model_versions'] = undefined;






export default V1RunSettings;

