# HelloAssoApi.HelloAssoApiV5CommonModelsFormsTierStatsModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | id | [optional] 
**label** | **String** | label | [optional] 
**description** | **String** | description | [optional] 
**entriesTaken** | **Number** | The number of times this tier as been taken | [optional] 
**maxEntries** | **Number** | The max number of times this tier can be sold | [optional] 
**price** | **Number** | the Price in cents  if price equals 0 then it is free or there is a MinAmount | [optional] 
**minAmount** | **Number** | If set, it means the payment is free to choose, according to the specified minAmount in cents | [optional] 
**priceCategory** | [**HelloAssoApiV5CommonModelsEnumsPriceCategory**](HelloAssoApiV5CommonModelsEnumsPriceCategory.md) |  | [optional] 
**tierType** | [**HelloAssoApiV5CommonModelsEnumsTierType**](HelloAssoApiV5CommonModelsEnumsTierType.md) |  | [optional] 
**isEnabled** | **Boolean** | is true if tier state is ENABLED  is false if tier state is DISABLED | [optional] 


