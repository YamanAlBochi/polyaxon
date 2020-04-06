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
    describe('V1Reference', function() {
      beforeEach(function() {
        instance = new PolyaxonSdk.V1Reference();
      });

      it('should create an instance of V1Reference', function() {
        // TODO: update the code to test V1Reference
        expect(instance).to.be.a(PolyaxonSdk.V1Reference);
      });

      it('should have the property hub_reference (base name: "hub_reference")', function() {
        // TODO: update the code to test the property hub_reference
        expect(instance).to.have.property('hub_reference');
        // expect(instance.hub_reference).to.be(expectedValueLiteral);
      });

      it('should have the property dag_reference (base name: "dag_reference")', function() {
        // TODO: update the code to test the property dag_reference
        expect(instance).to.have.property('dag_reference');
        // expect(instance.dag_reference).to.be(expectedValueLiteral);
      });

      it('should have the property url_reference (base name: "url_reference")', function() {
        // TODO: update the code to test the property url_reference
        expect(instance).to.have.property('url_reference');
        // expect(instance.url_reference).to.be(expectedValueLiteral);
      });

      it('should have the property path_reference (base name: "path_reference")', function() {
        // TODO: update the code to test the property path_reference
        expect(instance).to.have.property('path_reference');
        // expect(instance.path_reference).to.be(expectedValueLiteral);
      });

    });
  });

}));
