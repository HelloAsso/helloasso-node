# HelloAssoApi.ValuesDefinitionsApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**valuesFormFormTypeTypesGet**](ValuesDefinitionsApi.md#valuesFormFormTypeTypesGet) | **GET** /values/form/{formType}/types | Get all activity types for a form type



## valuesFormFormTypeTypesGet

> [HelloAssoApiV5CommonModelsFormsFormActivityModel] valuesFormFormTypeTypesGet(formType)

Get all activity types for a form type

Use this in order to build your dropdown of form subtypes&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Your clientId must be allowed all of those privileges : &lt;/b&gt; &lt;br/&gt; FormAdministration&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';

let apiInstance = new HelloAssoApi.ValuesDefinitionsApi();
let formType = new HelloAssoApi.HelloAssoApiV5CommonModelsEnumsFormType(); // HelloAssoApiV5CommonModelsEnumsFormType | 
apiInstance.valuesFormFormTypeTypesGet(formType, (error, data, response) => {
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
 **formType** | [**HelloAssoApiV5CommonModelsEnumsFormType**](.md)|  | 

### Return type

[**[HelloAssoApiV5CommonModelsFormsFormActivityModel]**](HelloAssoApiV5CommonModelsFormsFormActivityModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

