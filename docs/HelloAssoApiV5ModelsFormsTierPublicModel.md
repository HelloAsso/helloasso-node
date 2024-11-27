# HelloAssoApi.HelloAssoApiV5ModelsFormsTierPublicModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | id | [optional] 
**label** | **String** | label | [optional] 
**description** | **String** | description | [optional] 
**tierType** | [**HelloAssoApiV5ModelsEnumsTierType**](HelloAssoApiV5ModelsEnumsTierType.md) |  | [optional] 
**price** | **Number** | the Price in cents  if price equals 0 then it is free or there is a MinAmount | [optional] 
**vatRate** | **Number** | Vat rate if applicable  Amount have to be 0.10 for 10% | [optional] 
**minAmount** | **Number** | If set, it means the payment is free to choose, according to the specified minAmount in cents | [optional] 
**paymentFrequency** | [**HelloAssoApiV5ModelsEnumsPaymentFrequencyType**](HelloAssoApiV5ModelsEnumsPaymentFrequencyType.md) |  | [optional] 
**maxPerUser** | **Number** | Max quantity buyable in this cart | [optional] 
**meta** | [**HelloAssoApiV5ModelsCommonMetaModel**](HelloAssoApiV5ModelsCommonMetaModel.md) |  | [optional] 
**saleStartDate** | **Date** | The datetime (Inclusive) at which the users can start buying this tier.  If null the tier will be available at the start of the event. | [optional] 
**saleEndDate** | **Date** | The datetime (Inclusive) at which the tier is no longer available.  If null the tier will be available until the end of the event. | [optional] 
**isEligibleTaxReceipt** | **Boolean** | Whether this is eligible to a deduction | [optional] 
**terms** | [**[HelloAssoApiV5ModelsFormsTermModel]**](HelloAssoApiV5ModelsFormsTermModel.md) | Terms of tier | [optional] 
**picture** | [**HelloAssoApiV5ModelsCommonDocumentModel**](HelloAssoApiV5ModelsCommonDocumentModel.md) |  | [optional] 
**isExcludedFromFormPaymentTerms** | **Boolean** | True means this tier must be paid in the initial payment, false means it can be paid in payment with installments  Null when the form payment terms are disabled or not compatible with the related form | [optional] 


