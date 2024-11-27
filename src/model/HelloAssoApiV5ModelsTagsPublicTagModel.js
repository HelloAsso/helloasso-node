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
 * The HelloAssoApiV5ModelsTagsPublicTagModel model module.
 * @module model/HelloAssoApiV5ModelsTagsPublicTagModel
 * @version public
 */
class HelloAssoApiV5ModelsTagsPublicTagModel {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsTagsPublicTagModel</code>.
     * PublicNameTagModel class
     * @alias module:model/HelloAssoApiV5ModelsTagsPublicTagModel
     */
    constructor() { 
        
        HelloAssoApiV5ModelsTagsPublicTagModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsTagsPublicTagModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsTagsPublicTagModel} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsTagsPublicTagModel} The populated <code>HelloAssoApiV5ModelsTagsPublicTagModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsTagsPublicTagModel();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsTagsPublicTagModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsTagsPublicTagModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * Name tag
 * @member {String} name
 */
HelloAssoApiV5ModelsTagsPublicTagModel.prototype['name'] = undefined;

/**
 * Tag score : measure tag relevance
 * @member {Number} score
 */
HelloAssoApiV5ModelsTagsPublicTagModel.prototype['score'] = undefined;






export default HelloAssoApiV5ModelsTagsPublicTagModel;

