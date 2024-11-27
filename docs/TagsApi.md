# HelloAssoApi.TagsApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagsTagNameGet**](TagsApi.md#tagsTagNameGet) | **GET** /tags/{tagName} | Obtenir le détail d&#39;un tag interne



## tagsTagNameGet

> HelloAssoApiV5ModelsTagsInternalTagModel tagsTagNameGet(tagName, opts)

Obtenir le détail d&#39;un tag interne

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; FormOpenDirectory&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.TagsApi();
let tagName = "tagName_example"; // String | 
let opts = {
  'withCount': false, // Boolean | If true : Count of times Tag is used
  'withAmount': false // Boolean | If true : Amount collected by all forms linked to this Tag
};
apiInstance.tagsTagNameGet(tagName, opts, (error, data, response) => {
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
 **tagName** | **String**|  | 
 **withCount** | **Boolean**| If true : Count of times Tag is used | [optional] [default to false]
 **withAmount** | **Boolean**| If true : Amount collected by all forms linked to this Tag | [optional] [default to false]

### Return type

[**HelloAssoApiV5ModelsTagsInternalTagModel**](HelloAssoApiV5ModelsTagsInternalTagModel.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

