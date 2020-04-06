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
    describe('V1Run', function() {
      beforeEach(function() {
        instance = new PolyaxonSdk.V1Run();
      });

      it('should create an instance of V1Run', function() {
        // TODO: update the code to test V1Run
        expect(instance).to.be.a(PolyaxonSdk.V1Run);
      });

      it('should have the property uuid (base name: "uuid")', function() {
        // TODO: update the code to test the property uuid
        expect(instance).to.have.property('uuid');
        // expect(instance.uuid).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property tags (base name: "tags")', function() {
        // TODO: update the code to test the property tags
        expect(instance).to.have.property('tags');
        // expect(instance.tags).to.be(expectedValueLiteral);
      });

      it('should have the property deleted (base name: "deleted")', function() {
        // TODO: update the code to test the property deleted
        expect(instance).to.have.property('deleted');
        // expect(instance.deleted).to.be(expectedValueLiteral);
      });

      it('should have the property user (base name: "user")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

      it('should have the property owner (base name: "owner")', function() {
        // TODO: update the code to test the property owner
        expect(instance).to.have.property('owner');
        // expect(instance.owner).to.be(expectedValueLiteral);
      });

      it('should have the property project (base name: "project")', function() {
        // TODO: update the code to test the property project
        expect(instance).to.have.property('project');
        // expect(instance.project).to.be(expectedValueLiteral);
      });

      it('should have the property created_at (base name: "created_at")', function() {
        // TODO: update the code to test the property created_at
        expect(instance).to.have.property('created_at');
        // expect(instance.created_at).to.be(expectedValueLiteral);
      });

      it('should have the property updated_at (base name: "updated_at")', function() {
        // TODO: update the code to test the property updated_at
        expect(instance).to.have.property('updated_at');
        // expect(instance.updated_at).to.be(expectedValueLiteral);
      });

      it('should have the property started_at (base name: "started_at")', function() {
        // TODO: update the code to test the property started_at
        expect(instance).to.have.property('started_at');
        // expect(instance.started_at).to.be(expectedValueLiteral);
      });

      it('should have the property finished_at (base name: "finished_at")', function() {
        // TODO: update the code to test the property finished_at
        expect(instance).to.have.property('finished_at');
        // expect(instance.finished_at).to.be(expectedValueLiteral);
      });

      it('should have the property run_time (base name: "run_time")', function() {
        // TODO: update the code to test the property run_time
        expect(instance).to.have.property('run_time');
        // expect(instance.run_time).to.be(expectedValueLiteral);
      });

      it('should have the property is_managed (base name: "is_managed")', function() {
        // TODO: update the code to test the property is_managed
        expect(instance).to.have.property('is_managed');
        // expect(instance.is_managed).to.be(expectedValueLiteral);
      });

      it('should have the property content (base name: "content")', function() {
        // TODO: update the code to test the property content
        expect(instance).to.have.property('content');
        // expect(instance.content).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property bookmarked (base name: "bookmarked")', function() {
        // TODO: update the code to test the property bookmarked
        expect(instance).to.have.property('bookmarked');
        // expect(instance.bookmarked).to.be(expectedValueLiteral);
      });

      it('should have the property meta_info (base name: "meta_info")', function() {
        // TODO: update the code to test the property meta_info
        expect(instance).to.have.property('meta_info');
        // expect(instance.meta_info).to.be(expectedValueLiteral);
      });

      it('should have the property is_helper (base name: "is_helper")', function() {
        // TODO: update the code to test the property is_helper
        expect(instance).to.have.property('is_helper');
        // expect(instance.is_helper).to.be(expectedValueLiteral);
      });

      it('should have the property kind (base name: "kind")', function() {
        // TODO: update the code to test the property kind
        expect(instance).to.have.property('kind');
        // expect(instance.kind).to.be(expectedValueLiteral);
      });

      it('should have the property meta_kind (base name: "meta_kind")', function() {
        // TODO: update the code to test the property meta_kind
        expect(instance).to.have.property('meta_kind');
        // expect(instance.meta_kind).to.be(expectedValueLiteral);
      });

      it('should have the property hub (base name: "hub")', function() {
        // TODO: update the code to test the property hub
        expect(instance).to.have.property('hub');
        // expect(instance.hub).to.be(expectedValueLiteral);
      });

      it('should have the property inputs (base name: "inputs")', function() {
        // TODO: update the code to test the property inputs
        expect(instance).to.have.property('inputs');
        // expect(instance.inputs).to.be(expectedValueLiteral);
      });

      it('should have the property outputs (base name: "outputs")', function() {
        // TODO: update the code to test the property outputs
        expect(instance).to.have.property('outputs');
        // expect(instance.outputs).to.be(expectedValueLiteral);
      });

      it('should have the property original (base name: "original")', function() {
        // TODO: update the code to test the property original
        expect(instance).to.have.property('original');
        // expect(instance.original).to.be(expectedValueLiteral);
      });

      it('should have the property pipeline (base name: "pipeline")', function() {
        // TODO: update the code to test the property pipeline
        expect(instance).to.have.property('pipeline');
        // expect(instance.pipeline).to.be(expectedValueLiteral);
      });

      it('should have the property status_conditions (base name: "status_conditions")', function() {
        // TODO: update the code to test the property status_conditions
        expect(instance).to.have.property('status_conditions');
        // expect(instance.status_conditions).to.be(expectedValueLiteral);
      });

      it('should have the property settings (base name: "settings")', function() {
        // TODO: update the code to test the property settings
        expect(instance).to.have.property('settings');
        // expect(instance.settings).to.be(expectedValueLiteral);
      });

    });
  });

}));
