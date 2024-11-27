# HelloAssoApi.HelloAssoApiV5ModelsStatisticsItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | [**HelloAssoApiV5ModelsStatisticsOrderLight**](HelloAssoApiV5ModelsStatisticsOrderLight.md) |  | [optional] 
**payer** | [**HelloAssoApiV5ModelsStatisticsPayer**](HelloAssoApiV5ModelsStatisticsPayer.md) |  | [optional] 
**payments** | [**[HelloAssoApiV5ModelsStatisticsItemPayment]**](HelloAssoApiV5ModelsStatisticsItemPayment.md) | Payments linked to this item | [optional] 
**name** | **String** |  | [optional] 
**user** | [**HelloAssoApiV5ModelsStatisticsUser**](HelloAssoApiV5ModelsStatisticsUser.md) |  | [optional] 
**priceCategory** | [**HelloAssoApiV5ModelsEnumsPriceCategory**](HelloAssoApiV5ModelsEnumsPriceCategory.md) |  | [optional] 
**minAmount** | **Number** | Minimum amount that was specified on the tier (in cents) | [optional] 
**discount** | [**HelloAssoApiV5ModelsStatisticsItemDiscount**](HelloAssoApiV5ModelsStatisticsItemDiscount.md) |  | [optional] 
**customFields** | [**[HelloAssoApiV5ModelsStatisticsItemCustomField]**](HelloAssoApiV5ModelsStatisticsItemCustomField.md) | Custom fields related to this item | [optional] 
**options** | [**[HelloAssoApiV5ModelsStatisticsItemOption]**](HelloAssoApiV5ModelsStatisticsItemOption.md) | Extra options taken with this item | [optional] 
**ticketUrl** | **String** | The Ticket Url | [optional] 
**qrCode** | **String** | The item QrCode (for ticket scanning only) | [optional] 
**membershipCardUrl** | **String** | The Membership Card Url | [optional] 
**dayOfLevy** | **Number** | The day of levy for monthly donation only | [optional] 
**tierDescription** | **String** | Tier description | [optional] 
**tierId** | **Number** |  | [optional] 
**comment** | **String** |  | [optional] 
**id** | **Number** | ID of the Item | [optional] 
**amount** | **Number** | Total item Price in cents (after discount without extra options) | [optional] 
**type** | [**HelloAssoApiV5ModelsEnumsTierType**](HelloAssoApiV5ModelsEnumsTierType.md) |  | [optional] 
**initialAmount** | **Number** | The raw amount (without reduction) | [optional] 
**state** | [**HelloAssoApiV5ModelsEnumsItemState**](HelloAssoApiV5ModelsEnumsItemState.md) |  | [optional] 


