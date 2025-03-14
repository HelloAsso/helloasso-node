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
    instance = new HelloAssoApi.HelloAssoModelsComplianceV2CommonAddressAddressModelSnapshot();
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

  describe('HelloAssoModelsComplianceV2CommonAddressAddressModelSnapshot', function() {
    it('should create an instance of HelloAssoModelsComplianceV2CommonAddressAddressModelSnapshot', function() {
      // uncomment below and update the code to test HelloAssoModelsComplianceV2CommonAddressAddressModelSnapshot
      //var instance = new HelloAssoApi.HelloAssoModelsComplianceV2CommonAddressAddressModelSnapshot();
      //expect(instance).to.be.a(HelloAssoApi.HelloAssoModelsComplianceV2CommonAddressAddressModelSnapshot);
    });

    it('should have the property line (base name: "line")', function() {
      // uncomment below and update the code to test the property line
      //var instance = new HelloAssoApi.HelloAssoModelsComplianceV2CommonAddressAddressModelSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new HelloAssoApi.HelloAssoModelsComplianceV2CommonAddressAddressModelSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property zipCode (base name: "zipCode")', function() {
      // uncomment below and update the code to test the property zipCode
      //var instance = new HelloAssoApi.HelloAssoModelsComplianceV2CommonAddressAddressModelSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new HelloAssoApi.HelloAssoModelsComplianceV2CommonAddressAddressModelSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property isoCountry (base name: "isoCountry")', function() {
      // uncomment below and update the code to test the property isoCountry
      //var instance = new HelloAssoApi.HelloAssoModelsComplianceV2CommonAddressAddressModelSnapshot();
      //expect(instance).to.be();
    });

  });

}));
