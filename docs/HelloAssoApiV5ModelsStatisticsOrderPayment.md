# HelloAssoApi.HelloAssoApiV5ModelsStatisticsOrderPayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[HelloAssoApiV5ModelsStatisticsShareItem]**](HelloAssoApiV5ModelsStatisticsShareItem.md) | Items linked to this payment and each share between the item and the payment | [optional] 
**cashOutDate** | **Date** | The date of the cash out | [optional] 
**cashOutState** | [**HelloAssoApiV5ModelsEnumsPaymentCashOutState**](HelloAssoApiV5ModelsEnumsPaymentCashOutState.md) |  | [optional] 
**paymentReceiptUrl** | **String** | The Payment Receipt Url | [optional] 
**fiscalReceiptUrl** | **String** | The Fiscal Receipt Url | [optional] 
**id** | **Number** | The ID of the payment | [optional] 
**amount** | **Number** | Total Amount of the payment (in cents) | [optional] 
**amountTip** | **Number** | Tip Amount of the payment (in cents) | [optional] 
**date** | **Date** | Date of the payment | [optional] 
**paymentMeans** | [**HelloAssoApiV5ModelsEnumsPaymentMeans**](HelloAssoApiV5ModelsEnumsPaymentMeans.md) |  | [optional] 
**installmentNumber** | **Number** | Indicates the payment number (useful in the case of an order comprising payments with installments) | [optional] 
**state** | [**HelloAssoApiV5ModelsEnumsPaymentState**](HelloAssoApiV5ModelsEnumsPaymentState.md) |  | [optional] 
**type** | [**HelloAssoApiV5ModelsEnumsPaymentType**](HelloAssoApiV5ModelsEnumsPaymentType.md) |  | [optional] 
**meta** | [**HelloAssoApiV5ModelsCommonMetaModel**](HelloAssoApiV5ModelsCommonMetaModel.md) |  | [optional] 
**paymentOffLineMean** | [**HelloAssoApiV5ModelsEnumsPaymentMeans**](HelloAssoApiV5ModelsEnumsPaymentMeans.md) |  | [optional] 
**refundOperations** | [**[HelloAssoApiV5ModelsStatisticsRefundOperationLightModel]**](HelloAssoApiV5ModelsStatisticsRefundOperationLightModel.md) | The refund operations information for the specific payment. | [optional] 


