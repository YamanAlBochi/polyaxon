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

/* tslint:disable */
/* eslint-disable */
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
 */

import { exists, mapValues } from '../runtime';
import {
    V1RunReferenceCatalog,
    V1RunReferenceCatalogFromJSON,
    V1RunReferenceCatalogFromJSONTyped,
    V1RunReferenceCatalogToJSON,
    V1SettingsCatalog,
    V1SettingsCatalogFromJSON,
    V1SettingsCatalogFromJSONTyped,
    V1SettingsCatalogToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1RunSettings
 */
export interface V1RunSettings {
    /**
     * 
     * @type {string}
     * @memberof V1RunSettings
     */
    namespace?: string;
    /**
     * 
     * @type {V1SettingsCatalog}
     * @memberof V1RunSettings
     */
    agent?: V1SettingsCatalog;
    /**
     * 
     * @type {V1SettingsCatalog}
     * @memberof V1RunSettings
     */
    queue?: V1SettingsCatalog;
    /**
     * 
     * @type {V1SettingsCatalog}
     * @memberof V1RunSettings
     */
    artifacts_store?: V1SettingsCatalog;
    /**
     * 
     * @type {object}
     * @memberof V1RunSettings
     */
    tensorboard?: object;
    /**
     * 
     * @type {object}
     * @memberof V1RunSettings
     */
    build?: object;
    /**
     * 
     * @type {V1RunReferenceCatalog}
     * @memberof V1RunSettings
     */
    component_version?: V1RunReferenceCatalog;
    /**
     * 
     * @type {Array<V1RunReferenceCatalog>}
     * @memberof V1RunSettings
     */
    model_versions?: Array<V1RunReferenceCatalog>;
}

export function V1RunSettingsFromJSON(json: any): V1RunSettings {
    return V1RunSettingsFromJSONTyped(json, false);
}

export function V1RunSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RunSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'agent': !exists(json, 'agent') ? undefined : V1SettingsCatalogFromJSON(json['agent']),
        'queue': !exists(json, 'queue') ? undefined : V1SettingsCatalogFromJSON(json['queue']),
        'artifacts_store': !exists(json, 'artifacts_store') ? undefined : V1SettingsCatalogFromJSON(json['artifacts_store']),
        'tensorboard': !exists(json, 'tensorboard') ? undefined : json['tensorboard'],
        'build': !exists(json, 'build') ? undefined : json['build'],
        'component_version': !exists(json, 'component_version') ? undefined : V1RunReferenceCatalogFromJSON(json['component_version']),
        'model_versions': !exists(json, 'model_versions') ? undefined : ((json['model_versions'] as Array<any>).map(V1RunReferenceCatalogFromJSON)),
    };
}

export function V1RunSettingsToJSON(value?: V1RunSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'namespace': value.namespace,
        'agent': V1SettingsCatalogToJSON(value.agent),
        'queue': V1SettingsCatalogToJSON(value.queue),
        'artifacts_store': V1SettingsCatalogToJSON(value.artifacts_store),
        'tensorboard': value.tensorboard,
        'build': value.build,
        'component_version': V1RunReferenceCatalogToJSON(value.component_version),
        'model_versions': value.model_versions === undefined ? undefined : ((value.model_versions as Array<any>).map(V1RunReferenceCatalogToJSON)),
    };
}


