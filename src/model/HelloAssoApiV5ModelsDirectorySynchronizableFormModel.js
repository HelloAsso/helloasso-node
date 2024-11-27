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
import HelloAssoApiV5ModelsEnumsRecordActionType from './HelloAssoApiV5ModelsEnumsRecordActionType';
import HelloAssoApiV5ModelsFormsFormBasicModel from './HelloAssoApiV5ModelsFormsFormBasicModel';

/**
 * The HelloAssoApiV5ModelsDirectorySynchronizableFormModel model module.
 * @module model/HelloAssoApiV5ModelsDirectorySynchronizableFormModel
 * @version public
 */
class HelloAssoApiV5ModelsDirectorySynchronizableFormModel {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsDirectorySynchronizableFormModel</code>.
     * SynchronizableFormModel class
     * @alias module:model/HelloAssoApiV5ModelsDirectorySynchronizableFormModel
     */
    constructor() { 
        
        HelloAssoApiV5ModelsDirectorySynchronizableFormModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsDirectorySynchronizableFormModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsDirectorySynchronizableFormModel} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsDirectorySynchronizableFormModel} The populated <code>HelloAssoApiV5ModelsDirectorySynchronizableFormModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsDirectorySynchronizableFormModel();

            if (data.hasOwnProperty('action')) {
                obj['action'] = HelloAssoApiV5ModelsEnumsRecordActionType.constructFromObject(data['action']);
            }
            if (data.hasOwnProperty('record')) {
                obj['record'] = HelloAssoApiV5ModelsFormsFormBasicModel.constructFromObject(data['record']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsDirectorySynchronizableFormModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsDirectorySynchronizableFormModel</code>.
     */
    static validateJSON(data) {
        // validate the optional field `record`
        if (data['record']) { // data not null
          HelloAssoApiV5ModelsFormsFormBasicModel.validateJSON(data['record']);
        }

        return true;
    }


}



/**
 * @member {module:model/HelloAssoApiV5ModelsEnumsRecordActionType} action
 */
HelloAssoApiV5ModelsDirectorySynchronizableFormModel.prototype['action'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsFormsFormBasicModel} record
 */
HelloAssoApiV5ModelsDirectorySynchronizableFormModel.prototype['record'] = undefined;






export default HelloAssoApiV5ModelsDirectorySynchronizableFormModel;
