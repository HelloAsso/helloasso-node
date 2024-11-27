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
* Enum class HelloAssoApiV5ModelsEnumsFormState.
* @enum {}
* @readonly
*/
export default class HelloAssoApiV5ModelsEnumsFormState {
    
        /**
         * value: "Public"
         * @const
         */
        "Public" = "Public";

    
        /**
         * value: "Private"
         * @const
         */
        "Private" = "Private";

    
        /**
         * value: "Draft"
         * @const
         */
        "Draft" = "Draft";

    
        /**
         * value: "Deleted"
         * @const
         */
        "Deleted" = "Deleted";

    
        /**
         * value: "Disabled"
         * @const
         */
        "Disabled" = "Disabled";

    

    /**
    * Returns a <code>HelloAssoApiV5ModelsEnumsFormState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/HelloAssoApiV5ModelsEnumsFormState} The enum <code>HelloAssoApiV5ModelsEnumsFormState</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

