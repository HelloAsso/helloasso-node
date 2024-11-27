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
    instance = new HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationFiscalReceiptOptionsConfiguration();
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

  describe('HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationFiscalReceiptOptionsConfiguration', function() {
    it('should create an instance of HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationFiscalReceiptOptionsConfiguration', function() {
      // uncomment below and update the code to test HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationFiscalReceiptOptionsConfiguration
      //var instance = new HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationFiscalReceiptOptionsConfiguration();
      //expect(instance).to.be.a(HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationFiscalReceiptOptionsConfiguration);
    });

    it('should have the property purpose (base name: "purpose")', function() {
      // uncomment below and update the code to test the property purpose
      //var instance = new HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationFiscalReceiptOptionsConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property cerfaTypeId (base name: "cerfaTypeId")', function() {
      // uncomment below and update the code to test the property cerfaTypeId
      //var instance = new HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationFiscalReceiptOptionsConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property joCategoryId (base name: "joCategoryId")', function() {
      // uncomment below and update the code to test the property joCategoryId
      //var instance = new HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationFiscalReceiptOptionsConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property formatOptionModel (base name: "formatOptionModel")', function() {
      // uncomment below and update the code to test the property formatOptionModel
      //var instance = new HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationFiscalReceiptOptionsConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property signatoryModel (base name: "signatoryModel")', function() {
      // uncomment below and update the code to test the property signatoryModel
      //var instance = new HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationFiscalReceiptOptionsConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property addressModel (base name: "addressModel")', function() {
      // uncomment below and update the code to test the property addressModel
      //var instance = new HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationFiscalReceiptOptionsConfiguration();
      //expect(instance).to.be();
    });

  });

}));
