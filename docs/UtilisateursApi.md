# HelloAssoApi.UtilisateursApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersMeOrganizationsGet**](UtilisateursApi.md#usersMeOrganizationsGet) | **GET** /users/me/organizations | Obtenir mes organisations



## usersMeOrganizationsGet

> usersMeOrganizationsGet()

Obtenir mes organisations

Renvoie la liste des organisations où l&#39;utilisateur connecté a des droits&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessPublicData&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.UtilisateursApi();
apiInstance.usersMeOrganizationsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

