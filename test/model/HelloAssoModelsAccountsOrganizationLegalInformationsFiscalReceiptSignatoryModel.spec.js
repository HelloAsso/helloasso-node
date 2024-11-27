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
    instance = new HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsFiscalReceiptSignatoryModel();
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

  describe('HelloAssoModelsAccountsOrganizationLegalInformationsFiscalReceiptSignatoryModel', function() {
    it('should create an instance of HelloAssoModelsAccountsOrganizationLegalInformationsFiscalReceiptSignatoryModel', function() {
      // uncomment below and update the code to test HelloAssoModelsAccountsOrganizationLegalInformationsFiscalReceiptSignatoryModel
      //var instance = new HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsFiscalReceiptSignatoryModel();
      //expect(instance).to.be.a(HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsFiscalReceiptSignatoryModel);
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsFiscalReceiptSignatoryModel();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsFiscalReceiptSignatoryModel();
      //expect(instance).to.be();
    });

    it('should have the property _function (base name: "function")', function() {
      // uncomment below and update the code to test the property _function
      //var instance = new HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsFiscalReceiptSignatoryModel();
      //expect(instance).to.be();
    });

    it('should have the property fileUrl (base name: "fileUrl")', function() {
      // uncomment below and update the code to test the property fileUrl
      //var instance = new HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsFiscalReceiptSignatoryModel();
      //expect(instance).to.be();
    });

  });

}));