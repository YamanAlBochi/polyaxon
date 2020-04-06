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
    define(['ApiClient', 'model/SparkDeployMode', 'model/V1SparkReplica', 'model/V1SparkType', 'model/V1Volume'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SparkDeployMode'), require('./V1SparkReplica'), require('./V1SparkType'), require('./V1Volume'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1Spark = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.SparkDeployMode, root.PolyaxonSdk.V1SparkReplica, root.PolyaxonSdk.V1SparkType, root.PolyaxonSdk.V1Volume);
  }
}(this, function(ApiClient, SparkDeployMode, V1SparkReplica, V1SparkType, V1Volume) {
  'use strict';

  /**
   * The V1Spark model module.
   * @module model/V1Spark
   * @version 1.0.73
   */

  /**
   * Constructs a new <code>V1Spark</code>.
   * @alias module:model/V1Spark
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1Spark</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1Spark} obj Optional instance to populate.
   * @return {module:model/V1Spark} The populated <code>V1Spark</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('connections'))
        obj.connections = ApiClient.convertToType(data['connections'], ['String']);
      if (data.hasOwnProperty('volumes'))
        obj.volumes = ApiClient.convertToType(data['volumes'], [V1Volume]);
      if (data.hasOwnProperty('type'))
        obj.type = V1SparkType.constructFromObject(data['type']);
      if (data.hasOwnProperty('spark_version'))
        obj.spark_version = ApiClient.convertToType(data['spark_version'], 'String');
      if (data.hasOwnProperty('python_version'))
        obj.python_version = ApiClient.convertToType(data['python_version'], 'String');
      if (data.hasOwnProperty('deploy_mode'))
        obj.deploy_mode = SparkDeployMode.constructFromObject(data['deploy_mode']);
      if (data.hasOwnProperty('main_class'))
        obj.main_class = ApiClient.convertToType(data['main_class'], 'String');
      if (data.hasOwnProperty('main_application_file'))
        obj.main_application_file = ApiClient.convertToType(data['main_application_file'], 'String');
      if (data.hasOwnProperty('arguments'))
        obj._arguments = ApiClient.convertToType(data['arguments'], ['String']);
      if (data.hasOwnProperty('hadoop_conf'))
        obj.hadoop_conf = ApiClient.convertToType(data['hadoop_conf'], {'String': 'String'});
      if (data.hasOwnProperty('spark_conf'))
        obj.spark_conf = ApiClient.convertToType(data['spark_conf'], {'String': 'String'});
      if (data.hasOwnProperty('spark_config_map'))
        obj.spark_config_map = ApiClient.convertToType(data['spark_config_map'], 'String');
      if (data.hasOwnProperty('hadoop_config_map'))
        obj.hadoop_config_map = ApiClient.convertToType(data['hadoop_config_map'], 'String');
      if (data.hasOwnProperty('executor'))
        obj.executor = V1SparkReplica.constructFromObject(data['executor']);
      if (data.hasOwnProperty('driver'))
        obj.driver = V1SparkReplica.constructFromObject(data['driver']);
    }
    return obj;
  }

  /**
   * @member {String} kind
   * @default 'spark'
   */
  exports.prototype.kind = 'spark';

  /**
   * @member {Array.<String>} connections
   */
  exports.prototype.connections = undefined;

  /**
   * Volumes is a list of volumes that can be mounted.
   * @member {Array.<module:model/V1Volume>} volumes
   */
  exports.prototype.volumes = undefined;

  /**
   * Type tells the type of the Spark application.
   * @member {module:model/V1SparkType} type
   */
  exports.prototype.type = undefined;

  /**
   * Spark version is the version of Spark the application uses.
   * @member {String} spark_version
   */
  exports.prototype.spark_version = undefined;

  /**
   * Spark version is the version of Spark the application uses.
   * @member {String} python_version
   */
  exports.prototype.python_version = undefined;

  /**
   * Mode is the deployment mode of the Spark application.
   * @member {module:model/SparkDeployMode} deploy_mode
   */
  exports.prototype.deploy_mode = undefined;

  /**
   * MainClass is the fully-qualified main class of the Spark application. This only applies to Java/Scala Spark applications.
   * @member {String} main_class
   */
  exports.prototype.main_class = undefined;

  /**
   * MainFile is the path to a bundled JAR, Python, or R file of the application.
   * @member {String} main_application_file
   */
  exports.prototype.main_application_file = undefined;

  /**
   * Arguments is a list of arguments to be passed to the application.
   * @member {Array.<String>} _arguments
   */
  exports.prototype._arguments = undefined;

  /**
   * HadoopConf carries user-specified Hadoop configuration properties as they would use the  the \"--conf\" option in spark-submit.  The SparkApplication controller automatically adds prefix \"spark.hadoop.\" to Hadoop configuration properties.
   * @member {Object.<String, String>} hadoop_conf
   */
  exports.prototype.hadoop_conf = undefined;

  /**
   * HadoopConf carries user-specified Hadoop configuration properties as they would use the  the \"--conf\" option in spark-submit.  The SparkApplication controller automatically adds prefix \"spark.hadoop.\" to Hadoop configuration properties.
   * @member {Object.<String, String>} spark_conf
   */
  exports.prototype.spark_conf = undefined;

  /**
   * SparkConfigMap carries the name of the ConfigMap containing Spark configuration files such as log4j.properties. The controller will add environment variable SPARK_CONF_DIR to the path where the ConfigMap is mounted to.
   * @member {String} spark_config_map
   */
  exports.prototype.spark_config_map = undefined;

  /**
   * HadoopConfigMap carries the name of the ConfigMap containing Hadoop configuration files such as core-site.xml. The controller will add environment variable HADOOP_CONF_DIR to the path where the ConfigMap is mounted to.
   * @member {String} hadoop_config_map
   */
  exports.prototype.hadoop_config_map = undefined;

  /**
   * @member {module:model/V1SparkReplica} executor
   */
  exports.prototype.executor = undefined;

  /**
   * @member {module:model/V1SparkReplica} driver
   */
  exports.prototype.driver = undefined;

  return exports;

}));
