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
 * The HelloAssoApiV5ModelsCommonContactModel model module.
 * @module model/HelloAssoApiV5ModelsCommonContactModel
 * @version public
 */
class HelloAssoApiV5ModelsCommonContactModel {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsCommonContactModel</code>.
     * Contact class
     * @alias module:model/HelloAssoApiV5ModelsCommonContactModel
     */
    constructor() { 
        
        HelloAssoApiV5ModelsCommonContactModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsCommonContactModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsCommonContactModel} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsCommonContactModel} The populated <code>HelloAssoApiV5ModelsCommonContactModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsCommonContactModel();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsCommonContactModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsCommonContactModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['phoneNumber'] && !(typeof data['phoneNumber'] === 'string' || data['phoneNumber'] instanceof String)) {
            throw new Error("Expected the field `phoneNumber` to be a primitive type in the JSON string but got " + data['phoneNumber']);
        }

        return true;
    }


}



/**
 * Contact email
 * @member {String} email
 */
HelloAssoApiV5ModelsCommonContactModel.prototype['email'] = undefined;

/**
 * Contact phone number
 * @member {String} phoneNumber
 */
HelloAssoApiV5ModelsCommonContactModel.prototype['phoneNumber'] = undefined;






export default HelloAssoApiV5ModelsCommonContactModel;
