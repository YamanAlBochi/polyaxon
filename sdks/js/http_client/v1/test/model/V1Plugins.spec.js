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
    describe('V1Plugins', function() {
      beforeEach(function() {
        instance = new PolyaxonSdk.V1Plugins();
      });

      it('should create an instance of V1Plugins', function() {
        // TODO: update the code to test V1Plugins
        expect(instance).to.be.a(PolyaxonSdk.V1Plugins);
      });

      it('should have the property auth (base name: "auth")', function() {
        // TODO: update the code to test the property auth
        expect(instance).to.have.property('auth');
        // expect(instance.auth).to.be(expectedValueLiteral);
      });

      it('should have the property docker (base name: "docker")', function() {
        // TODO: update the code to test the property docker
        expect(instance).to.have.property('docker');
        // expect(instance.docker).to.be(expectedValueLiteral);
      });

      it('should have the property shm (base name: "shm")', function() {
        // TODO: update the code to test the property shm
        expect(instance).to.have.property('shm');
        // expect(instance.shm).to.be(expectedValueLiteral);
      });

      it('should have the property collect_artifacts (base name: "collect_artifacts")', function() {
        // TODO: update the code to test the property collect_artifacts
        expect(instance).to.have.property('collect_artifacts');
        // expect(instance.collect_artifacts).to.be(expectedValueLiteral);
      });

      it('should have the property collect_logs (base name: "collect_logs")', function() {
        // TODO: update the code to test the property collect_logs
        expect(instance).to.have.property('collect_logs');
        // expect(instance.collect_logs).to.be(expectedValueLiteral);
      });

      it('should have the property collect_resources (base name: "collect_resources")', function() {
        // TODO: update the code to test the property collect_resources
        expect(instance).to.have.property('collect_resources');
        // expect(instance.collect_resources).to.be(expectedValueLiteral);
      });

      it('should have the property sync_statuses (base name: "sync_statuses")', function() {
        // TODO: update the code to test the property sync_statuses
        expect(instance).to.have.property('sync_statuses');
        // expect(instance.sync_statuses).to.be(expectedValueLiteral);
      });

      it('should have the property log_level (base name: "log_level")', function() {
        // TODO: update the code to test the property log_level
        expect(instance).to.have.property('log_level');
        // expect(instance.log_level).to.be(expectedValueLiteral);
      });

      it('should have the property notifications (base name: "notifications")', function() {
        // TODO: update the code to test the property notifications
        expect(instance).to.have.property('notifications');
        // expect(instance.notifications).to.be(expectedValueLiteral);
      });

    });
  });

}));
