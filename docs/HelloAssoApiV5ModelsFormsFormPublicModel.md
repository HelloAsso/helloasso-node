# HelloAssoApi.HelloAssoApiV5ModelsFormsFormPublicModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationLogo** | **String** | Organization Logo | [optional] 
**organizationName** | **String** | Organization Name | [optional] 
**tiers** | [**[HelloAssoApiV5ModelsFormsTierPublicModel]**](HelloAssoApiV5ModelsFormsTierPublicModel.md) | Tiers | [optional] 
**activityType** | **String** | Activity type of the event eg. \&quot;Atelier(s) / Stage(s)\&quot; matching one of the provided type values &lt;a href&#x3D;\&quot;index#!/Values/Values_Get\&quot;&gt; provided here&lt;/a&gt; or a custom value is allowed. | [optional] 
**activityTypeId** | **Number** | Activity type identifier | [optional] 
**place** | [**HelloAssoApiV5ModelsCommonPlaceModel**](HelloAssoApiV5ModelsCommonPlaceModel.md) |  | [optional] 
**saleEndDate** | **Date** | The datetime (Inclusive) at which the sales end.  If null the orders will be available until the end of the campaign. | [optional] 
**saleStartDate** | **Date** | The datetime (Inclusive) at which the users can start placing orders.  If null the orders will be available as soon as the campaign is published. | [optional] 
**validityType** | [**HelloAssoApiV5ModelsEnumsMembershipValidityType**](HelloAssoApiV5ModelsEnumsMembershipValidityType.md) |  | [optional] 
**personalizedMessage** | **String** | A message customized by the organization administrator. | [optional] 
**banner** | [**HelloAssoApiV5ModelsCommonDocumentModel**](HelloAssoApiV5ModelsCommonDocumentModel.md) |  | [optional] 
**currency** | **String** | Currency | [optional] 
**description** | **String** | Short description (one line) | [optional] 
**startDate** | **Date** | The datetime of the activity start | [optional] 
**endDate** | **Date** | The datetime of the activity end | [optional] 
**logo** | [**HelloAssoApiV5ModelsCommonDocumentModel**](HelloAssoApiV5ModelsCommonDocumentModel.md) |  | [optional] 
**meta** | [**HelloAssoApiV5ModelsCommonMetaModel**](HelloAssoApiV5ModelsCommonMetaModel.md) |  | [optional] 
**state** | [**HelloAssoApiV5ModelsEnumsFormState**](HelloAssoApiV5ModelsEnumsFormState.md) |  | [optional] 
**title** | **String** | Title | [optional] 
**privateTitle** | **String** | Private Title | [optional] 
**widgetButtonUrl** | **String** | Url of the widget button | [optional] 
**widgetFullUrl** | **String** | Url of the form widget | [optional] 
**widgetVignetteHorizontalUrl** | **String** | Url of the horizontal vignette widget | [optional] 
**widgetVignetteVerticalUrl** | **String** | Url of the vertical vignette widget | [optional] 
**widgetCounterUrl** | **String** | Url of the counter widget | [optional] 
**formSlug** | **String** | The form slug | [optional] 
**formType** | [**HelloAssoApiV5ModelsEnumsFormType**](HelloAssoApiV5ModelsEnumsFormType.md) |  | [optional] 
**url** | **String** | The form url | [optional] 
**organizationSlug** | **String** | The organization slug | [optional] 


