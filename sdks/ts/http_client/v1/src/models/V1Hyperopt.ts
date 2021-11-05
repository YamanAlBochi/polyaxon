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
    V1HyperoptAlgorithms,
    V1HyperoptAlgorithmsFromJSON,
    V1HyperoptAlgorithmsFromJSONTyped,
    V1HyperoptAlgorithmsToJSON,
    V1OptimizationMetric,
    V1OptimizationMetricFromJSON,
    V1OptimizationMetricFromJSONTyped,
    V1OptimizationMetricToJSON,
    V1Tuner,
    V1TunerFromJSON,
    V1TunerFromJSONTyped,
    V1TunerToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Hyperopt
 */
export interface V1Hyperopt {
    /**
     * 
     * @type {string}
     * @memberof V1Hyperopt
     */
    kind?: string;
    /**
     * 
     * @type {V1HyperoptAlgorithms}
     * @memberof V1Hyperopt
     */
    algorithm?: V1HyperoptAlgorithms;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof V1Hyperopt
     */
    params?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof V1Hyperopt
     */
    numRuns?: number;
    /**
     * 
     * @type {number}
     * @memberof V1Hyperopt
     */
    maxIterations?: number;
    /**
     * 
     * @type {V1OptimizationMetric}
     * @memberof V1Hyperopt
     */
    metric?: V1OptimizationMetric;
    /**
     * 
     * @type {number}
     * @memberof V1Hyperopt
     */
    seed?: number;
    /**
     * 
     * @type {number}
     * @memberof V1Hyperopt
     */
    concurrency?: number;
    /**
     * 
     * @type {V1Tuner}
     * @memberof V1Hyperopt
     */
    tuner?: V1Tuner;
    /**
     * 
     * @type {Array<object>}
     * @memberof V1Hyperopt
     */
    earlyStopping?: Array<object>;
}

export function V1HyperoptFromJSON(json: any): V1Hyperopt {
    return V1HyperoptFromJSONTyped(json, false);
}

export function V1HyperoptFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Hyperopt {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'algorithm': !exists(json, 'algorithm') ? undefined : V1HyperoptAlgorithmsFromJSON(json['algorithm']),
        'params': !exists(json, 'params') ? undefined : json['params'],
        'numRuns': !exists(json, 'numRuns') ? undefined : json['numRuns'],
        'maxIterations': !exists(json, 'maxIterations') ? undefined : json['maxIterations'],
        'metric': !exists(json, 'metric') ? undefined : V1OptimizationMetricFromJSON(json['metric']),
        'seed': !exists(json, 'seed') ? undefined : json['seed'],
        'concurrency': !exists(json, 'concurrency') ? undefined : json['concurrency'],
        'tuner': !exists(json, 'tuner') ? undefined : V1TunerFromJSON(json['tuner']),
        'earlyStopping': !exists(json, 'earlyStopping') ? undefined : json['earlyStopping'],
    };
}

export function V1HyperoptToJSON(value?: V1Hyperopt | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': value.kind,
        'algorithm': V1HyperoptAlgorithmsToJSON(value.algorithm),
        'params': value.params,
        'numRuns': value.numRuns,
        'maxIterations': value.maxIterations,
        'metric': V1OptimizationMetricToJSON(value.metric),
        'seed': value.seed,
        'concurrency': value.concurrency,
        'tuner': V1TunerToJSON(value.tuner),
        'earlyStopping': value.earlyStopping,
    };
}


