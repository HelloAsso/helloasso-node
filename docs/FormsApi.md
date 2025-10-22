# HelloAssoApi.FormsApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationsOrganizationSlugFormsFormTypeFormSlugStatePut**](FormsApi.md#organizationsOrganizationSlugFormsFormTypeFormSlugStatePut) | **PUT** /organizations/{organizationSlug}/forms/{formType}/{formSlug}/state | Update a form state



## organizationsOrganizationSlugFormsFormTypeFormSlugStatePut

> organizationsOrganizationSlugFormsFormTypeFormSlugStatePut(organizationSlug, formSlug, formType, opts)

Update a form state

Update form state.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Your token must have one of these roles : &lt;/b&gt;&lt;br/&gt;FormAdmin&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;If you are an &lt;b&gt;association&lt;/b&gt;, you can obtain these roles with your client.&lt;br/&gt;If you are a &lt;b&gt;partner&lt;/b&gt;, you can obtain these roles by the authorize flow.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Your clientId must be allowed all of those privileges : &lt;/b&gt; &lt;br/&gt; FormAdministration&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';

let apiInstance = new HelloAssoApi.FormsApi();
let organizationSlug = "organizationSlug_example"; // String | 
let formSlug = "formSlug_example"; // String | 
let formType = new HelloAssoApi.HelloAssoApiV5CommonModelsEnumsFormType(); // HelloAssoApiV5CommonModelsEnumsFormType | 
let opts = {
  'helloAssoApiV5CommonModelsFormsFormStateRequest': new HelloAssoApi.HelloAssoApiV5CommonModelsFormsFormStateRequest() // HelloAssoApiV5CommonModelsFormsFormStateRequest | 
};
apiInstance.organizationsOrganizationSlugFormsFormTypeFormSlugStatePut(organizationSlug, formSlug, formType, opts, (error, data, response) => {
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
 **formSlug** | **String**|  | 
 **formType** | [**HelloAssoApiV5CommonModelsEnumsFormType**](.md)|  | 
 **helloAssoApiV5CommonModelsFormsFormStateRequest** | [**HelloAssoApiV5CommonModelsFormsFormStateRequest**](HelloAssoApiV5CommonModelsFormsFormStateRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: Not defined

