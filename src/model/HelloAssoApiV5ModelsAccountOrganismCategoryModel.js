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
 * The HelloAssoApiV5ModelsAccountOrganismCategoryModel model module.
 * @module model/HelloAssoApiV5ModelsAccountOrganismCategoryModel
 * @version public
 */
class HelloAssoApiV5ModelsAccountOrganismCategoryModel {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsAccountOrganismCategoryModel</code>.
     * @alias module:model/HelloAssoApiV5ModelsAccountOrganismCategoryModel
     */
    constructor() { 
        
        HelloAssoApiV5ModelsAccountOrganismCategoryModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsAccountOrganismCategoryModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsAccountOrganismCategoryModel} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsAccountOrganismCategoryModel} The populated <code>HelloAssoApiV5ModelsAccountOrganismCategoryModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsAccountOrganismCategoryModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('shortLabel')) {
                obj['shortLabel'] = ApiClient.convertToType(data['shortLabel'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsAccountOrganismCategoryModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsAccountOrganismCategoryModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['shortLabel'] && !(typeof data['shortLabel'] === 'string' || data['shortLabel'] instanceof String)) {
            throw new Error("Expected the field `shortLabel` to be a primitive type in the JSON string but got " + data['shortLabel']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
HelloAssoApiV5ModelsAccountOrganismCategoryModel.prototype['id'] = undefined;

/**
 * @member {String} label
 */
HelloAssoApiV5ModelsAccountOrganismCategoryModel.prototype['label'] = undefined;

/**
 * @member {String} shortLabel
 */
HelloAssoApiV5ModelsAccountOrganismCategoryModel.prototype['shortLabel'] = undefined;






export default HelloAssoApiV5ModelsAccountOrganismCategoryModel;

