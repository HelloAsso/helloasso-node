# HelloAssoApi.ListeDeValeursApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**valuesCompanyLegalStatusGet**](ListeDeValeursApi.md#valuesCompanyLegalStatusGet) | **GET** /values/company-legal-status | Obtenir la liste des statuts juridiques
[**valuesOrganizationCategoriesGet**](ListeDeValeursApi.md#valuesOrganizationCategoriesGet) | **GET** /values/organization/categories | Obtenir la liste des catégories du JO
[**valuesTagsGet**](ListeDeValeursApi.md#valuesTagsGet) | **GET** /values/tags | Obtenir la liste des tags publiques



## valuesCompanyLegalStatusGet

> [HelloAssoApiV5CommonModelsAccountsCompanyLegalStatusModel] valuesCompanyLegalStatusGet()

Obtenir la liste des statuts juridiques

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessPublicData&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.ListeDeValeursApi();
apiInstance.valuesCompanyLegalStatusGet((error, data, response) => {
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

[**[HelloAssoApiV5CommonModelsAccountsCompanyLegalStatusModel]**](HelloAssoApiV5CommonModelsAccountsCompanyLegalStatusModel.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## valuesOrganizationCategoriesGet

> [HelloAssoApiV5CommonModelsAccountsOrganismCategoryModel] valuesOrganizationCategoriesGet()

Obtenir la liste des catégories du JO

Utilisez ceci afin de construire votre liste de catégories d&#39;organisation&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessPublicData&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.ListeDeValeursApi();
apiInstance.valuesOrganizationCategoriesGet((error, data, response) => {
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

[**[HelloAssoApiV5CommonModelsAccountsOrganismCategoryModel]**](HelloAssoApiV5CommonModelsAccountsOrganismCategoryModel.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## valuesTagsGet

> [HelloAssoApiV5CommonModelsTagsPublicTagModel] valuesTagsGet()

Obtenir la liste des tags publiques

Utilisez ceci afin de récupérer la liste des étiquettes utilisées&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessPublicData&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.ListeDeValeursApi();
apiInstance.valuesTagsGet((error, data, response) => {
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

[**[HelloAssoApiV5CommonModelsTagsPublicTagModel]**](HelloAssoApiV5CommonModelsTagsPublicTagModel.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

