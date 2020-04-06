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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('V1ConnectionSchema', function() {
      beforeEach(function() {
        instance = new PolyaxonSdk.V1ConnectionSchema();
      });

      it('should create an instance of V1ConnectionSchema', function() {
        // TODO: update the code to test V1ConnectionSchema
        expect(instance).to.be.a(PolyaxonSdk.V1ConnectionSchema);
      });

      it('should have the property bucket_connection (base name: "bucket_connection")', function() {
        // TODO: update the code to test the property bucket_connection
        expect(instance).to.have.property('bucket_connection');
        // expect(instance.bucket_connection).to.be(expectedValueLiteral);
      });

      it('should have the property host_path_connection (base name: "host_path_connection")', function() {
        // TODO: update the code to test the property host_path_connection
        expect(instance).to.have.property('host_path_connection');
        // expect(instance.host_path_connection).to.be(expectedValueLiteral);
      });

      it('should have the property claim_connection (base name: "claim_connection")', function() {
        // TODO: update the code to test the property claim_connection
        expect(instance).to.have.property('claim_connection');
        // expect(instance.claim_connection).to.be(expectedValueLiteral);
      });

      it('should have the property host_connection (base name: "host_connection")', function() {
        // TODO: update the code to test the property host_connection
        expect(instance).to.have.property('host_connection');
        // expect(instance.host_connection).to.be(expectedValueLiteral);
      });

      it('should have the property git_connection (base name: "git_connection")', function() {
        // TODO: update the code to test the property git_connection
        expect(instance).to.have.property('git_connection');
        // expect(instance.git_connection).to.be(expectedValueLiteral);
      });

    });
  });

}));
