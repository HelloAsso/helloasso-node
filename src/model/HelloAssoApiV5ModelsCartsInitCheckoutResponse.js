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
 * The HelloAssoApiV5ModelsCartsInitCheckoutResponse model module.
 * @module model/HelloAssoApiV5ModelsCartsInitCheckoutResponse
 * @version public
 */
class HelloAssoApiV5ModelsCartsInitCheckoutResponse {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsCartsInitCheckoutResponse</code>.
     * @alias module:model/HelloAssoApiV5ModelsCartsInitCheckoutResponse
     */
    constructor() { 
        
        HelloAssoApiV5ModelsCartsInitCheckoutResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsCartsInitCheckoutResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsCartsInitCheckoutResponse} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsCartsInitCheckoutResponse} The populated <code>HelloAssoApiV5ModelsCartsInitCheckoutResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsCartsInitCheckoutResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('redirectUrl')) {
                obj['redirectUrl'] = ApiClient.convertToType(data['redirectUrl'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsCartsInitCheckoutResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsCartsInitCheckoutResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['redirectUrl'] && !(typeof data['redirectUrl'] === 'string' || data['redirectUrl'] instanceof String)) {
            throw new Error("Expected the field `redirectUrl` to be a primitive type in the JSON string but got " + data['redirectUrl']);
        }

        return true;
    }


}



/**
 * Id of the checkout intent
 * @member {Number} id
 */
HelloAssoApiV5ModelsCartsInitCheckoutResponse.prototype['id'] = undefined;

/**
 * Url where the contributor must be redirected to
 * @member {String} redirectUrl
 */
HelloAssoApiV5ModelsCartsInitCheckoutResponse.prototype['redirectUrl'] = undefined;






export default HelloAssoApiV5ModelsCartsInitCheckoutResponse;
