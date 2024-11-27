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
import HelloAssoApiV5ModelsEnumsPriceCategory from './HelloAssoApiV5ModelsEnumsPriceCategory';
import HelloAssoApiV5ModelsEnumsTierType from './HelloAssoApiV5ModelsEnumsTierType';
import HelloAssoApiV5ModelsStatisticsItemCustomField from './HelloAssoApiV5ModelsStatisticsItemCustomField';
import HelloAssoApiV5ModelsStatisticsItemDiscount from './HelloAssoApiV5ModelsStatisticsItemDiscount';
import HelloAssoApiV5ModelsStatisticsItemOption from './HelloAssoApiV5ModelsStatisticsItemOption';
import HelloAssoApiV5ModelsStatisticsSharePayment from './HelloAssoApiV5ModelsStatisticsSharePayment';
import HelloAssoApiV5ModelsStatisticsUser from './HelloAssoApiV5ModelsStatisticsUser';

/**
 * The HelloAssoApiV5ModelsStatisticsOrderItem model module.
 * @module model/HelloAssoApiV5ModelsStatisticsOrderItem
 * @version public
 */
class HelloAssoApiV5ModelsStatisticsOrderItem {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsStatisticsOrderItem</code>.
     * Item on the order
     * @alias module:model/HelloAssoApiV5ModelsStatisticsOrderItem
     */
    constructor() { 
        
        HelloAssoApiV5ModelsStatisticsOrderItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsStatisticsOrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsStatisticsOrderItem} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsStatisticsOrderItem} The populated <code>HelloAssoApiV5ModelsStatisticsOrderItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsStatisticsOrderItem();

            if (data.hasOwnProperty('payments')) {
                obj['payments'] = ApiClient.convertToType(data['payments'], [HelloAssoApiV5ModelsStatisticsSharePayment]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = HelloAssoApiV5ModelsStatisticsUser.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('priceCategory')) {
                obj['priceCategory'] = HelloAssoApiV5ModelsEnumsPriceCategory.constructFromObject(data['priceCategory']);
            }
            if (data.hasOwnProperty('minAmount')) {
                obj['minAmount'] = ApiClient.convertToType(data['minAmount'], 'Number');
            }
            if (data.hasOwnProperty('discount')) {
                obj['discount'] = HelloAssoApiV5ModelsStatisticsItemDiscount.constructFromObject(data['discount']);
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], [HelloAssoApiV5ModelsStatisticsItemCustomField]);
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [HelloAssoApiV5ModelsStatisticsItemOption]);
            }
            if (data.hasOwnProperty('ticketUrl')) {
                obj['ticketUrl'] = ApiClient.convertToType(data['ticketUrl'], 'String');
            }
            if (data.hasOwnProperty('qrCode')) {
                obj['qrCode'] = ApiClient.convertToType(data['qrCode'], 'String');
            }
            if (data.hasOwnProperty('membershipCardUrl')) {
                obj['membershipCardUrl'] = ApiClient.convertToType(data['membershipCardUrl'], 'String');
            }
            if (data.hasOwnProperty('dayOfLevy')) {
                obj['dayOfLevy'] = ApiClient.convertToType(data['dayOfLevy'], 'Number');
            }
            if (data.hasOwnProperty('tierDescription')) {
                obj['tierDescription'] = ApiClient.convertToType(data['tierDescription'], 'String');
            }
            if (data.hasOwnProperty('tierId')) {
                obj['tierId'] = ApiClient.convertToType(data['tierId'], 'Number');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsStatisticsOrderItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsStatisticsOrderItem</code>.
     */
    static validateJSON(data) {
        if (data['payments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['payments'])) {
                throw new Error("Expected the field `payments` to be an array in the JSON data but got " + data['payments']);
            }
            // validate the optional field `payments` (array)
            for (const item of data['payments']) {
                HelloAssoApiV5ModelsStatisticsSharePayment.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          HelloAssoApiV5ModelsStatisticsUser.validateJSON(data['user']);
        }
        // validate the optional field `discount`
        if (data['discount']) { // data not null
          HelloAssoApiV5ModelsStatisticsItemDiscount.validateJSON(data['discount']);
        }
        if (data['customFields']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['customFields'])) {
                throw new Error("Expected the field `customFields` to be an array in the JSON data but got " + data['customFields']);
            }
            // validate the optional field `customFields` (array)
            for (const item of data['customFields']) {
                HelloAssoApiV5ModelsStatisticsItemCustomField.validateJSON(item);
            };
        }
        if (data['options']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['options'])) {
                throw new Error("Expected the field `options` to be an array in the JSON data but got " + data['options']);
            }
            // validate the optional field `options` (array)
            for (const item of data['options']) {
                HelloAssoApiV5ModelsStatisticsItemOption.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['ticketUrl'] && !(typeof data['ticketUrl'] === 'string' || data['ticketUrl'] instanceof String)) {
            throw new Error("Expected the field `ticketUrl` to be a primitive type in the JSON string but got " + data['ticketUrl']);
        }
        // ensure the json data is a string
        if (data['qrCode'] && !(typeof data['qrCode'] === 'string' || data['qrCode'] instanceof String)) {
            throw new Error("Expected the field `qrCode` to be a primitive type in the JSON string but got " + data['qrCode']);
        }
        // ensure the json data is a string
        if (data['membershipCardUrl'] && !(typeof data['membershipCardUrl'] === 'string' || data['membershipCardUrl'] instanceof String)) {
            throw new Error("Expected the field `membershipCardUrl` to be a primitive type in the JSON string but got " + data['membershipCardUrl']);
        }
        // ensure the json data is a string
        if (data['tierDescription'] && !(typeof data['tierDescription'] === 'string' || data['tierDescription'] instanceof String)) {
            throw new Error("Expected the field `tierDescription` to be a primitive type in the JSON string but got " + data['tierDescription']);
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }

        return true;
    }


}



