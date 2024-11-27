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
import HelloAssoApiV5ModelsCommonDocumentModel from './HelloAssoApiV5ModelsCommonDocumentModel';
import HelloAssoApiV5ModelsCommonMetaModel from './HelloAssoApiV5ModelsCommonMetaModel';
import HelloAssoApiV5ModelsEnumsPaymentFrequencyType from './HelloAssoApiV5ModelsEnumsPaymentFrequencyType';
import HelloAssoApiV5ModelsEnumsTierType from './HelloAssoApiV5ModelsEnumsTierType';
import HelloAssoApiV5ModelsFormsTermModel from './HelloAssoApiV5ModelsFormsTermModel';

/**
 * The HelloAssoApiV5ModelsFormsTierPublicModel model module.
 * @module model/HelloAssoApiV5ModelsFormsTierPublicModel
 * @version public
 */
class HelloAssoApiV5ModelsFormsTierPublicModel {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsFormsTierPublicModel</code>.
     * TierPublicModel class
     * @alias module:model/HelloAssoApiV5ModelsFormsTierPublicModel
     */
    constructor() { 
        
        HelloAssoApiV5ModelsFormsTierPublicModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsFormsTierPublicModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsFormsTierPublicModel} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsFormsTierPublicModel} The populated <code>HelloAssoApiV5ModelsFormsTierPublicModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsFormsTierPublicModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tierType')) {
                obj['tierType'] = HelloAssoApiV5ModelsEnumsTierType.constructFromObject(data['tierType']);
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('vatRate')) {
                obj['vatRate'] = ApiClient.convertToType(data['vatRate'], 'Number');
            }
            if (data.hasOwnProperty('minAmount')) {
                obj['minAmount'] = ApiClient.convertToType(data['minAmount'], 'Number');
            }
            if (data.hasOwnProperty('paymentFrequency')) {
                obj['paymentFrequency'] = HelloAssoApiV5ModelsEnumsPaymentFrequencyType.constructFromObject(data['paymentFrequency']);
            }
            if (data.hasOwnProperty('maxPerUser')) {
                obj['maxPerUser'] = ApiClient.convertToType(data['maxPerUser'], 'Number');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = HelloAssoApiV5ModelsCommonMetaModel.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('saleStartDate')) {
                obj['saleStartDate'] = ApiClient.convertToType(data['saleStartDate'], 'Date');
            }
            if (data.hasOwnProperty('saleEndDate')) {
                obj['saleEndDate'] = ApiClient.convertToType(data['saleEndDate'], 'Date');
            }
            if (data.hasOwnProperty('isEligibleTaxReceipt')) {
                obj['isEligibleTaxReceipt'] = ApiClient.convertToType(data['isEligibleTaxReceipt'], 'Boolean');
            }
            if (data.hasOwnProperty('terms')) {
                obj['terms'] = ApiClient.convertToType(data['terms'], [HelloAssoApiV5ModelsFormsTermModel]);
            }
            if (data.hasOwnProperty('picture')) {
                obj['picture'] = HelloAssoApiV5ModelsCommonDocumentModel.constructFromObject(data['picture']);
            }
            if (data.hasOwnProperty('isExcludedFromFormPaymentTerms')) {
                obj['isExcludedFromFormPaymentTerms'] = ApiClient.convertToType(data['isExcludedFromFormPaymentTerms'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsFormsTierPublicModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsFormsTierPublicModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // validate the optional field `meta`
        if (data['meta']) { // data not null
          HelloAssoApiV5ModelsCommonMetaModel.validateJSON(data['meta']);
        }
        if (data['terms']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['terms'])) {
                throw new Error("Expected the field `terms` to be an array in the JSON data but got " + data['terms']);
            }
            // validate the optional field `terms` (array)
            for (const item of data['terms']) {
                HelloAssoApiV5ModelsFormsTermModel.validateJSON(item);
            };
        }
        // validate the optional field `picture`
        if (data['picture']) { // data not null
          HelloAssoApiV5ModelsCommonDocumentModel.validateJSON(data['picture']);
        }

        return true;
    }


}



/**
 * id
 * @member {Number} id
 */
HelloAssoApiV5ModelsFormsTierPublicModel.prototype['id'] = undefined;

/**
 * label
 * @member {String} label
 */
HelloAssoApiV5ModelsFormsTierPublicModel.prototype['label'] = undefined;

/**
 * description
 * @member {String} description
 */
HelloAssoApiV5ModelsFormsTierPublicModel.prototype['description'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsEnumsTierType} tierType
 */
HelloAssoApiV5ModelsFormsTierPublicModel.prototype['tierType'] = undefined;

/**
 * the Price in cents  if price equals 0 then it is free or there is a MinAmount
 * @member {Number} price
 */
HelloAssoApiV5ModelsFormsTierPublicModel.prototype['price'] = undefined;

/**
 * Vat rate if applicable  Amount have to be 0.10 for 10%
 * @member {Number} vatRate
 */
HelloAssoApiV5ModelsFormsTierPublicModel.prototype['vatRate'] = undefined;

/**
 * If set, it means the payment is free to choose, according to the specified minAmount in cents
 * @member {Number} minAmount
 */
HelloAssoApiV5ModelsFormsTierPublicModel.prototype['minAmount'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsEnumsPaymentFrequencyType} paymentFrequency
 */
HelloAssoApiV5ModelsFormsTierPublicModel.prototype['paymentFrequency'] = undefined;

/**
 * Max quantity buyable in this cart
 * @member {Number} maxPerUser
 */
HelloAssoApiV5ModelsFormsTierPublicModel.prototype['maxPerUser'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsCommonMetaModel} meta
 */
HelloAssoApiV5ModelsFormsTierPublicModel.prototype['meta'] = undefined;

/**
 * The datetime (Inclusive) at which the users can start buying this tier.  If null the tier will be available at the start of the event.
 * @member {Date} saleStartDate
 */
HelloAssoApiV5ModelsFormsTierPublicModel.prototype['saleStartDate'] = undefined;

/**
 * The datetime (Inclusive) at which the tier is no longer available.  If null the tier will be available until the end of the event.
 * @member {Date} saleEndDate
 */
HelloAssoApiV5ModelsFormsTierPublicModel.prototype['saleEndDate'] = undefined;

/**
 * Whether this is eligible to a deduction
 * @member {Boolean} isEligibleTaxReceipt
 */
HelloAssoApiV5ModelsFormsTierPublicModel.prototype['isEligibleTaxReceipt'] = undefined;

/**
 * Terms of tier
 * @member {Array.<module:model/HelloAssoApiV5ModelsFormsTermModel>} terms
 */
HelloAssoApiV5ModelsFormsTierPublicModel.prototype['terms'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsCommonDocumentModel} picture
 */
HelloAssoApiV5ModelsFormsTierPublicModel.prototype['picture'] = undefined;

/**
 * True means this tier must be paid in the initial payment, false means it can be paid in payment with installments  Null when the form payment terms are disabled or not compatible with the related form
 * @member {Boolean} isExcludedFromFormPaymentTerms
 */
HelloAssoApiV5ModelsFormsTierPublicModel.prototype['isExcludedFromFormPaymentTerms'] = undefined;






export default HelloAssoApiV5ModelsFormsTierPublicModel;

