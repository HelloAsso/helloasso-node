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
    instance = new HelloAssoApi.HelloAssoApiV5ModelsCommonPaginationModel();
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

  describe('HelloAssoApiV5ModelsCommonPaginationModel', function() {
    it('should create an instance of HelloAssoApiV5ModelsCommonPaginationModel', function() {
      // uncomment below and update the code to test HelloAssoApiV5ModelsCommonPaginationModel
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsCommonPaginationModel();
      //expect(instance).to.be.a(HelloAssoApi.HelloAssoApiV5ModelsCommonPaginationModel);
    });

    it('should have the property pageSize (base name: "pageSize")', function() {
      // uncomment below and update the code to test the property pageSize
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsCommonPaginationModel();
      //expect(instance).to.be();
    });

    it('should have the property totalCount (base name: "totalCount")', function() {
      // uncomment below and update the code to test the property totalCount
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsCommonPaginationModel();
      //expect(instance).to.be();
    });

    it('should have the property pageIndex (base name: "pageIndex")', function() {
      // uncomment below and update the code to test the property pageIndex
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsCommonPaginationModel();
      //expect(instance).to.be();
    });

    it('should have the property totalPages (base name: "totalPages")', function() {
      // uncomment below and update the code to test the property totalPages
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsCommonPaginationModel();
      //expect(instance).to.be();
    });

    it('should have the property continuationToken (base name: "continuationToken")', function() {
      // uncomment below and update the code to test the property continuationToken
      //var instance = new HelloAssoApi.HelloAssoApiV5ModelsCommonPaginationModel();
      //expect(instance).to.be();
    });

  });

}));