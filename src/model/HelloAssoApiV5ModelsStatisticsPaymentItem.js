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
import HelloAssoApiV5ModelsEnumsItemState from './HelloAssoApiV5ModelsEnumsItemState';
import HelloAssoApiV5ModelsEnumsTierType from './HelloAssoApiV5ModelsEnumsTierType';

/**
 * The HelloAssoApiV5ModelsStatisticsPaymentItem model module.
 * @module model/HelloAssoApiV5ModelsStatisticsPaymentItem
 * @version public
 */
class HelloAssoApiV5ModelsStatisticsPaymentItem {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsStatisticsPaymentItem</code>.
     * Item linked to a payment
     * @alias module:model/HelloAssoApiV5ModelsStatisticsPaymentItem
     */
    constructor() { 
        
        HelloAssoApiV5ModelsStatisticsPaymentItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsStatisticsPaymentItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsStatisticsPaymentItem} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsStatisticsPaymentItem} The populated <code>HelloAssoApiV5ModelsStatisticsPaymentItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsStatisticsPaymentItem();

            if (data.hasOwnProperty('shareAmount')) {
                obj['shareAmount'] = ApiClient.convertToType(data['shareAmount'], 'Number');
            }
            if (data.hasOwnProperty('shareItemAmount')) {
                obj['shareItemAmount'] = ApiClient.convertToType(data['shareItemAmount'], 'Number');
            }
            if (data.hasOwnProperty('shareOptionsAmount')) {
                obj['shareOptionsAmount'] = ApiClient.convertToType(data['shareOptionsAmount'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = HelloAssoApiV5ModelsEnumsTierType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('initialAmount')) {
                obj['initialAmount'] = ApiClient.convertToType(data['initialAmount'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = HelloAssoApiV5ModelsEnumsItemState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsStatisticsPaymentItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsStatisticsPaymentItem</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * Amount of the payment assigned to the item and its options (in cents)
 * @member {Number} shareAmount
 */
HelloAssoApiV5ModelsStatisticsPaymentItem.prototype['shareAmount'] = undefined;

/**
 * Amount of the item payed on this payment term (in cents)
 * @member {Number} shareItemAmount
 */
HelloAssoApiV5ModelsStatisticsPaymentItem.prototype['shareItemAmount'] = undefined;

/**
 * Amount of all extra options linked to this item and payed on this payment (in cents)
 * @member {Number} shareOptionsAmount
 */
HelloAssoApiV5ModelsStatisticsPaymentItem.prototype['shareOptionsAmount'] = undefined;

/**
 * ID of the Item
 * @member {Number} id
 */
HelloAssoApiV5ModelsStatisticsPaymentItem.prototype['id'] = undefined;

/**
 * Total item Price in cents (after discount without extra options)
 * @member {Number} amount
 */
HelloAssoApiV5ModelsStatisticsPaymentItem.prototype['amount'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsEnumsTierType} type
 */
HelloAssoApiV5ModelsStatisticsPaymentItem.prototype['type'] = undefined;

/**
 * The raw amount (without reduction)
 * @member {Number} initialAmount
 */
HelloAssoApiV5ModelsStatisticsPaymentItem.prototype['initialAmount'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsEnumsItemState} state
 */
HelloAssoApiV5ModelsStatisticsPaymentItem.prototype['state'] = undefined;

/**
 * Name of the item paid (relevant for checkout forms)
 * @member {String} name
 */
HelloAssoApiV5ModelsStatisticsPaymentItem.prototype['name'] = undefined;






export default HelloAssoApiV5ModelsStatisticsPaymentItem;

