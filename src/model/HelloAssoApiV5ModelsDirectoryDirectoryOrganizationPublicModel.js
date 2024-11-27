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
import HelloAssoApiV5ModelsEnumsOrganizationType from './HelloAssoApiV5ModelsEnumsOrganizationType';
import HelloAssoModelsEnumsGlobalRole from './HelloAssoModelsEnumsGlobalRole';
import HelloAssoModelsSharedGeoLocation from './HelloAssoModelsSharedGeoLocation';

/**
 * The HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel model module.
 * @module model/HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel
 * @version public
 */
class HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel</code>.
     * DirectoryOrganizationPublicModel class
     * @alias module:model/HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel
     */
    constructor() { 
        
        HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel} The populated <code>HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel();

            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('linkedPartners')) {
                obj['linkedPartners'] = ApiClient.convertToType(data['linkedPartners'], ['String']);
            }
            if (data.hasOwnProperty('isAuthenticated')) {
                obj['isAuthenticated'] = ApiClient.convertToType(data['isAuthenticated'], 'Boolean');
            }
            if (data.hasOwnProperty('banner')) {
                obj['banner'] = ApiClient.convertToType(data['banner'], 'String');
            }
            if (data.hasOwnProperty('fiscalReceiptEligibility')) {
                obj['fiscalReceiptEligibility'] = ApiClient.convertToType(data['fiscalReceiptEligibility'], 'Boolean');
            }
            if (data.hasOwnProperty('fiscalReceiptIssuanceEnabled')) {
                obj['fiscalReceiptIssuanceEnabled'] = ApiClient.convertToType(data['fiscalReceiptIssuanceEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = HelloAssoApiV5ModelsEnumsOrganizationType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('geolocation')) {
                obj['geolocation'] = HelloAssoModelsSharedGeoLocation.constructFromObject(data['geolocation']);
            }
            if (data.hasOwnProperty('rnaNumber')) {
                obj['rnaNumber'] = ApiClient.convertToType(data['rnaNumber'], 'String');
            }
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
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['linkedPartners'])) {
            throw new Error("Expected the field `linkedPartners` to be an array in the JSON data but got " + data['linkedPartners']);
        }
        // ensure the json data is a string
        if (data['banner'] && !(typeof data['banner'] === 'string' || data['banner'] instanceof String)) {
            throw new Error("Expected the field `banner` to be a primitive type in the JSON string but got " + data['banner']);
        }
        // ensure the json data is a string
        if (data['category'] && !(typeof data['category'] === 'string' || data['category'] instanceof String)) {
            throw new Error("Expected the field `category` to be a primitive type in the JSON string but got " + data['category']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // validate the optional field `geolocation`
        if (data['geolocation']) { // data not null
          HelloAssoModelsSharedGeoLocation.validateJSON(data['geolocation']);
        }
        // ensure the json data is a string
        if (data['rnaNumber'] && !(typeof data['rnaNumber'] === 'string' || data['rnaNumber'] instanceof String)) {
            throw new Error("Expected the field `rnaNumber` to be a primitive type in the JSON string but got " + data['rnaNumber']);
        }
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
 * The public tags of the organization
 * @member {Array.<String>} tags
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['tags'] = undefined;

/**
 * Partners linked to this organization
 * @member {Array.<String>} linkedPartners
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['linkedPartners'] = undefined;

/**
 * The organization is authenticated. Property returned only when asked by an organization admin.
 * @member {Boolean} isAuthenticated
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['isAuthenticated'] = undefined;

/**
 * The organization banner
 * @member {String} banner
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['banner'] = undefined;

/**
 * The organism can issue fiscal receipts (type ok and has not deactivated it)  Must configure it and be authenticated to become enabled
 * @member {Boolean} fiscalReceiptEligibility
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['fiscalReceiptEligibility'] = undefined;

/**
 * The organism is eligible, has set up his options, and is authenticated.
 * @member {Boolean} fiscalReceiptIssuanceEnabled
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['fiscalReceiptIssuanceEnabled'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsEnumsOrganizationType} type
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['type'] = undefined;

/**
 * Organization category label
 * @member {String} category
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['category'] = undefined;

/**
 * Organization Address (for authorized applications or if authorized by the organization)
 * @member {String} address
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['address'] = undefined;

/**
 * @member {module:model/HelloAssoModelsSharedGeoLocation} geolocation
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['geolocation'] = undefined;

/**
 * Unique identifier assigned when creating the association
 * @member {String} rnaNumber
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['rnaNumber'] = undefined;

/**
 * Logo of organization
 * @member {String} logo
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['logo'] = undefined;

/**
 * Name of organization
 * @member {String} name
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['name'] = undefined;

/**
 * @member {module:model/HelloAssoModelsEnumsGlobalRole} role
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['role'] = undefined;

/**
 * Organization city
 * @member {String} city
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['city'] = undefined;

/**
 * Organization zip code
 * @member {String} zipCode
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['zipCode'] = undefined;

/**
 * Organization description
 * @member {String} description
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['description'] = undefined;

/**
 * Last update date of the organization
 * @member {Date} updateDate
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['updateDate'] = undefined;

/**
 * @member {Number} categoryJoId
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['categoryJoId'] = undefined;

/**
 * The organization url
 * @member {String} url
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['url'] = undefined;

/**
 * The organization slug
 * @member {String} organizationSlug
 */
HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.prototype['organizationSlug'] = undefined;






export default HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel;
