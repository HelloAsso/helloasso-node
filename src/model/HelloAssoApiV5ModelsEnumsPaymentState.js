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
* Enum class HelloAssoApiV5ModelsEnumsPaymentState.
* @enum {}
* @readonly
*/
export default class HelloAssoApiV5ModelsEnumsPaymentState {
    
        /**
         * value: "Pending"
         * @const
         */
        "Pending" = "Pending";

    
        /**
         * value: "Authorized"
         * @const
         */
        "Authorized" = "Authorized";

    
        /**
         * value: "Refused"
         * @const
         */
        "Refused" = "Refused";

    
        /**
         * value: "Unknown"
         * @const
         */
        "Unknown" = "Unknown";

    
        /**
         * value: "Registered"
         * @const
         */
        "Registered" = "Registered";

    
        /**
         * value: "Error"
         * @const
         */
        "Error" = "Error";

    
        /**
         * value: "Refunded"
         * @const
         */
        "Refunded" = "Refunded";

    
        /**
         * value: "Refunding"
         * @const
         */
        "Refunding" = "Refunding";

    
        /**
         * value: "Waiting"
         * @const
         */
        "Waiting" = "Waiting";

    
        /**
         * value: "Canceled"
         * @const
         */
        "Canceled" = "Canceled";

    
        /**
         * value: "Contested"
         * @const
         */
        "Contested" = "Contested";

    
        /**
         * value: "WaitingBankValidation"
         * @const
         */
        "WaitingBankValidation" = "WaitingBankValidation";

    
        /**
         * value: "WaitingBankWithdraw"
         * @const
         */
        "WaitingBankWithdraw" = "WaitingBankWithdraw";

    
        /**
         * value: "Abandoned"
         * @const
         */
        "Abandoned" = "Abandoned";

    
        /**
         * value: "WaitingAuthentication"
         * @const
         */
        "WaitingAuthentication" = "WaitingAuthentication";

    
        /**
         * value: "AuthorizedPreprod"
         * @const
         */
        "AuthorizedPreprod" = "AuthorizedPreprod";

    
        /**
         * value: "Corrected"
         * @const
         */
        "Corrected" = "Corrected";

    
        /**
         * value: "Deleted"
         * @const
         */
        "Deleted" = "Deleted";

    
        /**
         * value: "Inconsistent"
         * @const
         */
        "Inconsistent" = "Inconsistent";

    
        /**
         * value: "NoDonation"
         * @const
         */
        "NoDonation" = "NoDonation";

    
        /**
         * value: "Init"
         * @const
         */
        "Init" = "Init";

    

    /**
    * Returns a <code>HelloAssoApiV5ModelsEnumsPaymentState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/HelloAssoApiV5ModelsEnumsPaymentState} The enum <code>HelloAssoApiV5ModelsEnumsPaymentState</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

