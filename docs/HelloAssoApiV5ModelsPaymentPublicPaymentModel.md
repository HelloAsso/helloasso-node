# HelloAssoApi.HelloAssoApiV5ModelsPaymentPublicPaymentModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The payment id | [optional] 
**organizationId** | **Number** | The Organization id, which the payment was made to | [optional] 
**formId** | **Number** | The form id where the payment was made. Used with FormType | [optional] 
**formType** | [**HelloAssoApiV5ModelsEnumsFormType**](HelloAssoApiV5ModelsEnumsFormType.md) |  | [optional] 
**amount** | **Number** | Amount | [optional] 
**meansPayment** | [**HelloAssoApiV5ModelsEnumsPaymentMeans**](HelloAssoApiV5ModelsEnumsPaymentMeans.md) |  | [optional] 
**cashOutState** | [**HelloAssoApiV5ModelsEnumsPaymentCashOutState**](HelloAssoApiV5ModelsEnumsPaymentCashOutState.md) |  | [optional] 
**date** | **Date** | The payment Date. | [optional] 
**authorizationDate** | **Date** | If the payment is authorized, this is the date of authorization | [optional] 
**orderDate** | **Date** | Date at which the Order was placed.  Important for monthly payments or scheduled payments. | [optional] 
**orderId** | **Number** | The id of the order | [optional] 
**fiscalReceiptGenerated** | **Boolean** | Whether a Fiscal receipt document has been generated for this payment or not. | [optional] 
**payerFirstName** | **String** | The inputted payer first name, might differs from User firstname, from linked user Id | [optional] 
**payerLastName** | **String** | The inputted payer last name,  might differs from User lastname, from linked user Id | [optional] 
**status** | [**HelloAssoApiV5ModelsEnumsPaymentState**](HelloAssoApiV5ModelsEnumsPaymentState.md) |  | [optional] 
**userId** | **Number** | The user id who initiated the payment | [optional] 
**userFirstName** | **String** | The name of the user who initiated the payment. May differ from PayerFirstName | [optional] 
**userLastName** | **String** | The name of the user who initiated the payment. May differ from PayerLastName | [optional] 
**userEmail** | **String** | The email of the user account who initiated the payment. | [optional] 
**providerTitle** | **String** | name of the provider | [optional] 
**installmentNumber** | **Number** | Indicates the payment number (useful in the case of an order comprising payments with installments)  Starting with 1. | [optional] 
**meta** | [**HelloAssoApiV5ModelsCommonMetaModel**](HelloAssoApiV5ModelsCommonMetaModel.md) |  | [optional] 
**refundOperations** | [**[HelloAssoApiV5ModelsStatisticsRefundOperationLightModel]**](HelloAssoApiV5ModelsStatisticsRefundOperationLightModel.md) | The refund operations for the specific payment. | [optional] 


