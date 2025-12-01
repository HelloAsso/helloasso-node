# HelloAssoApi.OrganisationApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationsOrganizationSlugGet**](OrganisationApi.md#organizationsOrganizationSlugGet) | **GET** /organizations/{organizationSlug} | Obtenir le détail d&#39;une organisation



## organizationsOrganizationSlugGet

> organizationsOrganizationSlugGet(organizationSlug)

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
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationSlug** | **String**| The organization Slug | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

