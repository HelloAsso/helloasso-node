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
import HelloAssoApiV5ModelsCommonContactModel from './HelloAssoApiV5ModelsCommonContactModel';
import HelloAssoApiV5ModelsCommonPlaceModel from './HelloAssoApiV5ModelsCommonPlaceModel';
import HelloAssoApiV5ModelsEnumsMembershipValidityType from './HelloAssoApiV5ModelsEnumsMembershipValidityType';
import HelloAssoApiV5ModelsFormsTierLightModel from './HelloAssoApiV5ModelsFormsTierLightModel';

/**
 * The HelloAssoApiV5ModelsFormsFormQuickCreateRequest model module.
 * @module model/HelloAssoApiV5ModelsFormsFormQuickCreateRequest
 * @version public
 */
class HelloAssoApiV5ModelsFormsFormQuickCreateRequest {
    /**
     * Constructs a new <code>HelloAssoApiV5ModelsFormsFormQuickCreateRequest</code>.
     * @alias module:model/HelloAssoApiV5ModelsFormsFormQuickCreateRequest
     * @param title {String} The title of the form. It will be used to generate the url which that can't be changed.
     */
    constructor(title) { 
        
        HelloAssoApiV5ModelsFormsFormQuickCreateRequest.initialize(this, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title) { 
        obj['title'] = title;
    }

    /**
     * Constructs a <code>HelloAssoApiV5ModelsFormsFormQuickCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HelloAssoApiV5ModelsFormsFormQuickCreateRequest} obj Optional instance to populate.
     * @return {module:model/HelloAssoApiV5ModelsFormsFormQuickCreateRequest} The populated <code>HelloAssoApiV5ModelsFormsFormQuickCreateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HelloAssoApiV5ModelsFormsFormQuickCreateRequest();

            if (data.hasOwnProperty('tierList')) {
                obj['tierList'] = ApiClient.convertToType(data['tierList'], [HelloAssoApiV5ModelsFormsTierLightModel]);
            }
            if (data.hasOwnProperty('banner')) {
                obj['banner'] = ApiClient.convertToType(data['banner'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('privateTitle')) {
                obj['privateTitle'] = ApiClient.convertToType(data['privateTitle'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('activityTypeId')) {
                obj['activityTypeId'] = ApiClient.convertToType(data['activityTypeId'], 'Number');
            }
            if (data.hasOwnProperty('place')) {
                obj['place'] = HelloAssoApiV5ModelsCommonPlaceModel.constructFromObject(data['place']);
            }
            if (data.hasOwnProperty('saleEndDate')) {
                obj['saleEndDate'] = ApiClient.convertToType(data['saleEndDate'], 'Date');
            }
            if (data.hasOwnProperty('saleStartDate')) {
                obj['saleStartDate'] = ApiClient.convertToType(data['saleStartDate'], 'Date');
            }
            if (data.hasOwnProperty('validityType')) {
                obj['validityType'] = HelloAssoApiV5ModelsEnumsMembershipValidityType.constructFromObject(data['validityType']);
            }
            if (data.hasOwnProperty('acceptOpenDonation')) {
                obj['acceptOpenDonation'] = ApiClient.convertToType(data['acceptOpenDonation'], 'Boolean');
            }
            if (data.hasOwnProperty('acceptOpenMonthlyDonation')) {
                obj['acceptOpenMonthlyDonation'] = ApiClient.convertToType(data['acceptOpenMonthlyDonation'], 'Boolean');
            }
            if (data.hasOwnProperty('allowComment')) {
                obj['allowComment'] = ApiClient.convertToType(data['allowComment'], 'Boolean');
            }
            if (data.hasOwnProperty('amountVisible')) {
                obj['amountVisible'] = ApiClient.convertToType(data['amountVisible'], 'Boolean');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('widgetButtonText')) {
                obj['widgetButtonText'] = ApiClient.convertToType(data['widgetButtonText'], 'String');
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = HelloAssoApiV5ModelsCommonContactModel.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('displayContributorName')) {
                obj['displayContributorName'] = ApiClient.convertToType(data['displayContributorName'], 'Boolean');
            }
            if (data.hasOwnProperty('displayParticipantsCount')) {
                obj['displayParticipantsCount'] = ApiClient.convertToType(data['displayParticipantsCount'], 'Boolean');
            }
            if (data.hasOwnProperty('displayRemainingEntries')) {
                obj['displayRemainingEntries'] = ApiClient.convertToType(data['displayRemainingEntries'], 'Boolean');
            }
            if (data.hasOwnProperty('financialGoal')) {
                obj['financialGoal'] = ApiClient.convertToType(data['financialGoal'], 'Number');
            }
            if (data.hasOwnProperty('generateMembershipCards')) {
                obj['generateMembershipCards'] = ApiClient.convertToType(data['generateMembershipCards'], 'Boolean');
            }
            if (data.hasOwnProperty('generateTickets')) {
                obj['generateTickets'] = ApiClient.convertToType(data['generateTickets'], 'Boolean');
            }
            if (data.hasOwnProperty('invertDescriptions')) {
                obj['invertDescriptions'] = ApiClient.convertToType(data['invertDescriptions'], 'Boolean');
            }
            if (data.hasOwnProperty('labelConditionsAndTermsFile')) {
                obj['labelConditionsAndTermsFile'] = ApiClient.convertToType(data['labelConditionsAndTermsFile'], 'String');
            }
            if (data.hasOwnProperty('longDescription')) {
                obj['longDescription'] = ApiClient.convertToType(data['longDescription'], 'String');
            }
            if (data.hasOwnProperty('openDonationPresetAmounts')) {
                obj['openDonationPresetAmounts'] = ApiClient.convertToType(data['openDonationPresetAmounts'], ['Number']);
            }
            if (data.hasOwnProperty('personalizedMessage')) {
                obj['personalizedMessage'] = ApiClient.convertToType(data['personalizedMessage'], 'String');
            }
            if (data.hasOwnProperty('projectBeneficiaries')) {
                obj['projectBeneficiaries'] = ApiClient.convertToType(data['projectBeneficiaries'], 'String');
            }
            if (data.hasOwnProperty('projectExpensesDetails')) {
                obj['projectExpensesDetails'] = ApiClient.convertToType(data['projectExpensesDetails'], 'String');
            }
            if (data.hasOwnProperty('projectOwners')) {
                obj['projectOwners'] = ApiClient.convertToType(data['projectOwners'], 'String');
            }
            if (data.hasOwnProperty('projectTargetCountry')) {
                obj['projectTargetCountry'] = ApiClient.convertToType(data['projectTargetCountry'], 'String');
            }
            if (data.hasOwnProperty('allowOrganismPayer')) {
                obj['allowOrganismPayer'] = ApiClient.convertToType(data['allowOrganismPayer'], 'Boolean');
            }
            if (data.hasOwnProperty('allowIndividualPayer')) {
                obj['allowIndividualPayer'] = ApiClient.convertToType(data['allowIndividualPayer'], 'Boolean');
            }
            if (data.hasOwnProperty('maxEntries')) {
                obj['maxEntries'] = ApiClient.convertToType(data['maxEntries'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HelloAssoApiV5ModelsFormsFormQuickCreateRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HelloAssoApiV5ModelsFormsFormQuickCreateRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of HelloAssoApiV5ModelsFormsFormQuickCreateRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['tierList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tierList'])) {
                throw new Error("Expected the field `tierList` to be an array in the JSON data but got " + data['tierList']);
            }
            // validate the optional field `tierList` (array)
            for (const item of data['tierList']) {
                HelloAssoApiV5ModelsFormsTierLightModel.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['banner'] && !(typeof data['banner'] === 'string' || data['banner'] instanceof String)) {
            throw new Error("Expected the field `banner` to be a primitive type in the JSON string but got " + data['banner']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['logo'] && !(typeof data['logo'] === 'string' || data['logo'] instanceof String)) {
            throw new Error("Expected the field `logo` to be a primitive type in the JSON string but got " + data['logo']);
        }
        // ensure the json data is a string
        if (data['privateTitle'] && !(typeof data['privateTitle'] === 'string' || data['privateTitle'] instanceof String)) {
            throw new Error("Expected the field `privateTitle` to be a primitive type in the JSON string but got " + data['privateTitle']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // validate the optional field `place`
        if (data['place']) { // data not null
          HelloAssoApiV5ModelsCommonPlaceModel.validateJSON(data['place']);
        }
        // ensure the json data is a string
        if (data['color'] && !(typeof data['color'] === 'string' || data['color'] instanceof String)) {
            throw new Error("Expected the field `color` to be a primitive type in the JSON string but got " + data['color']);
        }
        // ensure the json data is a string
        if (data['widgetButtonText'] && !(typeof data['widgetButtonText'] === 'string' || data['widgetButtonText'] instanceof String)) {
            throw new Error("Expected the field `widgetButtonText` to be a primitive type in the JSON string but got " + data['widgetButtonText']);
        }
        // validate the optional field `contact`
        if (data['contact']) { // data not null
          HelloAssoApiV5ModelsCommonContactModel.validateJSON(data['contact']);
        }
        // ensure the json data is a string
        if (data['labelConditionsAndTermsFile'] && !(typeof data['labelConditionsAndTermsFile'] === 'string' || data['labelConditionsAndTermsFile'] instanceof String)) {
            throw new Error("Expected the field `labelConditionsAndTermsFile` to be a primitive type in the JSON string but got " + data['labelConditionsAndTermsFile']);
        }
        // ensure the json data is a string
        if (data['longDescription'] && !(typeof data['longDescription'] === 'string' || data['longDescription'] instanceof String)) {
            throw new Error("Expected the field `longDescription` to be a primitive type in the JSON string but got " + data['longDescription']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['openDonationPresetAmounts'])) {
            throw new Error("Expected the field `openDonationPresetAmounts` to be an array in the JSON data but got " + data['openDonationPresetAmounts']);
        }
        // ensure the json data is a string
        if (data['personalizedMessage'] && !(typeof data['personalizedMessage'] === 'string' || data['personalizedMessage'] instanceof String)) {
            throw new Error("Expected the field `personalizedMessage` to be a primitive type in the JSON string but got " + data['personalizedMessage']);
        }
        // ensure the json data is a string
        if (data['projectBeneficiaries'] && !(typeof data['projectBeneficiaries'] === 'string' || data['projectBeneficiaries'] instanceof String)) {
            throw new Error("Expected the field `projectBeneficiaries` to be a primitive type in the JSON string but got " + data['projectBeneficiaries']);
        }
        // ensure the json data is a string
        if (data['projectExpensesDetails'] && !(typeof data['projectExpensesDetails'] === 'string' || data['projectExpensesDetails'] instanceof String)) {
            throw new Error("Expected the field `projectExpensesDetails` to be a primitive type in the JSON string but got " + data['projectExpensesDetails']);
        }
        // ensure the json data is a string
        if (data['projectOwners'] && !(typeof data['projectOwners'] === 'string' || data['projectOwners'] instanceof String)) {
            throw new Error("Expected the field `projectOwners` to be a primitive type in the JSON string but got " + data['projectOwners']);
        }
        // ensure the json data is a string
        if (data['projectTargetCountry'] && !(typeof data['projectTargetCountry'] === 'string' || data['projectTargetCountry'] instanceof String)) {
            throw new Error("Expected the field `projectTargetCountry` to be a primitive type in the JSON string but got " + data['projectTargetCountry']);
        }

        return true;
    }


}

HelloAssoApiV5ModelsFormsFormQuickCreateRequest.RequiredProperties = ["title"];

/**
 * @member {Array.<module:model/HelloAssoApiV5ModelsFormsTierLightModel>} tierList
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['tierList'] = undefined;

/**
 * The banner of the form
 * @member {String} banner
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['banner'] = undefined;

/**
 * The description of form
 * @member {String} description
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['description'] = undefined;

/**
 * The datetime of the activity end
 * @member {Date} endDate
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['endDate'] = undefined;

/**
 * The logo of the form
 * @member {String} logo
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['logo'] = undefined;

/**
 * Private Title : displayed only in the organization back office
 * @member {String} privateTitle
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['privateTitle'] = undefined;

/**
 * The datetime of the activity start
 * @member {Date} startDate
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['startDate'] = undefined;

/**
 * The title of the form. It will be used to generate the url which that can't be changed.
 * @member {String} title
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['title'] = undefined;

/**
 * Activity type identifier, matching one of the provided type values <a href=\"index#!/Values/Values_Get\"> provided here</a>
 * @member {Number} activityTypeId
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['activityTypeId'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsCommonPlaceModel} place
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['place'] = undefined;

/**
 * The datetime (Inclusive) at which the sales end.  If null the orders will be available until the end of the campaign.
 * @member {Date} saleEndDate
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['saleEndDate'] = undefined;

/**
 * The datetime (Inclusive) at which the users can start placing orders.  If null the orders will be available as soon as the campaign is published.
 * @member {Date} saleStartDate
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['saleStartDate'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsEnumsMembershipValidityType} validityType
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['validityType'] = undefined;

/**
 * Whether the user will be allowed to make a single open donation with an order. The amount of the donation is open, but 3 presets can be set in OpenDonationPresetAmount
 * @member {Boolean} acceptOpenDonation
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['acceptOpenDonation'] = undefined;

/**
 * Whether the user will be allowed to make a monthly open donation for donation forms
 * @member {Boolean} acceptOpenMonthlyDonation
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['acceptOpenMonthlyDonation'] = undefined;

/**
 * allowComment
 * @member {Boolean} allowComment
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['allowComment'] = undefined;

/**
 * amountVisible
 * @member {Boolean} amountVisible
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['amountVisible'] = undefined;

/**
 * The color of the form
 * @member {String} color
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['color'] = undefined;

/**
 * The text displayed in the widget button
 * @member {String} widgetButtonText
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['widgetButtonText'] = undefined;

/**
 * @member {module:model/HelloAssoApiV5ModelsCommonContactModel} contact
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['contact'] = undefined;

/**
 * Display contributor name for fundraiser
 * @member {Boolean} displayContributorName
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['displayContributorName'] = undefined;

/**
 * Indicates that the members count must be displayed on the form.
 * @member {Boolean} displayParticipantsCount
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['displayParticipantsCount'] = undefined;

/**
 * Indicates that the remaining entries must be displayed on the form.
 * @member {Boolean} displayRemainingEntries
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['displayRemainingEntries'] = undefined;

/**
 * Indicates the financial goal (amount of money raised) for the whole form. Null means no goal.
 * @member {Number} financialGoal
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['financialGoal'] = undefined;

/**
 * Entrust the issuance of membership cards to HelloAsso (automatically sent by email to participants)
 * @member {Boolean} generateMembershipCards
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['generateMembershipCards'] = undefined;

/**
 * Entrust the issuance of tickets to HelloAsso (automatically sent by email to participants)
 * @member {Boolean} generateTickets
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['generateTickets'] = undefined;

/**
 * Allows you to add the long description above the store catalog.
 * @member {Boolean} invertDescriptions
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['invertDescriptions'] = undefined;

/**
 * Label conditions and terms file
 * @member {String} labelConditionsAndTermsFile
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['labelConditionsAndTermsFile'] = undefined;

/**
 * The long description of the form (rich Html)
 * @member {String} longDescription
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['longDescription'] = undefined;

/**
 * The preset amounts to be shown to the user. Maximum 3 amounts.
 * @member {Array.<Number>} openDonationPresetAmounts
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['openDonationPresetAmounts'] = undefined;

/**
 * Personalized message for participants
 * @member {String} personalizedMessage
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['personalizedMessage'] = undefined;

/**
 * The project beneficiaries of the form (rich Html)
 * @member {String} projectBeneficiaries
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['projectBeneficiaries'] = undefined;

/**
 * Details of the project expenses (rich Html)
 * @member {String} projectExpensesDetails
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['projectExpensesDetails'] = undefined;

/**
 * Description of the project owners (rich Html)
 * @member {String} projectOwners
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['projectOwners'] = undefined;

/**
 * 3 letter country code
 * @member {String} projectTargetCountry
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['projectTargetCountry'] = undefined;

/**
 * Whether users are allowed to contribute to this form through an organism (only for donation and crowdfunding).
 * @member {Boolean} allowOrganismPayer
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['allowOrganismPayer'] = undefined;

/**
 * Whether user are allowed to personally contribute to this form (only for donation and crowdfunding).
 * @member {Boolean} allowIndividualPayer
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['allowIndividualPayer'] = undefined;

/**
 * Indicates the maximum available entries for the whole form. Null means unlimited entries.
 * @member {Number} maxEntries
 */
HelloAssoApiV5ModelsFormsFormQuickCreateRequest.prototype['maxEntries'] = undefined;






export default HelloAssoApiV5ModelsFormsFormQuickCreateRequest;
