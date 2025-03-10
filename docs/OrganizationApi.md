# HelloAssoApi.OrganizationApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationsLegalInformationsOrganizationSlugConfigurationPut**](OrganizationApi.md#organizationsLegalInformationsOrganizationSlugConfigurationPut) | **PUT** /organizations/legal-informations/{organizationSlug}/configuration | Mettre à jour la configuration des informations juridiques de l&#39;organisation.



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

let apiInstance = new HelloAssoApi.OrganizationApi();
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

