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
 * The HelloAssoApiV5ModelsCartsCheckoutPayer model module.
 * @module model/HelloAssoApiV5ModelsCartsCheckoutPayer
 * @version public
 */
class HelloAssoApiV5ModelsCartsCheckoutPayer {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsCartsCheckoutPayer</code>.
     * @alias module:model/HelloAssoApiV5ModelsCartsCheckoutPayer
     */
    constructor() { 
        
        HelloAssoApiV5ModelsCartsCheckoutPayer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsCartsCheckoutPayer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsCartsCheckoutPayer} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsCartsCheckoutPayer} The populated <code>HelloAssoApiV5ModelsCartsCheckoutPayer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsCartsCheckoutPayer();

            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('dateOfBirth')) {
                obj['dateOfBirth'] = ApiClient.convertToType(data['dateOfBirth'], 'Date');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('zipCode')) {
                obj['zipCode'] = ApiClient.convertToType(data['zipCode'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsCartsCheckoutPayer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsCartsCheckoutPayer</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['firstName'] && !(typeof data['firstName'] === 'string' || data['firstName'] instanceof String)) {
            throw new Error("Expected the field `firstName` to be a primitive type in the JSON string but got " + data['firstName']);
        }
        // ensure the json data is a string
        if (data['lastName'] && !(typeof data['lastName'] === 'string' || data['lastName'] instanceof String)) {
            throw new Error("Expected the field `lastName` to be a primitive type in the JSON string but got " + data['lastName']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['zipCode'] && !(typeof data['zipCode'] === 'string' || data['zipCode'] instanceof String)) {
            throw new Error("Expected the field `zipCode` to be a primitive type in the JSON string but got " + data['zipCode']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is a string
        if (data['companyName'] && !(typeof data['companyName'] === 'string' || data['companyName'] instanceof String)) {
            throw new Error("Expected the field `companyName` to be a primitive type in the JSON string but got " + data['companyName']);
        }

        return true;
    }


}



/**
 * FirstName
 * @member {String} firstName
 */
HelloAssoApiV5ModelsCartsCheckoutPayer.prototype['firstName'] = undefined;

/**
 * LastName
 * @member {String} lastName
 */
HelloAssoApiV5ModelsCartsCheckoutPayer.prototype['lastName'] = undefined;

/**
 * Email
 * @member {String} email
 */
HelloAssoApiV5ModelsCartsCheckoutPayer.prototype['email'] = undefined;

/**
 * Date of birth (Date only, no time part)
 * @member {Date} dateOfBirth
 */
HelloAssoApiV5ModelsCartsCheckoutPayer.prototype['dateOfBirth'] = undefined;

/**
 * Address
 * @member {String} address
 */
HelloAssoApiV5ModelsCartsCheckoutPayer.prototype['address'] = undefined;

/**
 * City
 * @member {String} city
 */
HelloAssoApiV5ModelsCartsCheckoutPayer.prototype['city'] = undefined;

/**
 * ZipCode
 * @member {String} zipCode
 */
HelloAssoApiV5ModelsCartsCheckoutPayer.prototype['zipCode'] = undefined;

/**
 * 3 letter country code
 * @member {String} country
 */
HelloAssoApiV5ModelsCartsCheckoutPayer.prototype['country'] = undefined;

/**
 * Used if the payer is a company
 * @member {String} companyName
 */
HelloAssoApiV5ModelsCartsCheckoutPayer.prototype['companyName'] = undefined;






export default HelloAssoApiV5ModelsCartsCheckoutPayer;

