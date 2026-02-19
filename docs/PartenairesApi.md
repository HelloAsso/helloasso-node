# HelloAssoApi.PartenairesApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**partnersMeApiClientsPut**](PartenairesApi.md#partnersMeApiClientsPut) | **PUT** /partners/me/api-clients | Mise à jour du domaine
[**partnersMeApiNotificationsDelete**](PartenairesApi.md#partnersMeApiNotificationsDelete) | **DELETE** /partners/me/api-notifications | Suppression de l&#39;URL de notification principale
[**partnersMeApiNotificationsOrganizationsOrganizationSlugDelete**](PartenairesApi.md#partnersMeApiNotificationsOrganizationsOrganizationSlugDelete) | **DELETE** /partners/me/api-notifications/organizations/{organizationSlug} | Suppression d&#39;une URL de notification liée à une organisation
[**partnersMeApiNotificationsOrganizationsOrganizationSlugPut**](PartenairesApi.md#partnersMeApiNotificationsOrganizationsOrganizationSlugPut) | **PUT** /partners/me/api-notifications/organizations/{organizationSlug} | Mise à jour d&#39;une URL de notification liée à une organisation
[**partnersMeApiNotificationsPut**](PartenairesApi.md#partnersMeApiNotificationsPut) | **PUT** /partners/me/api-notifications | Mise à jour de l&#39;URL de notification principale
[**partnersMeGet**](PartenairesApi.md#partnersMeGet) | **GET** /partners/me | Récupération des informations
[**partnersMeOrganizationsGet**](PartenairesApi.md#partnersMeOrganizationsGet) | **GET** /partners/me/organizations | Obtenir toutes les organisations



## partnersMeApiClientsPut

> partnersMeApiClientsPut(opts)

Mise à jour du domaine

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessPublicData&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.PartenairesApi();
let opts = {
  'helloAssoApiV5CommonModelsAccountsClientsPublicPutApiClientRequest': new HelloAssoApi.HelloAssoApiV5CommonModelsAccountsClientsPublicPutApiClientRequest() // HelloAssoApiV5CommonModelsAccountsClientsPublicPutApiClientRequest | 
};
apiInstance.partnersMeApiClientsPut(opts, (error, data, response) => {
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
 **helloAssoApiV5CommonModelsAccountsClientsPublicPutApiClientRequest** | [**HelloAssoApiV5CommonModelsAccountsClientsPublicPutApiClientRequest**](HelloAssoApiV5CommonModelsAccountsClientsPublicPutApiClientRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: Not defined


## partnersMeApiNotificationsDelete

> partnersMeApiNotificationsDelete(opts)

Suppression de l&#39;URL de notification principale

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessPublicData&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.PartenairesApi();
let opts = {
  'notificationType': new HelloAssoApi.HelloAssoApiV5CommonModelsApiNotificationsApiNotificationType() // HelloAssoApiV5CommonModelsApiNotificationsApiNotificationType | Do not specify a notification type to remove the main notification Url
};
apiInstance.partnersMeApiNotificationsDelete(opts, (error, data, response) => {
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
 **notificationType** | [**HelloAssoApiV5CommonModelsApiNotificationsApiNotificationType**](.md)| Do not specify a notification type to remove the main notification Url | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## partnersMeApiNotificationsOrganizationsOrganizationSlugDelete

> partnersMeApiNotificationsOrganizationsOrganizationSlugDelete(organizationSlug, opts)

Suppression d&#39;une URL de notification liée à une organisation

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessPublicData&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.PartenairesApi();
let organizationSlug = "organizationSlug_example"; // String | 
let opts = {
  'notificationType': new HelloAssoApi.HelloAssoApiV5CommonModelsApiNotificationsApiNotificationType() // HelloAssoApiV5CommonModelsApiNotificationsApiNotificationType | Do not specify a notification type to remove the main notification Url
};
apiInstance.partnersMeApiNotificationsOrganizationsOrganizationSlugDelete(organizationSlug, opts, (error, data, response) => {
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
 **notificationType** | [**HelloAssoApiV5CommonModelsApiNotificationsApiNotificationType**](.md)| Do not specify a notification type to remove the main notification Url | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## partnersMeApiNotificationsOrganizationsOrganizationSlugPut

> HelloAssoApiV5CommonModelsApiNotificationsApiUrlNotificationModel partnersMeApiNotificationsOrganizationsOrganizationSlugPut(organizationSlug, opts)

Mise à jour d&#39;une URL de notification liée à une organisation

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessPublicData&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.PartenairesApi();
let organizationSlug = "organizationSlug_example"; // String | 
let opts = {
  'helloAssoApiV5CommonModelsApiNotificationsPostApiUrlNotificationBody': new HelloAssoApi.HelloAssoApiV5CommonModelsApiNotificationsPostApiUrlNotificationBody() // HelloAssoApiV5CommonModelsApiNotificationsPostApiUrlNotificationBody | The body of the request, do not specify a notification type to update the main notification Url
};
apiInstance.partnersMeApiNotificationsOrganizationsOrganizationSlugPut(organizationSlug, opts, (error, data, response) => {
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
 **helloAssoApiV5CommonModelsApiNotificationsPostApiUrlNotificationBody** | [**HelloAssoApiV5CommonModelsApiNotificationsPostApiUrlNotificationBody**](HelloAssoApiV5CommonModelsApiNotificationsPostApiUrlNotificationBody.md)| The body of the request, do not specify a notification type to update the main notification Url | [optional] 

### Return type

[**HelloAssoApiV5CommonModelsApiNotificationsApiUrlNotificationModel**](HelloAssoApiV5CommonModelsApiNotificationsApiUrlNotificationModel.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## partnersMeApiNotificationsPut

> HelloAssoApiV5CommonModelsApiNotificationsApiUrlNotificationModel partnersMeApiNotificationsPut(opts)

Mise à jour de l&#39;URL de notification principale

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessPublicData&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.PartenairesApi();
let opts = {
  'helloAssoApiV5CommonModelsApiNotificationsPostApiUrlNotificationBody': new HelloAssoApi.HelloAssoApiV5CommonModelsApiNotificationsPostApiUrlNotificationBody() // HelloAssoApiV5CommonModelsApiNotificationsPostApiUrlNotificationBody | The body of the request, do not specify a notification type to update the main notification Url
};
apiInstance.partnersMeApiNotificationsPut(opts, (error, data, response) => {
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
 **helloAssoApiV5CommonModelsApiNotificationsPostApiUrlNotificationBody** | [**HelloAssoApiV5CommonModelsApiNotificationsPostApiUrlNotificationBody**](HelloAssoApiV5CommonModelsApiNotificationsPostApiUrlNotificationBody.md)| The body of the request, do not specify a notification type to update the main notification Url | [optional] 

### Return type

[**HelloAssoApiV5CommonModelsApiNotificationsApiUrlNotificationModel**](HelloAssoApiV5CommonModelsApiNotificationsApiUrlNotificationModel.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## partnersMeGet

> HelloAssoApiV5CommonModelsPartnersPartnerPublicModel partnersMeGet()

Récupération des informations

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessPublicData&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.PartenairesApi();
apiInstance.partnersMeGet((error, data, response) => {
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

[**HelloAssoApiV5CommonModelsPartnersPartnerPublicModel**](HelloAssoApiV5CommonModelsPartnersPartnerPublicModel.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## partnersMeOrganizationsGet

> HelloAssoApiV5CommonModelsCommonResultsWithPaginationModelPartnerOrganizationModel partnersMeOrganizationsGet(opts)

Obtenir toutes les organisations

Liste toutes les organisations liées au partenaire. Les résultats sont classés par date de mise à jour de la visibilité API en ordre croissant. Le nombre total de résultats (ou de pages) n&#39;est pas récupérable, donc les informations de pagination retournées indiqueront toujours -1.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessPublicData&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.PartenairesApi();
let opts = {
  'pageSize': 20, // Number | The number of items per page
  'continuationToken': "continuationToken_example" // String | Continuation Token from which we wish to retrieve results
};
apiInstance.partnersMeOrganizationsGet(opts, (error, data, response) => {
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
 **pageSize** | **Number**| The number of items per page | [optional] [default to 20]
 **continuationToken** | **String**| Continuation Token from which we wish to retrieve results | [optional] 

### Return type

[**HelloAssoApiV5CommonModelsCommonResultsWithPaginationModelPartnerOrganizationModel**](HelloAssoApiV5CommonModelsCommonResultsWithPaginationModelPartnerOrganizationModel.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

