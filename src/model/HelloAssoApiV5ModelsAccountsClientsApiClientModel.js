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
 * The HelloAssoApiV5ModelsAccountsClientsApiClientModel model module.
 * @module model/HelloAssoApiV5ModelsAccountsClientsApiClientModel
 * @version public
 */
class HelloAssoApiV5ModelsAccountsClientsApiClientModel {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsAccountsClientsApiClientModel</code>.
     * @alias module:model/HelloAssoApiV5ModelsAccountsClientsApiClientModel
     */
    constructor() { 
        
        HelloAssoApiV5ModelsAccountsClientsApiClientModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsAccountsClientsApiClientModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsAccountsClientsApiClientModel} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsAccountsClientsApiClientModel} The populated <code>HelloAssoApiV5ModelsAccountsClientsApiClientModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsAccountsClientsApiClientModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('partnerName')) {
                obj['partnerName'] = ApiClient.convertToType(data['partnerName'], 'String');
            }
            if (data.hasOwnProperty('privileges')) {
                obj['privileges'] = ApiClient.convertToType(data['privileges'], ['String']);
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsAccountsClientsApiClientModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsAccountsClientsApiClientModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['secret'] && !(typeof data['secret'] === 'string' || data['secret'] instanceof String)) {
            throw new Error("Expected the field `secret` to be a primitive type in the JSON string but got " + data['secret']);
        }
        // ensure the json data is a string
        if (data['partnerName'] && !(typeof data['partnerName'] === 'string' || data['partnerName'] instanceof String)) {
            throw new Error("Expected the field `partnerName` to be a primitive type in the JSON string but got " + data['partnerName']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['privileges'])) {
            throw new Error("Expected the field `privileges` to be an array in the JSON data but got " + data['privileges']);
        }
        // ensure the json data is a string
        if (data['domain'] && !(typeof data['domain'] === 'string' || data['domain'] instanceof String)) {
            throw new Error("Expected the field `domain` to be a primitive type in the JSON string but got " + data['domain']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
HelloAssoApiV5ModelsAccountsClientsApiClientModel.prototype['id'] = undefined;

/**
 * Filled only when requested by the organization back office
 * @member {String} secret
 */
HelloAssoApiV5ModelsAccountsClientsApiClientModel.prototype['secret'] = undefined;

/**
 * @member {String} partnerName
 */
HelloAssoApiV5ModelsAccountsClientsApiClientModel.prototype['partnerName'] = undefined;

/**
 * @member {Array.<String>} privileges
 */
HelloAssoApiV5ModelsAccountsClientsApiClientModel.prototype['privileges'] = undefined;

/**
 * @member {String} domain
 */
HelloAssoApiV5ModelsAccountsClientsApiClientModel.prototype['domain'] = undefined;






export default HelloAssoApiV5ModelsAccountsClientsApiClientModel;

