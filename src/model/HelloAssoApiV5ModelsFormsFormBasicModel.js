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
import HelloAssoApiV5ModelsEnumsFormType from './HelloAssoApiV5ModelsEnumsFormType';

/**
 * The HelloAssoApiV5ModelsFormsFormBasicModel model module.
 * @module model/HelloAssoApiV5ModelsFormsFormBasicModel
 * @version public
 */
class HelloAssoApiV5ModelsFormsFormBasicModel {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsFormsFormBasicModel</code>.
     * A basic form model
     * @alias module:model/HelloAssoApiV5ModelsFormsFormBasicModel
     */
    constructor() { 
        
        HelloAssoApiV5ModelsFormsFormBasicModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsFormsFormBasicModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsFormsFormBasicModel} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsFormsFormBasicModel} The populated <code>HelloAssoApiV5ModelsFormsFormBasicModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsFormsFormBasicModel();

            if (data.hasOwnProperty('formSlug')) {
                obj['formSlug'] = ApiClient.convertToType(data['formSlug'], 'String');
            }
            if (data.hasOwnProperty('formType')) {
                obj['formType'] = HelloAssoApiV5ModelsEnumsFormType.constructFromObject(data['formType']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('organizationSlug')) {
                obj['organizationSlug'] = ApiClient.convertToType(data['organizationSlug'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsFormsFormBasicModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsFormsFormBasicModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['formSlug'] && !(typeof data['formSlug'] === 'string' || data['formSlug'] instanceof String)) {
            throw new Error("Expected the field `formSlug` to be a primitive type in the JSON string but got " + data['formSlug']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['organizationSlug'] && !(typeof data['organizationSlug'] === 'string' || data['organizationSlug'] instanceof String)) {
            throw new Error("Expected the field `organizationSlug` to be a primitive type in the JSON string but got " + data['organizationSlug']);
        }

        return true;
    }


}



/**
 * The form slug
 * @member {String} formSlug
 */
HelloAssoApiV5ModelsFormsFormBasicModel.prototype['formSlug'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsEnumsFormType} formType
 */
HelloAssoApiV5ModelsFormsFormBasicModel.prototype['formType'] = undefined;

/**
 * The form url
 * @member {String} url
 */
HelloAssoApiV5ModelsFormsFormBasicModel.prototype['url'] = undefined;

/**
 * The organization slug
 * @member {String} organizationSlug
 */
HelloAssoApiV5ModelsFormsFormBasicModel.prototype['organizationSlug'] = undefined;






export default HelloAssoApiV5ModelsFormsFormBasicModel;

