# HelloAssoApi.OrganisationApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationsLegalInformationsLegalStructuresGet**](OrganisationApi.md#organizationsLegalInformationsLegalStructuresGet) | **GET** /organizations/legal-informations/legal-structures | Obtenir la structure juridique d&#39;une organisation visible.
[**organizationsLegalInformationsOrganizationSlugConfigurationGet**](OrganisationApi.md#organizationsLegalInformationsOrganizationSlugConfigurationGet) | **GET** /organizations/legal-informations/{organizationSlug}/configuration | Obtenir la configuration des informations juridiques de l&#39;organisation.
[**organizationsLegalInformationsOrganizationSlugConfigurationPut**](OrganisationApi.md#organizationsLegalInformationsOrganizationSlugConfigurationPut) | **PUT** /organizations/legal-informations/{organizationSlug}/configuration | Mettre à jour la configuration des informations juridiques de l&#39;organisation.
[**organizationsLegalInformationsTaxInformationTextsGet**](OrganisationApi.md#organizationsLegalInformationsTaxInformationTextsGet) | **GET** /organizations/legal-informations/tax-information-texts | Obtenir les textes d&#39;information fiscale de l&#39;organisation.
[**organizationsOrganizationSlugGet**](OrganisationApi.md#organizationsOrganizationSlugGet) | **GET** /organizations/{organizationSlug} | Obtenir le détail d&#39;une organisation



## organizationsLegalInformationsLegalStructuresGet

> [HelloAssoApiV5ModelsOrganizationLegalInformationsOrganizationLegalStructuresModel] organizationsLegalInformationsLegalStructuresGet()

Obtenir la structure juridique d&#39;une organisation visible.

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; OrganizationAdministration&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.OrganisationApi();
apiInstance.organizationsLegalInformationsLegalStructuresGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[HelloAssoApiV5ModelsOrganizationLegalInformationsOrganizationLegalStructuresModel]**](HelloAssoApiV5ModelsOrganizationLegalInformationsOrganizationLegalStructuresModel.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## organizationsLegalInformationsOrganizationSlugConfigurationGet

> HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationLegalInformationConfiguration organizationsLegalInformationsOrganizationSlugConfigurationGet(organizationSlug)

Obtenir la configuration des informations juridiques de l&#39;organisation.

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; OrganizationAdministration&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.OrganisationApi();
let organizationSlug = "organizationSlug_example"; // String | 
apiInstance.organizationsLegalInformationsOrganizationSlugConfigurationGet(organizationSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationSlug** | **String**|  | 

### Return type

[**HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationLegalInformationConfiguration**](HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationLegalInformationConfiguration.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## organizationsLegalInformationsOrganizationSlugConfigurationPut

> organizationsLegalInformationsOrganizationSlugConfigurationPut(organizationSlug, opts)

Mettre à jour la configuration des informations juridiques de l&#39;organisation.

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; OrganizationAdministration&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.OrganisationApi();
let organizationSlug = "organizationSlug_example"; // String | 
let opts = {
  'helloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationLegalInformationConfigurationBody': new HelloAssoApi.HelloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationLegalInformationConfigurationBody() // HelloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationLegalInformationConfigurationBody | 
};
apiInstance.organizationsLegalInformationsOrganizationSlugConfigurationPut(organizationSlug, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationSlug** | **String**|  | 
 **helloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationLegalInformationConfigurationBody** | [**HelloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationLegalInformationConfigurationBody**](HelloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationLegalInformationConfigurationBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: Not defined


## organizationsLegalInformationsTaxInformationTextsGet

> [HelloAssoModelsAccountsOrganizationLegalInformationsTaxInformationText] organizationsLegalInformationsTaxInformationTextsGet(opts)

Obtenir les textes d&#39;information fiscale de l&#39;organisation.

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; OrganizationAdministration&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.OrganisationApi();
let opts = {
  'organizationSlug': "organizationSlug_example" // String | 
};
apiInstance.organizationsLegalInformationsTaxInformationTextsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationSlug** | **String**|  | [optional] 

### Return type

[**[HelloAssoModelsAccountsOrganizationLegalInformationsTaxInformationText]**](HelloAssoModelsAccountsOrganizationLegalInformationsTaxInformationText.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## organizationsOrganizationSlugGet

> HelloAssoApiV5ModelsOrganizationOrganizationModel organizationsOrganizationSlugGet(organizationSlug)

Obtenir le détail d&#39;une organisation

Obtenir les informations publiques de l&#39;organisation spécifiée.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessPublicData&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.OrganisationApi();
let organizationSlug = "organizationSlug_example"; // String | The organization Slug
apiInstance.organizationsOrganizationSlugGet(organizationSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationSlug** | **String**| The organization Slug | 

### Return type

[**HelloAssoApiV5ModelsOrganizationOrganizationModel**](HelloAssoApiV5ModelsOrganizationOrganizationModel.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

