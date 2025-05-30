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
import HelloAssoModelsEnumsGlobalRole from './HelloAssoModelsEnumsGlobalRole';

/**
 * The HelloAssoApiV5ModelsOrganizationOrganizationLightModel model module.
 * @module model/HelloAssoApiV5ModelsOrganizationOrganizationLightModel
 * @version public
 */
class HelloAssoApiV5ModelsOrganizationOrganizationLightModel {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsOrganizationOrganizationLightModel</code>.
     * OrganizationLightModel class
     * @alias module:model/HelloAssoApiV5ModelsOrganizationOrganizationLightModel
     */
    constructor() { 
        
        HelloAssoApiV5ModelsOrganizationOrganizationLightModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsOrganizationOrganizationLightModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsOrganizationOrganizationLightModel} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsOrganizationOrganizationLightModel} The populated <code>HelloAssoApiV5ModelsOrganizationOrganizationLightModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsOrganizationOrganizationLightModel();

            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = HelloAssoModelsEnumsGlobalRole.constructFromObject(data['role']);
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('zipCode')) {
                obj['zipCode'] = ApiClient.convertToType(data['zipCode'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('updateDate')) {
                obj['updateDate'] = ApiClient.convertToType(data['updateDate'], 'Date');
            }
            if (data.hasOwnProperty('categoryJoId')) {
                obj['categoryJoId'] = ApiClient.convertToType(data['categoryJoId'], 'Number');
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
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsOrganizationOrganizationLightModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsOrganizationOrganizationLightModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['logo'] && !(typeof data['logo'] === 'string' || data['logo'] instanceof String)) {
            throw new Error("Expected the field `logo` to be a primitive type in the JSON string but got " + data['logo']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
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
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
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
 * Logo of organization
 * @member {String} logo
 */
HelloAssoApiV5ModelsOrganizationOrganizationLightModel.prototype['logo'] = undefined;

/**
 * Name of organization
 * @member {String} name
 */
HelloAssoApiV5ModelsOrganizationOrganizationLightModel.prototype['name'] = undefined;

/**
 * @member {module:model/HelloAssoModelsEnumsGlobalRole} role
 */
HelloAssoApiV5ModelsOrganizationOrganizationLightModel.prototype['role'] = undefined;

/**
 * Organization city
 * @member {String} city
 */
HelloAssoApiV5ModelsOrganizationOrganizationLightModel.prototype['city'] = undefined;

/**
 * Organization zip code
 * @member {String} zipCode
 */
HelloAssoApiV5ModelsOrganizationOrganizationLightModel.prototype['zipCode'] = undefined;

/**
 * Organization description
 * @member {String} description
 */
HelloAssoApiV5ModelsOrganizationOrganizationLightModel.prototype['description'] = undefined;

/**
 * Last update date of the organization
 * @member {Date} updateDate
 */
HelloAssoApiV5ModelsOrganizationOrganizationLightModel.prototype['updateDate'] = undefined;

/**
 * @member {Number} categoryJoId
 */
HelloAssoApiV5ModelsOrganizationOrganizationLightModel.prototype['categoryJoId'] = undefined;

/**
 * The organization url
 * @member {String} url
 */
HelloAssoApiV5ModelsOrganizationOrganizationLightModel.prototype['url'] = undefined;

/**
 * The organization slug
 * @member {String} organizationSlug
 */
HelloAssoApiV5ModelsOrganizationOrganizationLightModel.prototype['organizationSlug'] = undefined;






export default HelloAssoApiV5ModelsOrganizationOrganizationLightModel;

