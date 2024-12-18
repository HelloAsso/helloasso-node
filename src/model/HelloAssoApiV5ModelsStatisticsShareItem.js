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
 * The HelloAssoApiV5ModelsStatisticsShareItem model module.
 * @module model/HelloAssoApiV5ModelsStatisticsShareItem
 * @version public
 */
class HelloAssoApiV5ModelsStatisticsShareItem {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsStatisticsShareItem</code>.
     * @alias module:model/HelloAssoApiV5ModelsStatisticsShareItem
     */
    constructor() { 
        
        HelloAssoApiV5ModelsStatisticsShareItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsStatisticsShareItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsStatisticsShareItem} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsStatisticsShareItem} The populated <code>HelloAssoApiV5ModelsStatisticsShareItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsStatisticsShareItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('shareAmount')) {
                obj['shareAmount'] = ApiClient.convertToType(data['shareAmount'], 'Number');
            }
            if (data.hasOwnProperty('shareItemAmount')) {
                obj['shareItemAmount'] = ApiClient.convertToType(data['shareItemAmount'], 'Number');
            }
            if (data.hasOwnProperty('shareOptionsAmount')) {
                obj['shareOptionsAmount'] = ApiClient.convertToType(data['shareOptionsAmount'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsStatisticsShareItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsStatisticsShareItem</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Id of the order item
 * @member {Number} id
 */
HelloAssoApiV5ModelsStatisticsShareItem.prototype['id'] = undefined;

/**
 * Amount of the payment assigned to the item and its options (in cents)
 * @member {Number} shareAmount
 */
HelloAssoApiV5ModelsStatisticsShareItem.prototype['shareAmount'] = undefined;

/**
 * Amount of the item payed on this payment term (in cents)
 * @member {Number} shareItemAmount
 */
HelloAssoApiV5ModelsStatisticsShareItem.prototype['shareItemAmount'] = undefined;

/**
 * Amount of all extra options linked to this item and payed on this payment (in cents)
 * @member {Number} shareOptionsAmount
 */
HelloAssoApiV5ModelsStatisticsShareItem.prototype['shareOptionsAmount'] = undefined;






export default HelloAssoApiV5ModelsStatisticsShareItem;

