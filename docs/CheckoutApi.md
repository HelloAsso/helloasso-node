# HelloAssoApi.CheckoutApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationsOrganizationSlugCheckoutIntentsCheckoutIntentIdGet**](CheckoutApi.md#organizationsOrganizationSlugCheckoutIntentsCheckoutIntentIdGet) | **GET** /organizations/{organizationSlug}/checkout-intents/{checkoutIntentId} | Récupérer une intention de paiement
[**organizationsOrganizationSlugCheckoutIntentsPost**](CheckoutApi.md#organizationsOrganizationSlugCheckoutIntentsPost) | **POST** /organizations/{organizationSlug}/checkout-intents | Initialisation d&#39;un Checkout



## organizationsOrganizationSlugCheckoutIntentsCheckoutIntentIdGet

> HelloAssoApiV5ModelsCartsCheckoutIntentResponse organizationsOrganizationSlugCheckoutIntentsCheckoutIntentIdGet(organizationSlug, checkoutIntentId, opts)

Récupérer une intention de paiement

Retourne aussi la commande associée. Uniquement dans le cas ou le paiement est autorisé.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit avoir ces autorisations : &lt;/b&gt; &lt;br/&gt; Checkout&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.CheckoutApi();
let organizationSlug = "organizationSlug_example"; // String | 
let checkoutIntentId = 56; // Number | 
let opts = {
  'withFailedRefundOperation': false // Boolean | 
};
apiInstance.organizationsOrganizationSlugCheckoutIntentsCheckoutIntentIdGet(organizationSlug, checkoutIntentId, opts, (error, data, response) => {
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
 **checkoutIntentId** | **Number**|  | 
 **withFailedRefundOperation** | **Boolean**|  | [optional] [default to false]

### Return type

[**HelloAssoApiV5ModelsCartsCheckoutIntentResponse**](HelloAssoApiV5ModelsCartsCheckoutIntentResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## organizationsOrganizationSlugCheckoutIntentsPost

> HelloAssoApiV5ModelsCartsInitCheckoutResponse organizationsOrganizationSlugCheckoutIntentsPost(organizationSlug, opts)

Initialisation d&#39;un Checkout

Pour tout savoir sur Checkout consultez d&#39;abord notre &lt;a href&#x3D;\&quot;https://dev.helloasso.com/docs/description\&quot;&gt;documentation&lt;/a&gt;&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit avoir ces autorisations : &lt;/b&gt; &lt;br/&gt; Checkout&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.CheckoutApi();
let organizationSlug = "organizationSlug_example"; // String | 
let opts = {
  'helloAssoApiV5ModelsCartsInitCheckoutBody': new HelloAssoApi.HelloAssoApiV5ModelsCartsInitCheckoutBody() // HelloAssoApiV5ModelsCartsInitCheckoutBody | 
};
apiInstance.organizationsOrganizationSlugCheckoutIntentsPost(organizationSlug, opts, (error, data, response) => {
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
 **helloAssoApiV5ModelsCartsInitCheckoutBody** | [**HelloAssoApiV5ModelsCartsInitCheckoutBody**](HelloAssoApiV5ModelsCartsInitCheckoutBody.md)|  | [optional] 

### Return type

[**HelloAssoApiV5ModelsCartsInitCheckoutResponse**](HelloAssoApiV5ModelsCartsInitCheckoutResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

