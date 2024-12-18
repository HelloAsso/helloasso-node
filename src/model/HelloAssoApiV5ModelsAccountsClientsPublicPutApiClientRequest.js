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
 * The HelloAssoApiV5ModelsAccountsClientsPublicPutApiClientRequest model module.
 * @module model/HelloAssoApiV5ModelsAccountsClientsPublicPutApiClientRequest
 * @version public
 */
class HelloAssoApiV5ModelsAccountsClientsPublicPutApiClientRequest {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsAccountsClientsPublicPutApiClientRequest</code>.
     * @alias module:model/HelloAssoApiV5ModelsAccountsClientsPublicPutApiClientRequest
     */
    constructor() { 
        
        HelloAssoApiV5ModelsAccountsClientsPublicPutApiClientRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsAccountsClientsPublicPutApiClientRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsAccountsClientsPublicPutApiClientRequest} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsAccountsClientsPublicPutApiClientRequest} The populated <code>HelloAssoApiV5ModelsAccountsClientsPublicPutApiClientRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsAccountsClientsPublicPutApiClientRequest();

            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsAccountsClientsPublicPutApiClientRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsAccountsClientsPublicPutApiClientRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['domain'] && !(typeof data['domain'] === 'string' || data['domain'] instanceof String)) {
            throw new Error("Expected the field `domain` to be a primitive type in the JSON string but got " + data['domain']);
        }

        return true;
    }


}



/**
 * Client domain : Url used to grant authorization redirection
 * @member {String} domain
 */
HelloAssoApiV5ModelsAccountsClientsPublicPutApiClientRequest.prototype['domain'] = undefined;






export default HelloAssoApiV5ModelsAccountsClientsPublicPutApiClientRequest;

