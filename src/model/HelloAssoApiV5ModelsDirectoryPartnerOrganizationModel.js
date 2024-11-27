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
import HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel from './HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel';

/**
 * The HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel model module.
 * @module model/HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel
 * @version public
 */
class HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel</code>.
     * PartnerOrganizationModel class
     * @alias module:model/HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel
     */
    constructor() { 
        
        HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel} The populated <code>HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel();

            if (data.hasOwnProperty('organization')) {
                obj['organization'] = HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.constructFromObject(data['organization']);
            }
            if (data.hasOwnProperty('availableAccessToken')) {
                obj['availableAccessToken'] = ApiClient.convertToType(data['availableAccessToken'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel</code>.
     */
    static validateJSON(data) {
        // validate the optional field `organization`
        if (data['organization']) { // data not null
          HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.validateJSON(data['organization']);
        }

        return true;
    }


}



/**
 * @member {module:model/HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel} organization
 */
HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel.prototype['organization'] = undefined;

/**
 * True if exist a valid organization access token obtained by authorize flow
 * @member {Boolean} availableAccessToken
 */
HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel.prototype['availableAccessToken'] = undefined;






export default HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel;
