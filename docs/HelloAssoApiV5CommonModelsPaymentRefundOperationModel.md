# HelloAssoApi.HelloAssoApiV5CommonModelsPaymentRefundOperationModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The refund operation id | [optional] 
**amount** | **Number** | The amount to refund | [optional] 
**cancelOrder** | **Boolean** | Whether the future payments and linked items of this order must be canceled (possible only if the payment is fully refunded) | [optional] 
**creationDate** | **Date** | The refund operation creation date | [optional] 
**state** | [**HelloAssoApiV5CommonModelsEnumsOperationState**](HelloAssoApiV5CommonModelsEnumsOperationState.md) |  | [optional] 
**sendRefundMail** | **Boolean** | Whether a refund mail must be send or not. | [optional] 
**paymentId** | **Number** | The payment id | [optional] 


