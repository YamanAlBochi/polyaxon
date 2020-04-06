// Copyright 2018-2020 Polyaxon, Inc.
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

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * OpenAPI spec version: 1.0.73
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1RunKind = factory(root.PolyaxonSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Enum class V1RunKind.
   * @enum {String}
   * @readonly
   */
  var exports = {
    /**
     * value: "job"
     * @const
     */
    job: "job",

    /**
     * value: "service"
     * @const
     */
    service: "service",

    /**
     * value: "dag"
     * @const
     */
    dag: "dag",

    /**
     * value: "spark"
     * @const
     */
    spark: "spark",

    /**
     * value: "dask"
     * @const
     */
    dask: "dask",

    /**
     * value: "flink"
     * @const
     */
    flink: "flink",

    /**
     * value: "ray"
     * @const
     */
    ray: "ray",

    /**
     * value: "mpijob"
     * @const
     */
    mpijob: "mpijob",

    /**
     * value: "tfjob"
     * @const
     */
    tfjob: "tfjob",

    /**
     * value: "pytorchjob"
     * @const
     */
    pytorchjob: "pytorchjob",

    /**
     * value: "parallel"
     * @const
     */
    parallel: "parallel",

    /**
     * value: "scheduler"
     * @const
     */
    scheduler: "scheduler",

    /**
     * value: "tuner"
     * @const
     */
    tuner: "tuner",

    /**
     * value: "watchdog"
     * @const
     */
    watchdog: "watchdog",

    /**
     * value: "notifier"
     * @const
     */
    notifier: "notifier"
  };

  /**
   * Returns a <code>V1RunKind</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/V1RunKind} The enum <code>V1RunKind</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));
