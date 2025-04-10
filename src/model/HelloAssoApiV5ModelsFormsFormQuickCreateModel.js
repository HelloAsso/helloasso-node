/**
 * HelloAsso API
 * HelloAsso auto-generated SDK
 *
 * The version of the OpenAPI document: public
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The HelloAssoApiV5ModelsFormsFormQuickCreateModel model module.
 * @module model/HelloAssoApiV5ModelsFormsFormQuickCreateModel
 * @version public
 */
class HelloAssoApiV5ModelsFormsFormQuickCreateModel {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsFormsFormQuickCreateModel</code>.
     * @alias module:model/HelloAssoApiV5ModelsFormsFormQuickCreateModel
     */
    constructor() { 
        
        HelloAssoApiV5ModelsFormsFormQuickCreateModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsFormsFormQuickCreateModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsFormsFormQuickCreateModel} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsFormsFormQuickCreateModel} The populated <code>HelloAssoApiV5ModelsFormsFormQuickCreateModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsFormsFormQuickCreateModel();

            if (data.hasOwnProperty('formSlug')) {
                obj['formSlug'] = ApiClient.convertToType(data['formSlug'], 'String');
            }
            if (data.hasOwnProperty('organizationSlug')) {
                obj['organizationSlug'] = ApiClient.convertToType(data['organizationSlug'], 'String');
            }
            if (data.hasOwnProperty('publicUrl')) {
                obj['publicUrl'] = ApiClient.convertToType(data['publicUrl'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsFormsFormQuickCreateModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsFormsFormQuickCreateModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['formSlug'] && !(typeof data['formSlug'] === 'string' || data['formSlug'] instanceof String)) {
            throw new Error("Expected the field `formSlug` to be a primitive type in the JSON string but got " + data['formSlug']);
        }
        // ensure the json data is a string
        if (data['organizationSlug'] && !(typeof data['organizationSlug'] === 'string' || data['organizationSlug'] instanceof String)) {
            throw new Error("Expected the field `organizationSlug` to be a primitive type in the JSON string but got " + data['organizationSlug']);
        }
        // ensure the json data is a string
        if (data['publicUrl'] && !(typeof data['publicUrl'] === 'string' || data['publicUrl'] instanceof String)) {
            throw new Error("Expected the field `publicUrl` to be a primitive type in the JSON string but got " + data['publicUrl']);
        }

        return true;
    }


}



/**
 * @member {String} formSlug
 */
HelloAssoApiV5ModelsFormsFormQuickCreateModel.prototype['formSlug'] = undefined;

/**
 * @member {String} organizationSlug
 */
HelloAssoApiV5ModelsFormsFormQuickCreateModel.prototype['organizationSlug'] = undefined;

/**
 * @member {String} publicUrl
 */
HelloAssoApiV5ModelsFormsFormQuickCreateModel.prototype['publicUrl'] = undefined;






export default HelloAssoApiV5ModelsFormsFormQuickCreateModel;

