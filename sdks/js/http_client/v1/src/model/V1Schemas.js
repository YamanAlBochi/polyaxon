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
    define(['ApiClient', 'model/V1ArtifactsMount', 'model/V1ArtifactsType', 'model/V1AuthType', 'model/V1CompiledOperation', 'model/V1ConnectionSchema', 'model/V1ConnectionType', 'model/V1DockerfileType', 'model/V1EarlyStopping', 'model/V1Event', 'model/V1EventType', 'model/V1GcsType', 'model/V1GitType', 'model/V1ImageType', 'model/V1K8sResourceType', 'model/V1Matrix', 'model/V1OperationCond', 'model/V1Parallel', 'model/V1PolyaxonInitContainer', 'model/V1PolyaxonSidecarContainer', 'model/V1Reference', 'model/V1RunSchema', 'model/V1S3Type', 'model/V1Schedule', 'model/V1UriType', 'model/V1WasbType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1ArtifactsMount'), require('./V1ArtifactsType'), require('./V1AuthType'), require('./V1CompiledOperation'), require('./V1ConnectionSchema'), require('./V1ConnectionType'), require('./V1DockerfileType'), require('./V1EarlyStopping'), require('./V1Event'), require('./V1EventType'), require('./V1GcsType'), require('./V1GitType'), require('./V1ImageType'), require('./V1K8sResourceType'), require('./V1Matrix'), require('./V1OperationCond'), require('./V1Parallel'), require('./V1PolyaxonInitContainer'), require('./V1PolyaxonSidecarContainer'), require('./V1Reference'), require('./V1RunSchema'), require('./V1S3Type'), require('./V1Schedule'), require('./V1UriType'), require('./V1WasbType'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1Schemas = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.V1ArtifactsMount, root.PolyaxonSdk.V1ArtifactsType, root.PolyaxonSdk.V1AuthType, root.PolyaxonSdk.V1CompiledOperation, root.PolyaxonSdk.V1ConnectionSchema, root.PolyaxonSdk.V1ConnectionType, root.PolyaxonSdk.V1DockerfileType, root.PolyaxonSdk.V1EarlyStopping, root.PolyaxonSdk.V1Event, root.PolyaxonSdk.V1EventType, root.PolyaxonSdk.V1GcsType, root.PolyaxonSdk.V1GitType, root.PolyaxonSdk.V1ImageType, root.PolyaxonSdk.V1K8sResourceType, root.PolyaxonSdk.V1Matrix, root.PolyaxonSdk.V1OperationCond, root.PolyaxonSdk.V1Parallel, root.PolyaxonSdk.V1PolyaxonInitContainer, root.PolyaxonSdk.V1PolyaxonSidecarContainer, root.PolyaxonSdk.V1Reference, root.PolyaxonSdk.V1RunSchema, root.PolyaxonSdk.V1S3Type, root.PolyaxonSdk.V1Schedule, root.PolyaxonSdk.V1UriType, root.PolyaxonSdk.V1WasbType);
  }
}(this, function(ApiClient, V1ArtifactsMount, V1ArtifactsType, V1AuthType, V1CompiledOperation, V1ConnectionSchema, V1ConnectionType, V1DockerfileType, V1EarlyStopping, V1Event, V1EventType, V1GcsType, V1GitType, V1ImageType, V1K8sResourceType, V1Matrix, V1OperationCond, V1Parallel, V1PolyaxonInitContainer, V1PolyaxonSidecarContainer, V1Reference, V1RunSchema, V1S3Type, V1Schedule, V1UriType, V1WasbType) {
  'use strict';

  /**
   * The V1Schemas model module.
   * @module model/V1Schemas
   * @version 1.0.73
   */

  /**
   * Constructs a new <code>V1Schemas</code>.
   * @alias module:model/V1Schemas
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1Schemas</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1Schemas} obj Optional instance to populate.
   * @return {module:model/V1Schemas} The populated <code>V1Schemas</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('operation_cond'))
        obj.operation_cond = V1OperationCond.constructFromObject(data['operation_cond']);
      if (data.hasOwnProperty('early_stopping'))
        obj.early_stopping = V1EarlyStopping.constructFromObject(data['early_stopping']);
      if (data.hasOwnProperty('parallel'))
        obj.parallel = V1Parallel.constructFromObject(data['parallel']);
      if (data.hasOwnProperty('run'))
        obj.run = V1RunSchema.constructFromObject(data['run']);
      if (data.hasOwnProperty('compiled_operation'))
        obj.compiled_operation = V1CompiledOperation.constructFromObject(data['compiled_operation']);
      if (data.hasOwnProperty('schedule'))
        obj.schedule = V1Schedule.constructFromObject(data['schedule']);
      if (data.hasOwnProperty('connection_schema'))
        obj.connection_schema = V1ConnectionSchema.constructFromObject(data['connection_schema']);
      if (data.hasOwnProperty('matrix'))
        obj.matrix = V1Matrix.constructFromObject(data['matrix']);
      if (data.hasOwnProperty('refrence'))
        obj.refrence = V1Reference.constructFromObject(data['refrence']);
      if (data.hasOwnProperty('artifacts_mount'))
        obj.artifacts_mount = V1ArtifactsMount.constructFromObject(data['artifacts_mount']);
      if (data.hasOwnProperty('polyaxon_sidecar_container'))
        obj.polyaxon_sidecar_container = V1PolyaxonSidecarContainer.constructFromObject(data['polyaxon_sidecar_container']);
      if (data.hasOwnProperty('polyaxon_init_container'))
        obj.polyaxon_init_container = V1PolyaxonInitContainer.constructFromObject(data['polyaxon_init_container']);
      if (data.hasOwnProperty('artifacs'))
        obj.artifacs = V1ArtifactsType.constructFromObject(data['artifacs']);
      if (data.hasOwnProperty('wasb'))
        obj.wasb = V1WasbType.constructFromObject(data['wasb']);
      if (data.hasOwnProperty('gcs'))
        obj.gcs = V1GcsType.constructFromObject(data['gcs']);
      if (data.hasOwnProperty('s3'))
        obj.s3 = V1S3Type.constructFromObject(data['s3']);
      if (data.hasOwnProperty('autg'))
        obj.autg = V1AuthType.constructFromObject(data['autg']);
      if (data.hasOwnProperty('dockerfile'))
        obj.dockerfile = V1DockerfileType.constructFromObject(data['dockerfile']);
      if (data.hasOwnProperty('git'))
        obj.git = V1GitType.constructFromObject(data['git']);
      if (data.hasOwnProperty('uri'))
        obj.uri = V1UriType.constructFromObject(data['uri']);
      if (data.hasOwnProperty('k8s_resource'))
        obj.k8s_resource = V1K8sResourceType.constructFromObject(data['k8s_resource']);
      if (data.hasOwnProperty('connection'))
        obj.connection = V1ConnectionType.constructFromObject(data['connection']);
      if (data.hasOwnProperty('image'))
        obj.image = V1ImageType.constructFromObject(data['image']);
      if (data.hasOwnProperty('event_type'))
        obj.event_type = V1EventType.constructFromObject(data['event_type']);
      if (data.hasOwnProperty('event'))
        obj.event = V1Event.constructFromObject(data['event']);
    }
    return obj;
  }

  /**
   * @member {module:model/V1OperationCond} operation_cond
   */
  exports.prototype.operation_cond = undefined;

  /**
   * @member {module:model/V1EarlyStopping} early_stopping
   */
  exports.prototype.early_stopping = undefined;

  /**
   * @member {module:model/V1Parallel} parallel
   */
  exports.prototype.parallel = undefined;

  /**
   * @member {module:model/V1RunSchema} run
   */
  exports.prototype.run = undefined;

  /**
   * @member {module:model/V1CompiledOperation} compiled_operation
   */
  exports.prototype.compiled_operation = undefined;

  /**
   * @member {module:model/V1Schedule} schedule
   */
  exports.prototype.schedule = undefined;

  /**
   * @member {module:model/V1ConnectionSchema} connection_schema
   */
  exports.prototype.connection_schema = undefined;

  /**
   * @member {module:model/V1Matrix} matrix
   */
  exports.prototype.matrix = undefined;

  /**
   * @member {module:model/V1Reference} refrence
   */
  exports.prototype.refrence = undefined;

  /**
   * @member {module:model/V1ArtifactsMount} artifacts_mount
   */
  exports.prototype.artifacts_mount = undefined;

  /**
   * @member {module:model/V1PolyaxonSidecarContainer} polyaxon_sidecar_container
   */
  exports.prototype.polyaxon_sidecar_container = undefined;

  /**
   * @member {module:model/V1PolyaxonInitContainer} polyaxon_init_container
   */
  exports.prototype.polyaxon_init_container = undefined;

  /**
   * @member {module:model/V1ArtifactsType} artifacs
   */
  exports.prototype.artifacs = undefined;

  /**
   * @member {module:model/V1WasbType} wasb
   */
  exports.prototype.wasb = undefined;

  /**
   * @member {module:model/V1GcsType} gcs
   */
  exports.prototype.gcs = undefined;

  /**
   * @member {module:model/V1S3Type} s3
   */
  exports.prototype.s3 = undefined;

  /**
   * @member {module:model/V1AuthType} autg
   */
  exports.prototype.autg = undefined;

  /**
   * @member {module:model/V1DockerfileType} dockerfile
   */
  exports.prototype.dockerfile = undefined;

  /**
   * @member {module:model/V1GitType} git
   */
  exports.prototype.git = undefined;

  /**
   * @member {module:model/V1UriType} uri
   */
  exports.prototype.uri = undefined;

  /**
   * @member {module:model/V1K8sResourceType} k8s_resource
   */
  exports.prototype.k8s_resource = undefined;

  /**
   * @member {module:model/V1ConnectionType} connection
   */
  exports.prototype.connection = undefined;

  /**
   * @member {module:model/V1ImageType} image
   */
  exports.prototype.image = undefined;

  /**
   * @member {module:model/V1EventType} event_type
   */
  exports.prototype.event_type = undefined;

  /**
   * @member {module:model/V1Event} event
   */
  exports.prototype.event = undefined;

  return exports;

}));
