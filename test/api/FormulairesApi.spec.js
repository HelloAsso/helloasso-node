/**
 * HelloAsso API
 * HelloAsso Open Api specification
 *
 * The version of the OpenAPI document: public
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HelloAssoApi);
  }
}(this, function(expect, HelloAssoApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HelloAssoApi.FormulairesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FormulairesApi', function() {
    describe('organizationsOrganizationSlugFormTypesGet', function() {
      it('should call organizationsOrganizationSlugFormTypesGet successfully', function(done) {
        //uncomment below and update the code to test organizationsOrganizationSlugFormTypesGet
        //instance.organizationsOrganizationSlugFormTypesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('organizationsOrganizationSlugFormsFormTypeActionQuickCreatePost', function() {
      it('should call organizationsOrganizationSlugFormsFormTypeActionQuickCreatePost successfully', function(done) {
        //uncomment below and update the code to test organizationsOrganizationSlugFormsFormTypeActionQuickCreatePost
        //instance.organizationsOrganizationSlugFormsFormTypeActionQuickCreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('organizationsOrganizationSlugFormsFormTypeFormSlugPublicGet', function() {
      it('should call organizationsOrganizationSlugFormsFormTypeFormSlugPublicGet successfully', function(done) {
        //uncomment below and update the code to test organizationsOrganizationSlugFormsFormTypeFormSlugPublicGet
        //instance.organizationsOrganizationSlugFormsFormTypeFormSlugPublicGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('organizationsOrganizationSlugFormsGet', function() {
      it('should call organizationsOrganizationSlugFormsGet successfully', function(done) {
        //uncomment below and update the code to test organizationsOrganizationSlugFormsGet
        //instance.organizationsOrganizationSlugFormsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