/**
 * Payments linked to this item and each share between the item and the payment
 * @member {Array.<module:model/HelloAssoApiV5ModelsStatisticsSharePayment>} payments
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['payments'] = undefined;

/**
 * @member {String} name
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['name'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsStatisticsUser} user
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['user'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsEnumsPriceCategory} priceCategory
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['priceCategory'] = undefined;

/**
 * Minimum amount that was specified on the tier (in cents)
 * @member {Number} minAmount
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['minAmount'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsStatisticsItemDiscount} discount
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['discount'] = undefined;

/**
 * Custom fields related to this item
 * @member {Array.<module:model/HelloAssoApiV5ModelsStatisticsItemCustomField>} customFields
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['customFields'] = undefined;

/**
 * Extra options taken with this item
 * @member {Array.<module:model/HelloAssoApiV5ModelsStatisticsItemOption>} options
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['options'] = undefined;

/**
 * The Ticket Url
 * @member {String} ticketUrl
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['ticketUrl'] = undefined;

/**
 * The item QrCode (for ticket scanning only)
 * @member {String} qrCode
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['qrCode'] = undefined;

/**
 * The Membership Card Url
 * @member {String} membershipCardUrl
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['membershipCardUrl'] = undefined;

/**
 * The day of levy for monthly donation only
 * @member {Number} dayOfLevy
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['dayOfLevy'] = undefined;

/**
 * Tier description
 * @member {String} tierDescription
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['tierDescription'] = undefined;

/**
 * @member {Number} tierId
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['tierId'] = undefined;

/**
 * @member {String} comment
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['comment'] = undefined;

/**
 * ID of the Item
 * @member {Number} id
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['id'] = undefined;

/**
 * Total item Price in cents (after discount without extra options)
 * @member {Number} amount
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['amount'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsEnumsTierType} type
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['type'] = undefined;

/**
 * The raw amount (without reduction)
 * @member {Number} initialAmount
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['initialAmount'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsEnumsItemState} state
 */
HelloAssoApiV5ModelsStatisticsOrderItem.prototype['state'] = undefined;






export default HelloAssoApiV5ModelsStatisticsOrderItem;

