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
import HelloAssoApiV5ModelsCommonMetaModel from './HelloAssoApiV5ModelsCommonMetaModel';
import HelloAssoApiV5ModelsEnumsFormType from './HelloAssoApiV5ModelsEnumsFormType';
import HelloAssoApiV5ModelsEnumsOrganizationType from './HelloAssoApiV5ModelsEnumsOrganizationType';

/**
 * The HelloAssoApiV5ModelsStatisticsOrderLight model module.
 * @module model/HelloAssoApiV5ModelsStatisticsOrderLight
 * @version public
 */
class HelloAssoApiV5ModelsStatisticsOrderLight {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsStatisticsOrderLight</code>.
     * @alias module:model/HelloAssoApiV5ModelsStatisticsOrderLight
     */
    constructor() { 
        
        HelloAssoApiV5ModelsStatisticsOrderLight.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsStatisticsOrderLight</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsStatisticsOrderLight} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsStatisticsOrderLight} The populated <code>HelloAssoApiV5ModelsStatisticsOrderLight</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsStatisticsOrderLight();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('formSlug')) {
                obj['formSlug'] = ApiClient.convertToType(data['formSlug'], 'String');
            }
            if (data.hasOwnProperty('formType')) {
                obj['formType'] = HelloAssoApiV5ModelsEnumsFormType.constructFromObject(data['formType']);
            }
            if (data.hasOwnProperty('organizationName')) {
                obj['organizationName'] = ApiClient.convertToType(data['organizationName'], 'String');
            }
            if (data.hasOwnProperty('organizationSlug')) {
                obj['organizationSlug'] = ApiClient.convertToType(data['organizationSlug'], 'String');
            }
            if (data.hasOwnProperty('organizationType')) {
                obj['organizationType'] = HelloAssoApiV5ModelsEnumsOrganizationType.constructFromObject(data['organizationType']);
            }
            if (data.hasOwnProperty('organizationIsUnderColucheLaw')) {
                obj['organizationIsUnderColucheLaw'] = ApiClient.convertToType(data['organizationIsUnderColucheLaw'], 'Boolean');
            }
            if (data.hasOwnProperty('checkoutIntentId')) {
                obj['checkoutIntentId'] = ApiClient.convertToType(data['checkoutIntentId'], 'Number');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = HelloAssoApiV5ModelsCommonMetaModel.constructFromObject(data['meta']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsStatisticsOrderLight</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsStatisticsOrderLight</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['formSlug'] && !(typeof data['formSlug'] === 'string' || data['formSlug'] instanceof String)) {
            throw new Error("Expected the field `formSlug` to be a primitive type in the JSON string but got " + data['formSlug']);
        }
        // ensure the json data is a string
        if (data['organizationName'] && !(typeof data['organizationName'] === 'string' || data['organizationName'] instanceof String)) {
            throw new Error("Expected the field `organizationName` to be a primitive type in the JSON string but got " + data['organizationName']);
        }
        // ensure the json data is a string
        if (data['organizationSlug'] && !(typeof data['organizationSlug'] === 'string' || data['organizationSlug'] instanceof String)) {
            throw new Error("Expected the field `organizationSlug` to be a primitive type in the JSON string but got " + data['organizationSlug']);
        }
        // validate the optional field `meta`
        if (data['meta']) { // data not null
          HelloAssoApiV5ModelsCommonMetaModel.validateJSON(data['meta']);
        }

        return true;
    }


}



/**
 * The ID of the Order
 * @member {Number} id
 */
HelloAssoApiV5ModelsStatisticsOrderLight.prototype['id'] = undefined;

/**
 * Order creation date
 * @member {Date} date
 */
HelloAssoApiV5ModelsStatisticsOrderLight.prototype['date'] = undefined;

/**
 * FormSlug (lowercase name of the form without special characters)
 * @member {String} formSlug
 */
HelloAssoApiV5ModelsStatisticsOrderLight.prototype['formSlug'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsEnumsFormType} formType
 */
HelloAssoApiV5ModelsStatisticsOrderLight.prototype['formType'] = undefined;

/**
 * The organization name.
 * @member {String} organizationName
 */
HelloAssoApiV5ModelsStatisticsOrderLight.prototype['organizationName'] = undefined;

/**
 * OrganizationSlug (lowercase name of the organization without special characters)
 * @member {String} organizationSlug
 */
HelloAssoApiV5ModelsStatisticsOrderLight.prototype['organizationSlug'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsEnumsOrganizationType} organizationType
 */
HelloAssoApiV5ModelsStatisticsOrderLight.prototype['organizationType'] = undefined;

/**
 * Whether or not the organization is subject to the coluche law
 * @member {Boolean} organizationIsUnderColucheLaw
 */
HelloAssoApiV5ModelsStatisticsOrderLight.prototype['organizationIsUnderColucheLaw'] = undefined;

/**
 * Checkout intent Id if available
 * @member {Number} checkoutIntentId
 */
HelloAssoApiV5ModelsStatisticsOrderLight.prototype['checkoutIntentId'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsCommonMetaModel} meta
 */
HelloAssoApiV5ModelsStatisticsOrderLight.prototype['meta'] = undefined;






export default HelloAssoApiV5ModelsStatisticsOrderLight;
