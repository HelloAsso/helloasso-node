# HelloAssoApi.HelloAssoApiV5CommonModelsStatisticsPaymentDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | [**HelloAssoApiV5CommonModelsStatisticsOrderLight**](HelloAssoApiV5CommonModelsStatisticsOrderLight.md) |  | [optional] 
**payer** | [**HelloAssoApiV5CommonModelsStatisticsPayer**](HelloAssoApiV5CommonModelsStatisticsPayer.md) |  | [optional] 
**items** | [**[HelloAssoApiV5CommonModelsStatisticsPaymentItem]**](HelloAssoApiV5CommonModelsStatisticsPaymentItem.md) | Items linked to this payment | [optional] 
**cashOutDate** | **Date** | The date of the cash out | [optional] 
**idCashOut** | **Number** | The id of the cash out | [optional] 
**cashOutState** | [**HelloAssoApiV5CommonModelsEnumsPaymentCashOutState**](HelloAssoApiV5CommonModelsEnumsPaymentCashOutState.md) |  | [optional] 
**paymentReceiptUrl** | **String** | The Payment Receipt Url | [optional] 
**fiscalReceiptUrl** | **String** | The Fiscal Receipt Url | [optional] 
**id** | **Number** | The ID of the payment | [optional] 
**amount** | **Number** | Total Amount of the payment (in cents) | [optional] 
**amountTip** | **Number** | Tip Amount of the payment (in cents) | [optional] 
**date** | **Date** | Date of the payment | [optional] 
**paymentMeans** | [**HelloAssoApiV5CommonModelsEnumsPaymentMeans**](HelloAssoApiV5CommonModelsEnumsPaymentMeans.md) |  | [optional] 
**installmentNumber** | **Number** | Indicates the payment number (useful in the case of an order comprising payments with installments) | [optional] 
**state** | [**HelloAssoApiV5CommonModelsEnumsPaymentState**](HelloAssoApiV5CommonModelsEnumsPaymentState.md) |  | [optional] 
**type** | [**HelloAssoApiV5CommonModelsEnumsPaymentType**](HelloAssoApiV5CommonModelsEnumsPaymentType.md) |  | [optional] 
**meta** | [**HelloAssoApiV5CommonModelsCommonMetaModel**](HelloAssoApiV5CommonModelsCommonMetaModel.md) |  | [optional] 
**paymentOffLineMean** | [**HelloAssoApiV5CommonModelsEnumsPaymentMeans**](HelloAssoApiV5CommonModelsEnumsPaymentMeans.md) |  | [optional] 
**refundOperations** | [**[HelloAssoApiV5CommonModelsStatisticsRefundOperationLightModel]**](HelloAssoApiV5CommonModelsStatisticsRefundOperationLightModel.md) | The refund operations information for the specific payment. | [optional] 


