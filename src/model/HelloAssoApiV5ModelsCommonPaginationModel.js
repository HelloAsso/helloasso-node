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
 * The HelloAssoApiV5ModelsCommonPaginationModel model module.
 * @module model/HelloAssoApiV5ModelsCommonPaginationModel
 * @version public
 */
class HelloAssoApiV5ModelsCommonPaginationModel {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsCommonPaginationModel</code>.
     * Pagination model class
     * @alias module:model/HelloAssoApiV5ModelsCommonPaginationModel
     */
    constructor() { 
        
        HelloAssoApiV5ModelsCommonPaginationModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsCommonPaginationModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsCommonPaginationModel} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsCommonPaginationModel} The populated <code>HelloAssoApiV5ModelsCommonPaginationModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsCommonPaginationModel();

            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
            if (data.hasOwnProperty('pageIndex')) {
                obj['pageIndex'] = ApiClient.convertToType(data['pageIndex'], 'Number');
            }
            if (data.hasOwnProperty('totalPages')) {
                obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Number');
            }
            if (data.hasOwnProperty('continuationToken')) {
                obj['continuationToken'] = ApiClient.convertToType(data['continuationToken'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsCommonPaginationModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsCommonPaginationModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['continuationToken'] && !(typeof data['continuationToken'] === 'string' || data['continuationToken'] instanceof String)) {
            throw new Error("Expected the field `continuationToken` to be a primitive type in the JSON string but got " + data['continuationToken']);
        }

        return true;
    }


}



/**
 * Page size
 * @member {Number} pageSize
 */
HelloAssoApiV5ModelsCommonPaginationModel.prototype['pageSize'] = undefined;

/**
 * Total number of results available
 * @member {Number} totalCount
 */
HelloAssoApiV5ModelsCommonPaginationModel.prototype['totalCount'] = undefined;

/**
 * Current page index
 * @member {Number} pageIndex
 */
HelloAssoApiV5ModelsCommonPaginationModel.prototype['pageIndex'] = undefined;

/**
 * Total number of pages of results with current page size
 * @member {Number} totalPages
 */
HelloAssoApiV5ModelsCommonPaginationModel.prototype['totalPages'] = undefined;

/**
 * Continuation Token to get next results
 * @member {String} continuationToken
 */
HelloAssoApiV5ModelsCommonPaginationModel.prototype['continuationToken'] = undefined;






export default HelloAssoApiV5ModelsCommonPaginationModel;

