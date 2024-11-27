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
* Enum class HelloAssoApiV5ModelsEnumsPaymentProviderType.
* @enum {}
* @readonly
*/
export default class HelloAssoApiV5ModelsEnumsPaymentProviderType {
    
        /**
         * value: "Lemonway"
         * @const
         */
        "Lemonway" = "Lemonway";

    
        /**
         * value: "Stripe"
         * @const
         */
        "Stripe" = "Stripe";

    
        /**
         * value: "StripeV2"
         * @const
         */
        "StripeV2" = "StripeV2";

    
        /**
         * value: "HaPay"
         * @const
         */
        "HaPay" = "HaPay";

    

    /**
    * Returns a <code>HelloAssoApiV5ModelsEnumsPaymentProviderType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/HelloAssoApiV5ModelsEnumsPaymentProviderType} The enum <code>HelloAssoApiV5ModelsEnumsPaymentProviderType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
