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
* Enum class HelloAssoApiV5ModelsEnumsPaymentType.
* @enum {}
* @readonly
*/
export default class HelloAssoApiV5ModelsEnumsPaymentType {
    
        /**
         * value: "Offline"
         * @const
         */
        "Offline" = "Offline";

    
        /**
         * value: "Credit"
         * @const
         */
        "Credit" = "Credit";

    
        /**
         * value: "Debit"
         * @const
         */
        "Debit" = "Debit";

    

    /**
    * Returns a <code>HelloAssoApiV5ModelsEnumsPaymentType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/HelloAssoApiV5ModelsEnumsPaymentType} The enum <code>HelloAssoApiV5ModelsEnumsPaymentType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

