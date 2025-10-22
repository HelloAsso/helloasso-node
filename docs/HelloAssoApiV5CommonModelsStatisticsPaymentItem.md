# HelloAssoApi.HelloAssoApiV5CommonModelsStatisticsPaymentItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shareAmount** | **Number** | Amount of the payment assigned to the item and its options (in cents) | [optional] 
**shareItemAmount** | **Number** | Amount of the item payed on this payment term (in cents) | [optional] 
**shareOptionsAmount** | **Number** | Amount of all extra options linked to this item and payed on this payment (in cents) | [optional] 
**id** | **Number** | ID of the Item | [optional] 
**amount** | **Number** | Total item Price in cents (after discount without extra options) | [optional] 
**type** | [**HelloAssoApiV5CommonModelsEnumsTierType**](HelloAssoApiV5CommonModelsEnumsTierType.md) |  | [optional] 
**initialAmount** | **Number** | The raw amount (without reduction) | [optional] 
**state** | [**HelloAssoApiV5CommonModelsEnumsItemState**](HelloAssoApiV5CommonModelsEnumsItemState.md) |  | [optional] 
**name** | **String** | Name of the item paid (relevant for checkout forms) | [optional] 


