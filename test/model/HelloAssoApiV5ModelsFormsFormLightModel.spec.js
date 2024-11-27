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
    instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
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

  describe('HelloAssoApiV5ModelsFormsFormLightModel', function() {
    it('should create an instance of HelloAssoApiV5ModelsFormsFormLightModel', function() {
      // uncomment below and update the code to test HelloAssoApiV5ModelsFormsFormLightModel
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be.a(HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel);
    });

    it('should have the property banner (base name: "banner")', function() {
      // uncomment below and update the code to test the property banner
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "startDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "endDate")', function() {
      // uncomment below and update the code to test the property endDate
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property meta (base name: "meta")', function() {
      // uncomment below and update the code to test the property meta
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property privateTitle (base name: "privateTitle")', function() {
      // uncomment below and update the code to test the property privateTitle
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property widgetButtonUrl (base name: "widgetButtonUrl")', function() {
      // uncomment below and update the code to test the property widgetButtonUrl
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property widgetFullUrl (base name: "widgetFullUrl")', function() {
      // uncomment below and update the code to test the property widgetFullUrl
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property widgetVignetteHorizontalUrl (base name: "widgetVignetteHorizontalUrl")', function() {
      // uncomment below and update the code to test the property widgetVignetteHorizontalUrl
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property widgetVignetteVerticalUrl (base name: "widgetVignetteVerticalUrl")', function() {
      // uncomment below and update the code to test the property widgetVignetteVerticalUrl
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property widgetCounterUrl (base name: "widgetCounterUrl")', function() {
      // uncomment below and update the code to test the property widgetCounterUrl
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property formSlug (base name: "formSlug")', function() {
      // uncomment below and update the code to test the property formSlug
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property formType (base name: "formType")', function() {
      // uncomment below and update the code to test the property formType
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

    it('should have the property organizationSlug (base name: "organizationSlug")', function() {
      // uncomment below and update the code to test the property organizationSlug
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel();
      //expect(instance).to.be();
    });

  });

}));