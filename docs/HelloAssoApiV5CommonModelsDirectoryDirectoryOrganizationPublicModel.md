# HelloAssoApi.HelloAssoApiV5CommonModelsDirectoryDirectoryOrganizationPublicModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **[String]** | The public tags of the organization | [optional] 
**linkedPartners** | **[String]** | Partners linked to this organization | [optional] 
**isAuthenticated** | **Boolean** | The organization is authenticated. Property returned only when asked by an organization admin. | [optional] 
**isCashInCompliant** | **Boolean** | If transaction can be init on the organization or not. Property returned only when asked by an organization admin. | [optional] 
**banner** | **String** | The organization banner | [optional] 
**fiscalReceiptEligibility** | **Boolean** | The organism can issue fiscal receipts (type ok and has not deactivated it)  Must configure it and be authenticated to become enabled | [optional] 
**fiscalReceiptIssuanceEnabled** | **Boolean** | The organism is eligible, has set up his options, and is authenticated. | [optional] 
**type** | [**HelloAssoApiV5CommonModelsEnumsOrganizationType**](HelloAssoApiV5CommonModelsEnumsOrganizationType.md) |  | [optional] 
**category** | **String** | Organization category label | [optional] 
**address** | **String** | Organization Address (for authorized applications or if authorized by the organization) | [optional] 
**geolocation** | [**HelloAssoModelsSharedGeoLocation**](HelloAssoModelsSharedGeoLocation.md) |  | [optional] 
**rnaNumber** | **String** | Unique identifier assigned when creating the association | [optional] 
**logo** | **String** | Logo of organization | [optional] 
**name** | **String** | Name of organization | [optional] 
**role** | [**HelloAssoModelsEnumsGlobalRole**](HelloAssoModelsEnumsGlobalRole.md) |  | [optional] 
**city** | **String** | Organization city | [optional] 
**zipCode** | **String** | Organization zip code | [optional] 
**description** | **String** | Organization description | [optional] 
**updateDate** | **Date** | Last update date of the organization | [optional] 
**categoryJoId** | **Number** |  | [optional] 
**url** | **String** | The organization url | [optional] 
**organizationSlug** | **String** | The organization slug | [optional] 


