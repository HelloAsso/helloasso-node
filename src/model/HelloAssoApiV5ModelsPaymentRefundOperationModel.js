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
import HelloAssoApiV5ModelsEnumsOperationState from './HelloAssoApiV5ModelsEnumsOperationState';

/**
 * The HelloAssoApiV5ModelsPaymentRefundOperationModel model module.
 * @module model/HelloAssoApiV5ModelsPaymentRefundOperationModel
 * @version public
 */
class HelloAssoApiV5ModelsPaymentRefundOperationModel {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsPaymentRefundOperationModel</code>.
     * RefundOperationModel class
     * @alias module:model/HelloAssoApiV5ModelsPaymentRefundOperationModel
     */
    constructor() { 
        
        HelloAssoApiV5ModelsPaymentRefundOperationModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsPaymentRefundOperationModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsPaymentRefundOperationModel} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsPaymentRefundOperationModel} The populated <code>HelloAssoApiV5ModelsPaymentRefundOperationModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsPaymentRefundOperationModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('cancelOrder')) {
                obj['cancelOrder'] = ApiClient.convertToType(data['cancelOrder'], 'Boolean');
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = HelloAssoApiV5ModelsEnumsOperationState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('sendRefundMail')) {
                obj['sendRefundMail'] = ApiClient.convertToType(data['sendRefundMail'], 'Boolean');
            }
            if (data.hasOwnProperty('paymentId')) {
                obj['paymentId'] = ApiClient.convertToType(data['paymentId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsPaymentRefundOperationModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsPaymentRefundOperationModel</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The refund operation id
 * @member {Number} id
 */
HelloAssoApiV5ModelsPaymentRefundOperationModel.prototype['id'] = undefined;

/**
 * The amount to refund
 * @member {Number} amount
 */
HelloAssoApiV5ModelsPaymentRefundOperationModel.prototype['amount'] = undefined;

/**
 * Whether the future payments and linked items of this order must be canceled (possible only if the payment is fully refunded)
 * @member {Boolean} cancelOrder
 */
HelloAssoApiV5ModelsPaymentRefundOperationModel.prototype['cancelOrder'] = undefined;

/**
 * The refund operation creation date
 * @member {Date} creationDate
 */
HelloAssoApiV5ModelsPaymentRefundOperationModel.prototype['creationDate'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsEnumsOperationState} state
 */
HelloAssoApiV5ModelsPaymentRefundOperationModel.prototype['state'] = undefined;

/**
 * Whether a refund mail must be send or not.
 * @member {Boolean} sendRefundMail
 */
HelloAssoApiV5ModelsPaymentRefundOperationModel.prototype['sendRefundMail'] = undefined;

/**
 * The payment id
 * @member {Number} paymentId
 */
HelloAssoApiV5ModelsPaymentRefundOperationModel.prototype['paymentId'] = undefined;






export default HelloAssoApiV5ModelsPaymentRefundOperationModel;
