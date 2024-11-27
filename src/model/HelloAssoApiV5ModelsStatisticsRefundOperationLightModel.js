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
import HelloAssoApiV5ModelsEnumsOperationState from './HelloAssoApiV5ModelsEnumsOperationState';

/**
 * The HelloAssoApiV5ModelsStatisticsRefundOperationLightModel model module.
 * @module model/HelloAssoApiV5ModelsStatisticsRefundOperationLightModel
 * @version public
 */
class HelloAssoApiV5ModelsStatisticsRefundOperationLightModel {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsStatisticsRefundOperationLightModel</code>.
     * The refund operation with the Id, amount, amount tip and the status.
     * @alias module:model/HelloAssoApiV5ModelsStatisticsRefundOperationLightModel
     */
    constructor() { 
        
        HelloAssoApiV5ModelsStatisticsRefundOperationLightModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsStatisticsRefundOperationLightModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsStatisticsRefundOperationLightModel} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsStatisticsRefundOperationLightModel} The populated <code>HelloAssoApiV5ModelsStatisticsRefundOperationLightModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsStatisticsRefundOperationLightModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('amountTip')) {
                obj['amountTip'] = ApiClient.convertToType(data['amountTip'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = HelloAssoApiV5ModelsEnumsOperationState.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = HelloAssoApiV5ModelsCommonMetaModel.constructFromObject(data['meta']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsStatisticsRefundOperationLightModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsStatisticsRefundOperationLightModel</code>.
     */
    static validateJSON(data) {
        // validate the optional field `meta`
        if (data['meta']) { // data not null
          HelloAssoApiV5ModelsCommonMetaModel.validateJSON(data['meta']);
        }

        return true;
    }


}



/**
 * The refund operation identifier.
 * @member {Number} id
 */
HelloAssoApiV5ModelsStatisticsRefundOperationLightModel.prototype['id'] = undefined;

/**
 * The amount for this refund.
 * @member {Number} amount
 */
HelloAssoApiV5ModelsStatisticsRefundOperationLightModel.prototype['amount'] = undefined;

/**
 * The amount tip for this refund.
 * @member {Number} amountTip
 */
HelloAssoApiV5ModelsStatisticsRefundOperationLightModel.prototype['amountTip'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsEnumsOperationState} status
 */
HelloAssoApiV5ModelsStatisticsRefundOperationLightModel.prototype['status'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsCommonMetaModel} meta
 */
HelloAssoApiV5ModelsStatisticsRefundOperationLightModel.prototype['meta'] = undefined;






export default HelloAssoApiV5ModelsStatisticsRefundOperationLightModel;
