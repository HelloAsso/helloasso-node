# HelloAssoApi.HelloAssoApiV5CommonModelsStatisticsOrderDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payer** | [**HelloAssoApiV5CommonModelsStatisticsPayer**](HelloAssoApiV5CommonModelsStatisticsPayer.md) |  | [optional] 
**items** | [**[HelloAssoApiV5CommonModelsStatisticsOrderItem]**](HelloAssoApiV5CommonModelsStatisticsOrderItem.md) | All items of the order | [optional] 
**payments** | [**[HelloAssoApiV5CommonModelsStatisticsOrderPayment]**](HelloAssoApiV5CommonModelsStatisticsOrderPayment.md) | All payments of the order | [optional] 
**amount** | [**HelloAssoApiV5CommonModelsStatisticsOrderAmountModel**](HelloAssoApiV5CommonModelsStatisticsOrderAmountModel.md) |  | [optional] 
**id** | **Number** | The ID of the Order | [optional] 
**date** | **Date** | Order creation date | [optional] 
**formSlug** | **String** | FormSlug (lowercase name of the form without special characters) | [optional] 
**formType** | [**HelloAssoApiV5CommonModelsEnumsFormType**](HelloAssoApiV5CommonModelsEnumsFormType.md) |  | [optional] 
**organizationName** | **String** | The organization name. | [optional] 
**organizationSlug** | **String** | OrganizationSlug (lowercase name of the organization without special characters) | [optional] 
**organizationType** | [**HelloAssoApiV5CommonModelsEnumsOrganizationType**](HelloAssoApiV5CommonModelsEnumsOrganizationType.md) |  | [optional] 
**organizationIsUnderColucheLaw** | **Boolean** | Whether or not the organization is subject to the coluche law | [optional] 
**checkoutIntentId** | **Number** | Checkout intent Id if available | [optional] 
**meta** | [**HelloAssoApiV5CommonModelsCommonMetaModel**](HelloAssoApiV5CommonModelsCommonMetaModel.md) |  | [optional] 


