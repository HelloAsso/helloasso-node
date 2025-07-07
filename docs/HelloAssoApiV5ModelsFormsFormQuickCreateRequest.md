# HelloAssoApi.HelloAssoApiV5ModelsFormsFormQuickCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tierList** | [**[HelloAssoApiV5ModelsFormsTierLightModel]**](HelloAssoApiV5ModelsFormsTierLightModel.md) |  | [optional] 
**banner** | **String** | The banner of the form | [optional] 
**description** | **String** | The description of form | [optional] 
**endDate** | **Date** | The datetime of the activity end | [optional] 
**logo** | **String** | The logo of the form | [optional] 
**privateTitle** | **String** | Private Title : displayed only in the organization back office | [optional] 
**startDate** | **Date** | The datetime of the activity start | [optional] 
**title** | **String** | The title of the form. It will be used to generate the url which that can&#39;t be changed. | 
**activityTypeId** | **Number** | Activity type identifier, matching one of the provided type values &lt;a href&#x3D;\&quot;index#!/Values/Values_Get\&quot;&gt; provided here&lt;/a&gt; | [optional] 
**place** | [**HelloAssoApiV5ModelsCommonPlaceModel**](HelloAssoApiV5ModelsCommonPlaceModel.md) |  | [optional] 
**saleEndDate** | **Date** | The datetime (Inclusive) at which the sales end.  If null the orders will be available until the end of the campaign. | [optional] 
**saleStartDate** | **Date** | The datetime (Inclusive) at which the users can start placing orders.  If null the orders will be available as soon as the campaign is published. | [optional] 
**validityType** | [**HelloAssoApiV5ModelsEnumsMembershipValidityType**](HelloAssoApiV5ModelsEnumsMembershipValidityType.md) |  | [optional] 
**acceptOpenDonation** | **Boolean** | Whether the user will be allowed to make a single open donation with an order. The amount of the donation is open, but 3 presets can be set in OpenDonationPresetAmount | [optional] 
**acceptOpenMonthlyDonation** | **Boolean** | Whether the user will be allowed to make a monthly open donation for donation forms | [optional] 
**allowComment** | **Boolean** | allowComment | [optional] 
**amountVisible** | **Boolean** | amountVisible | [optional] 
**color** | **String** | The color of the form | [optional] 
**widgetButtonText** | **String** | The text displayed in the widget button | [optional] 
**contact** | [**HelloAssoApiV5ModelsCommonContactModel**](HelloAssoApiV5ModelsCommonContactModel.md) |  | [optional] 
**displayContributorName** | **Boolean** | Display contributor name for fundraiser | [optional] 
**displayParticipantsCount** | **Boolean** | Indicates that the members count must be displayed on the form. | [optional] 
**displayRemainingEntries** | **Boolean** | Indicates that the remaining entries must be displayed on the form. | [optional] 
**financialGoal** | **Number** | Indicates the financial goal (amount of money raised) for the whole form. Null means no goal. | [optional] 
**generateMembershipCards** | **Boolean** | Entrust the issuance of membership cards to HelloAsso (automatically sent by email to participants) | [optional] 
**generateTickets** | **Boolean** | Entrust the issuance of tickets to HelloAsso (automatically sent by email to participants) | [optional] 
**invertDescriptions** | **Boolean** | Allows you to add the long description above the store catalog. | [optional] 
**labelConditionsAndTermsFile** | **String** | Label conditions and terms file | [optional] 
**longDescription** | **String** | The long description of the form (rich Html) | [optional] 
**openDonationPresetAmounts** | **[Number]** | The preset amounts to be shown to the user. Maximum 3 amounts. | [optional] 
**personalizedMessage** | **String** | Personalized message for participants | [optional] 
**projectBeneficiaries** | **String** | The project beneficiaries of the form (rich Html) | [optional] 
**projectExpensesDetails** | **String** | Details of the project expenses (rich Html) | [optional] 
**projectOwners** | **String** | Description of the project owners (rich Html) | [optional] 
**projectTargetCountry** | **String** | 3 letter country code | [optional] 
**allowOrganismPayer** | **Boolean** | Whether users are allowed to contribute to this form through an organism (only for donation and crowdfunding). | [optional] 
**allowIndividualPayer** | **Boolean** | Whether user are allowed to personally contribute to this form (only for donation and crowdfunding). | [optional] 
**displayVersion** | **Number** | The form display version (only for donation). | [optional] 
**maxEntries** | **Number** | Indicates the maximum available entries for the whole form. Null means unlimited entries. | [optional] 


