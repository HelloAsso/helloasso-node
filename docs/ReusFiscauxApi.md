# HelloAssoApi.ReusFiscauxApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationsOrganizationSlugTaxReceiptConfigurationGet**](ReusFiscauxApi.md#organizationsOrganizationSlugTaxReceiptConfigurationGet) | **GET** /organizations/{organizationSlug}/tax-receipt/configuration | Obtenir la configuration des reçus fiscaux
[**organizationsOrganizationSlugTaxReceiptConfigurationPut**](ReusFiscauxApi.md#organizationsOrganizationSlugTaxReceiptConfigurationPut) | **PUT** /organizations/{organizationSlug}/tax-receipt/configuration | Mettre à jour la configuration des reçus fiscaux
[**organizationsOrganizationSlugTaxReceiptFiscalReceiptTransmitterPut**](ReusFiscauxApi.md#organizationsOrganizationSlugTaxReceiptFiscalReceiptTransmitterPut) | **PUT** /organizations/{organizationSlug}/tax-receipt/fiscal-receipt-transmitter | Mettre à jour l&#39;émetteur des reçus fiscaux
[**organizationsOrganizationSlugTaxReceiptPreviewPost**](ReusFiscauxApi.md#organizationsOrganizationSlugTaxReceiptPreviewPost) | **POST** /organizations/{organizationSlug}/tax-receipt/preview | Prévisualiser les reçus fiscaux



## organizationsOrganizationSlugTaxReceiptConfigurationGet

> HelloAssoCoreAccountsTaxReceiptsOrganizationFiscalReceiptOptionsConfiguration organizationsOrganizationSlugTaxReceiptConfigurationGet(organizationSlug)

Obtenir la configuration des reçus fiscaux

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;FormAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; RefundManagement&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.ReusFiscauxApi();
let organizationSlug = "organizationSlug_example"; // String | 
apiInstance.organizationsOrganizationSlugTaxReceiptConfigurationGet(organizationSlug, (error, data, response) => {
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

[**HelloAssoCoreAccountsTaxReceiptsOrganizationFiscalReceiptOptionsConfiguration**](HelloAssoCoreAccountsTaxReceiptsOrganizationFiscalReceiptOptionsConfiguration.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## organizationsOrganizationSlugTaxReceiptConfigurationPut

> organizationsOrganizationSlugTaxReceiptConfigurationPut(organizationSlug, file, opts)

Mettre à jour la configuration des reçus fiscaux

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;FormAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; RefundManagement&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.ReusFiscauxApi();
let organizationSlug = "organizationSlug_example"; // String | 
let file = "/path/to/file"; // File | Upload File
let opts = {
  'config': "config_example" // String | config
};
apiInstance.organizationsOrganizationSlugTaxReceiptConfigurationPut(organizationSlug, file, opts, (error, data, response) => {
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
 **file** | **File**| Upload File | 
 **config** | **String**| config | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## organizationsOrganizationSlugTaxReceiptFiscalReceiptTransmitterPut

> organizationsOrganizationSlugTaxReceiptFiscalReceiptTransmitterPut(organizationSlug, opts)

Mettre à jour l&#39;émetteur des reçus fiscaux

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;FormAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; RefundManagement&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.ReusFiscauxApi();
let organizationSlug = "organizationSlug_example"; // String | 
let opts = {
  'helloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationFiscalReceiptTransmitterBody': new HelloAssoApi.HelloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationFiscalReceiptTransmitterBody() // HelloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationFiscalReceiptTransmitterBody | 
};
apiInstance.organizationsOrganizationSlugTaxReceiptFiscalReceiptTransmitterPut(organizationSlug, opts, (error, data, response) => {
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
 **helloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationFiscalReceiptTransmitterBody** | [**HelloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationFiscalReceiptTransmitterBody**](HelloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationFiscalReceiptTransmitterBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: Not defined


## organizationsOrganizationSlugTaxReceiptPreviewPost

> organizationsOrganizationSlugTaxReceiptPreviewPost(organizationSlug, file, opts)

Prévisualiser les reçus fiscaux

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;FormAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; RefundManagement&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.ReusFiscauxApi();
let organizationSlug = "organizationSlug_example"; // String | 
let file = "/path/to/file"; // File | Upload File
let opts = {
  'config': "config_example" // String | config
};
apiInstance.organizationsOrganizationSlugTaxReceiptPreviewPost(organizationSlug, file, opts, (error, data, response) => {
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
 **file** | **File**| Upload File | 
 **config** | **String**| config | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

