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
import HelloAssoApiV5ModelsCommonPaginationModel from './HelloAssoApiV5ModelsCommonPaginationModel';
import HelloAssoApiV5ModelsFormsFormLightModel from './HelloAssoApiV5ModelsFormsFormLightModel';

/**
 * The ResultsWithPaginationModelFormLightModel model module.
 * @module model/ResultsWithPaginationModelFormLightModel
 * @version public
 */
class ResultsWithPaginationModelFormLightModel {
    /**
     * Constructs a new <code>ResultsWithPaginationModelFormLightModel</code>.
     * ResultsWithPaginationModel class
     * @alias module:model/ResultsWithPaginationModelFormLightModel
     */
    constructor() { 
        
        ResultsWithPaginationModelFormLightModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResultsWithPaginationModelFormLightModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResultsWithPaginationModelFormLightModel} obj Optional instance to populate.
     * @return {module:model/ResultsWithPaginationModelFormLightModel} The populated <code>ResultsWithPaginationModelFormLightModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResultsWithPaginationModelFormLightModel();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [HelloAssoApiV5ModelsFormsFormLightModel]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = HelloAssoApiV5ModelsCommonPaginationModel.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResultsWithPaginationModelFormLightModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResultsWithPaginationModelFormLightModel</code>.
     */
    static validateJSON(data) {
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                HelloAssoApiV5ModelsFormsFormLightModel.validateJSON(item);
            };
        }
        // validate the optional field `pagination`
        if (data['pagination']) { // data not null
          HelloAssoApiV5ModelsCommonPaginationModel.validateJSON(data['pagination']);
        }

        return true;
    }


}



/**
 * Data property
 * @member {Array.<module:model/HelloAssoApiV5ModelsFormsFormLightModel>} data
 */
ResultsWithPaginationModelFormLightModel.prototype['data'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsCommonPaginationModel} pagination
 */
ResultsWithPaginationModelFormLightModel.prototype['pagination'] = undefined;






export default ResultsWithPaginationModelFormLightModel;
