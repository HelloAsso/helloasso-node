# HelloAssoApi.VersementsApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationsOrganizationSlugCashOutCashOutIdExportGet**](VersementsApi.md#organizationsOrganizationSlugCashOutCashOutIdExportGet) | **GET** /organizations/{organizationSlug}/cash-out/{cashOutId}/export | Détails d&#39;un versement



## organizationsOrganizationSlugCashOutCashOutIdExportGet

> [HelloAssoApiV5CommonModelsPaymentCashoutExportCashoutExportRowModel] organizationsOrganizationSlugCashOutCashOutIdExportGet(organizationSlug, cashOutId)

Détails d&#39;un versement

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessTransactions&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.VersementsApi();
let organizationSlug = "organizationSlug_example"; // String | The organization slug
let cashOutId = 56; // Number | The cash-out id to details
apiInstance.organizationsOrganizationSlugCashOutCashOutIdExportGet(organizationSlug, cashOutId, (error, data, response) => {
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
 **organizationSlug** | **String**| The organization slug | 
 **cashOutId** | **Number**| The cash-out id to details | 

### Return type

[**[HelloAssoApiV5CommonModelsPaymentCashoutExportCashoutExportRowModel]**](HelloAssoApiV5CommonModelsPaymentCashoutExportCashoutExportRowModel.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, text/csv

