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
    instance = new HelloAssoApi.OrganisationApi();
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

  describe('OrganisationApi', function() {
    describe('organizationsLegalInformationsLegalStructuresGet', function() {
      it('should call organizationsLegalInformationsLegalStructuresGet successfully', function(done) {
        //uncomment below and update the code to test organizationsLegalInformationsLegalStructuresGet
        //instance.organizationsLegalInformationsLegalStructuresGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('organizationsLegalInformationsOrganizationSlugConfigurationGet', function() {
      it('should call organizationsLegalInformationsOrganizationSlugConfigurationGet successfully', function(done) {
        //uncomment below and update the code to test organizationsLegalInformationsOrganizationSlugConfigurationGet
        //instance.organizationsLegalInformationsOrganizationSlugConfigurationGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('organizationsLegalInformationsTaxInformationTextsGet', function() {
      it('should call organizationsLegalInformationsTaxInformationTextsGet successfully', function(done) {
        //uncomment below and update the code to test organizationsLegalInformationsTaxInformationTextsGet
        //instance.organizationsLegalInformationsTaxInformationTextsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('organizationsOrganizationSlugGet', function() {
      it('should call organizationsOrganizationSlugGet successfully', function(done) {
        //uncomment below and update the code to test organizationsOrganizationSlugGet
        //instance.organizationsOrganizationSlugGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
