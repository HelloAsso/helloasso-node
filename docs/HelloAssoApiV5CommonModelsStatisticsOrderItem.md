# HelloAssoApi.HelloAssoApiV5CommonModelsStatisticsOrderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payments** | [**[HelloAssoApiV5CommonModelsStatisticsSharePayment]**](HelloAssoApiV5CommonModelsStatisticsSharePayment.md) | Payments linked to this item and each share between the item and the payment | [optional] 
**name** | **String** |  | [optional] 
**user** | [**HelloAssoApiV5CommonModelsStatisticsUser**](HelloAssoApiV5CommonModelsStatisticsUser.md) |  | [optional] 
**priceCategory** | [**HelloAssoApiV5CommonModelsEnumsPriceCategory**](HelloAssoApiV5CommonModelsEnumsPriceCategory.md) |  | [optional] 
**minAmount** | **Number** | Minimum amount that was specified on the tier (in cents) | [optional] 
**discount** | [**HelloAssoApiV5CommonModelsStatisticsItemDiscount**](HelloAssoApiV5CommonModelsStatisticsItemDiscount.md) |  | [optional] 
**customFields** | [**[HelloAssoApiV5CommonModelsStatisticsItemCustomField]**](HelloAssoApiV5CommonModelsStatisticsItemCustomField.md) | Custom fields related to this item | [optional] 
**options** | [**[HelloAssoApiV5CommonModelsStatisticsItemOption]**](HelloAssoApiV5CommonModelsStatisticsItemOption.md) | Extra options taken with this item | [optional] 
**ticketUrl** | **String** | The Ticket Url | [optional] 
**qrCode** | **String** | The item QrCode (for ticket scanning only) | [optional] 
**membershipCardUrl** | **String** | The Membership Card Url | [optional] 
**dayOfLevy** | **Number** | The day of levy for monthly donation only | [optional] 
**tierDescription** | **String** | Tier description | [optional] 
**tierId** | **Number** |  | [optional] 
**comment** | **String** |  | [optional] 
**id** | **Number** | ID of the Item | [optional] 
**amount** | **Number** | Total item Price in cents (after discount without extra options) | [optional] 
**type** | [**HelloAssoApiV5CommonModelsEnumsTierType**](HelloAssoApiV5CommonModelsEnumsTierType.md) |  | [optional] 
**initialAmount** | **Number** | The raw amount (without reduction) | [optional] 
**state** | [**HelloAssoApiV5CommonModelsEnumsItemState**](HelloAssoApiV5CommonModelsEnumsItemState.md) |  | [optional] 


