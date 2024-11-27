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
    instance = new HelloAssoApi.HelloAssoApiV5ModelsPartnerStatisticsModel();
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

  describe('HelloAssoApiV5ModelsPartnerStatisticsModel', function() {
    it('should create an instance of HelloAssoApiV5ModelsPartnerStatisticsModel', function() {
      // uncomment below and update the code to test HelloAssoApiV5ModelsPartnerStatisticsModel
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsPartnerStatisticsModel();
      //expect(instance).to.be.a(HelloAssoApi.HelloAssoApiV5ModelsPartnerStatisticsModel);
    });

    it('should have the property linkedOrganizationsCount (base name: "linkedOrganizationsCount")', function() {
      // uncomment below and update the code to test the property linkedOrganizationsCount
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsPartnerStatisticsModel();
      //expect(instance).to.be();
    });

    it('should have the property linkedOrganizationsCollectedAmount (base name: "linkedOrganizationsCollectedAmount")', function() {
      // uncomment below and update the code to test the property linkedOrganizationsCollectedAmount
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsPartnerStatisticsModel();
      //expect(instance).to.be();
    });

    it('should have the property checkoutCollectedAmount (base name: "checkoutCollectedAmount")', function() {
      // uncomment below and update the code to test the property checkoutCollectedAmount
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsPartnerStatisticsModel();
      //expect(instance).to.be();
    });

    it('should have the property organizationsUsingCheckout (base name: "organizationsUsingCheckout")', function() {
      // uncomment below and update the code to test the property organizationsUsingCheckout
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsPartnerStatisticsModel();
      //expect(instance).to.be();
    });

    it('should have the property availableOrganizationsAccessTokenCount (base name: "availableOrganizationsAccessTokenCount")', function() {
      // uncomment below and update the code to test the property availableOrganizationsAccessTokenCount
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsPartnerStatisticsModel();
      //expect(instance).to.be();
    });

  });

}));
