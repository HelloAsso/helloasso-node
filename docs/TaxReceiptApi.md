# HelloAssoApi.TaxReceiptApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationsOrganizationSlugTaxReceiptConfigurationGet**](TaxReceiptApi.md#organizationsOrganizationSlugTaxReceiptConfigurationGet) | **GET** /organizations/{organizationSlug}/tax-receipt/configuration | 
[**organizationsOrganizationSlugTaxReceiptConfigurationPut**](TaxReceiptApi.md#organizationsOrganizationSlugTaxReceiptConfigurationPut) | **PUT** /organizations/{organizationSlug}/tax-receipt/configuration | 
[**organizationsOrganizationSlugTaxReceiptFiscalReceiptTransmitterPut**](TaxReceiptApi.md#organizationsOrganizationSlugTaxReceiptFiscalReceiptTransmitterPut) | **PUT** /organizations/{organizationSlug}/tax-receipt/fiscal-receipt-transmitter | 
[**organizationsOrganizationSlugTaxReceiptPreviewPost**](TaxReceiptApi.md#organizationsOrganizationSlugTaxReceiptPreviewPost) | **POST** /organizations/{organizationSlug}/tax-receipt/preview | 



## organizationsOrganizationSlugTaxReceiptConfigurationGet

> HelloAssoCoreAccountsTaxReceiptsOrganizationFiscalReceiptOptionsConfiguration organizationsOrganizationSlugTaxReceiptConfigurationGet(organizationSlug)



&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Your token must have one of these roles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;If you are an &lt;b&gt;association&lt;/b&gt;, you can obtain these roles with your client.&lt;br/&gt;If you are a &lt;b&gt;partner&lt;/b&gt;, you can obtain these roles by the authorize flow.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Your clientId must be allowed all of those privileges : &lt;/b&gt; &lt;br/&gt; OrganizationAdministration&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';

let apiInstance = new HelloAssoApi.TaxReceiptApi();
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## organizationsOrganizationSlugTaxReceiptConfigurationPut

> organizationsOrganizationSlugTaxReceiptConfigurationPut(organizationSlug, file, opts)



&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Your token must have one of these roles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;If you are an &lt;b&gt;association&lt;/b&gt;, you can obtain these roles with your client.&lt;br/&gt;If you are a &lt;b&gt;partner&lt;/b&gt;, you can obtain these roles by the authorize flow.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Your clientId must be allowed all of those privileges : &lt;/b&gt; &lt;br/&gt; OrganizationAdministration&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';

let apiInstance = new HelloAssoApi.TaxReceiptApi();
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

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## organizationsOrganizationSlugTaxReceiptFiscalReceiptTransmitterPut

> organizationsOrganizationSlugTaxReceiptFiscalReceiptTransmitterPut(organizationSlug, opts)



&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Your token must have one of these roles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;If you are an &lt;b&gt;association&lt;/b&gt;, you can obtain these roles with your client.&lt;br/&gt;If you are a &lt;b&gt;partner&lt;/b&gt;, you can obtain these roles by the authorize flow.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Your clientId must be allowed all of those privileges : &lt;/b&gt; &lt;br/&gt; OrganizationAdministration&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';

let apiInstance = new HelloAssoApi.TaxReceiptApi();
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

No authorization required

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: Not defined


## organizationsOrganizationSlugTaxReceiptPreviewPost

> organizationsOrganizationSlugTaxReceiptPreviewPost(organizationSlug, file, opts)



&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Your token must have one of these roles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;If you are an &lt;b&gt;association&lt;/b&gt;, you can obtain these roles with your client.&lt;br/&gt;If you are a &lt;b&gt;partner&lt;/b&gt;, you can obtain these roles by the authorize flow.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Your clientId must be allowed all of those privileges : &lt;/b&gt; &lt;br/&gt; OrganizationAdministration&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';

let apiInstance = new HelloAssoApi.TaxReceiptApi();
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

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

