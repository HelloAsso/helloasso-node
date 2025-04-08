# HelloAssoApi.CommandesApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**itemsItemIdGet**](CommandesApi.md#itemsItemIdGet) | **GET** /items/{itemId} | Obtenir le détail d&#39;un article contenu dans une commande
[**ordersOrderIdCancelPost**](CommandesApi.md#ordersOrderIdCancelPost) | **POST** /orders/{orderId}/cancel | Annuler les paiements futurs pour une commande (pas de remboursement).
[**ordersOrderIdGet**](CommandesApi.md#ordersOrderIdGet) | **GET** /orders/{orderId} | Obtenir des informations détaillées sur une commande
[**organizationsOrganizationSlugFormsFormTypeFormSlugItemsGet**](CommandesApi.md#organizationsOrganizationSlugFormsFormTypeFormSlugItemsGet) | **GET** /organizations/{organizationSlug}/forms/{formType}/{formSlug}/items | Obtenir une liste d&#39;articles vendus dans un formulaire
[**organizationsOrganizationSlugFormsFormTypeFormSlugOrdersGet**](CommandesApi.md#organizationsOrganizationSlugFormsFormTypeFormSlugOrdersGet) | **GET** /organizations/{organizationSlug}/forms/{formType}/{formSlug}/orders | Obtenir les commandes d&#39;un formulaire
[**organizationsOrganizationSlugItemsGet**](CommandesApi.md#organizationsOrganizationSlugItemsGet) | **GET** /organizations/{organizationSlug}/items | Obtenir une liste d&#39;articles vendus par une organisation
[**organizationsOrganizationSlugOrdersGet**](CommandesApi.md#organizationsOrganizationSlugOrdersGet) | **GET** /organizations/{organizationSlug}/orders | Obtenir les commandes d&#39;une organisation



## itemsItemIdGet

> HelloAssoApiV5ModelsStatisticsItemDetail itemsItemIdGet(itemId, opts)

Obtenir le détail d&#39;un article contenu dans une commande

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;FormAdmin&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessTransactions&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.CommandesApi();
let itemId = 56; // Number | The item ID
let opts = {
  'withDetails': false // Boolean | Set to true to return CustomFields and Options
};
apiInstance.itemsItemIdGet(itemId, opts, (error, data, response) => {
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
 **itemId** | **Number**| The item ID | 
 **withDetails** | **Boolean**| Set to true to return CustomFields and Options | [optional] [default to false]

### Return type

[**HelloAssoApiV5ModelsStatisticsItemDetail**](HelloAssoApiV5ModelsStatisticsItemDetail.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## ordersOrderIdCancelPost

> ordersOrderIdCancelPost(orderId)

Annuler les paiements futurs pour une commande (pas de remboursement).

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;FormAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; RefundManagement&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.CommandesApi();
let orderId = 56; // Number | The order identifier.
apiInstance.ordersOrderIdCancelPost(orderId, (error, data, response) => {
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
 **orderId** | **Number**| The order identifier. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## ordersOrderIdGet

> HelloAssoApiV5ModelsStatisticsOrderDetail ordersOrderIdGet(orderId)

Obtenir des informations détaillées sur une commande

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;FormAdmin&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessTransactions&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.CommandesApi();
let orderId = 56; // Number | 
apiInstance.ordersOrderIdGet(orderId, (error, data, response) => {
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
 **orderId** | **Number**|  | 

### Return type

[**HelloAssoApiV5ModelsStatisticsOrderDetail**](HelloAssoApiV5ModelsStatisticsOrderDetail.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## organizationsOrganizationSlugFormsFormTypeFormSlugItemsGet

> organizationsOrganizationSlugFormsFormTypeFormSlugItemsGet(organizationSlug, formSlug, formType, opts)

Obtenir une liste d&#39;articles vendus dans un formulaire

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;FormAdmin&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessTransactions&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.CommandesApi();
let organizationSlug = "organizationSlug_example"; // String | The organization slug
let formSlug = "formSlug_example"; // String | The form slug
let formType = new HelloAssoApi.HelloAssoApiV5ModelsEnumsFormType(); // HelloAssoApiV5ModelsEnumsFormType | The form type CrowdFunding, Membership, Event, Donation, PaymentForm, Checkout, Shop
let opts = {
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | First Date Filter
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | End Date Filter (exclusive)
  'userSearchKey': "userSearchKey_example", // String | Filter results on user or payer first name, last name or email
  'pageIndex': 1, // Number | The page of results to retrieve
  'pageSize': 20, // Number | The number of items per page
  'continuationToken': "continuationToken_example", // String | Continuation Token from which we wish to retrieve results
  'tierTypes': [new HelloAssoApi.HelloAssoApiV5ModelsEnumsTierType()], // [HelloAssoApiV5ModelsEnumsTierType] | The type of tiers
  'itemStates': [new HelloAssoApi.HelloAssoApiV5ModelsEnumsItemState()], // [HelloAssoApiV5ModelsEnumsItemState] | The item states  Available values: * `Processed` - The item is paid and is valid * `Registered` - The item has been registered manually by the organization and is valid * `Unknown` * `Canceled` - The item has been canceled, and is no longer valid
  'tierName': "tierName_example", // String | The name of a tier
  'withDetails': false, // Boolean | Set to true to return CustomFields and Options
  'sortOrder': new HelloAssoApi.HelloAssoApiV5ModelsEnumsSortOrder(), // HelloAssoApiV5ModelsEnumsSortOrder | Sort forms items by ascending or descending order. Default is descending
  'sortField': new HelloAssoApi.HelloAssoApiV5ModelsEnumsSortField(), // HelloAssoApiV5ModelsEnumsSortField | Sort forms items by a specific field (Date or UpdateDate). Default is date
  'withCount': false // Boolean | Whether the pagination should include totalCount and totalPages.
};
apiInstance.organizationsOrganizationSlugFormsFormTypeFormSlugItemsGet(organizationSlug, formSlug, formType, opts, (error, data, response) => {
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
 **organizationSlug** | **String**| The organization slug | 
 **formSlug** | **String**| The form slug | 
 **formType** | [**HelloAssoApiV5ModelsEnumsFormType**](.md)| The form type CrowdFunding, Membership, Event, Donation, PaymentForm, Checkout, Shop | 
 **from** | **Date**| First Date Filter | [optional] 
 **to** | **Date**| End Date Filter (exclusive) | [optional] 
 **userSearchKey** | **String**| Filter results on user or payer first name, last name or email | [optional] 
 **pageIndex** | **Number**| The page of results to retrieve | [optional] [default to 1]
 **pageSize** | **Number**| The number of items per page | [optional] [default to 20]
 **continuationToken** | **String**| Continuation Token from which we wish to retrieve results | [optional] 
 **tierTypes** | [**[HelloAssoApiV5ModelsEnumsTierType]**](HelloAssoApiV5ModelsEnumsTierType.md)| The type of tiers | [optional] 
 **itemStates** | [**[HelloAssoApiV5ModelsEnumsItemState]**](HelloAssoApiV5ModelsEnumsItemState.md)| The item states  Available values: * &#x60;Processed&#x60; - The item is paid and is valid * &#x60;Registered&#x60; - The item has been registered manually by the organization and is valid * &#x60;Unknown&#x60; * &#x60;Canceled&#x60; - The item has been canceled, and is no longer valid | [optional] 
 **tierName** | **String**| The name of a tier | [optional] 
 **withDetails** | **Boolean**| Set to true to return CustomFields and Options | [optional] [default to false]
 **sortOrder** | [**HelloAssoApiV5ModelsEnumsSortOrder**](.md)| Sort forms items by ascending or descending order. Default is descending | [optional] 
 **sortField** | [**HelloAssoApiV5ModelsEnumsSortField**](.md)| Sort forms items by a specific field (Date or UpdateDate). Default is date | [optional] 
 **withCount** | **Boolean**| Whether the pagination should include totalCount and totalPages. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, text/csv


## organizationsOrganizationSlugFormsFormTypeFormSlugOrdersGet

> ResultsWithPaginationModelOrder organizationsOrganizationSlugFormsFormTypeFormSlugOrdersGet(organizationSlug, formSlug, formType, opts)

Obtenir les commandes d&#39;un formulaire

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;FormAdmin&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessTransactions&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.CommandesApi();
let organizationSlug = "organizationSlug_example"; // String | The organization slug
let formSlug = "formSlug_example"; // String | The form slug
let formType = new HelloAssoApi.HelloAssoApiV5ModelsEnumsFormType(); // HelloAssoApiV5ModelsEnumsFormType | The form type CrowdFunding, Membership, Event, Donation, PaymentForm, Checkout, Shop
let opts = {
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | First Date Filter
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | End Date Filter (exclusive)
  'userSearchKey': "userSearchKey_example", // String | Filter results on user or payer first name, last name or email
  'pageIndex': 1, // Number | The page of results to retrieve
  'pageSize': 20, // Number | The number of items per page
  'continuationToken': "continuationToken_example", // String | Continuation Token from which we wish to retrieve results
  'withDetails': false, // Boolean | Set to true to return CustomFields
  'sortOrder': new HelloAssoApi.HelloAssoApiV5ModelsEnumsSortOrder(), // HelloAssoApiV5ModelsEnumsSortOrder | Sort forms orders by ascending or descending order. Default is descending
  'withCount': false // Boolean | Whether the pagination should include totalCount and totalPages.
};
apiInstance.organizationsOrganizationSlugFormsFormTypeFormSlugOrdersGet(organizationSlug, formSlug, formType, opts, (error, data, response) => {
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
 **formSlug** | **String**| The form slug | 
 **formType** | [**HelloAssoApiV5ModelsEnumsFormType**](.md)| The form type CrowdFunding, Membership, Event, Donation, PaymentForm, Checkout, Shop | 
 **from** | **Date**| First Date Filter | [optional] 
 **to** | **Date**| End Date Filter (exclusive) | [optional] 
 **userSearchKey** | **String**| Filter results on user or payer first name, last name or email | [optional] 
 **pageIndex** | **Number**| The page of results to retrieve | [optional] [default to 1]
 **pageSize** | **Number**| The number of items per page | [optional] [default to 20]
 **continuationToken** | **String**| Continuation Token from which we wish to retrieve results | [optional] 
 **withDetails** | **Boolean**| Set to true to return CustomFields | [optional] [default to false]
 **sortOrder** | [**HelloAssoApiV5ModelsEnumsSortOrder**](.md)| Sort forms orders by ascending or descending order. Default is descending | [optional] 
 **withCount** | **Boolean**| Whether the pagination should include totalCount and totalPages. | [optional] [default to false]

### Return type

[**ResultsWithPaginationModelOrder**](ResultsWithPaginationModelOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## organizationsOrganizationSlugItemsGet

> organizationsOrganizationSlugItemsGet(organizationSlug, opts)

Obtenir une liste d&#39;articles vendus par une organisation

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessTransactions&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.CommandesApi();
let organizationSlug = "organizationSlug_example"; // String | The organization slug
let opts = {
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | First Date Filter
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | End Date Filter (exclusive)
  'userSearchKey': "userSearchKey_example", // String | Filter results on user or payer first name, last name or email
  'pageIndex': 1, // Number | The page of results to retrieve
  'pageSize': 20, // Number | The number of items per page
  'continuationToken': "continuationToken_example", // String | Continuation Token from which we wish to retrieve results
  'tierTypes': [new HelloAssoApi.HelloAssoApiV5ModelsEnumsTierType()], // [HelloAssoApiV5ModelsEnumsTierType] | The type of tiers Donation, Payment, Registration, Membership, MonthlyDonation, MonthlyPayment, OfflineDonation, Contribution, Bonus
  'itemStates': [new HelloAssoApi.HelloAssoApiV5ModelsEnumsItemState()], // [HelloAssoApiV5ModelsEnumsItemState] | The item states  Available values: * `Processed` - The item is paid and is valid * `Registered` - The item has been registered manually by the organization and is valid * `Unknown` * `Canceled` - The item has been canceled, and is no longer valid
  'tierName': "tierName_example", // String | The name of a tier
  'withDetails': false, // Boolean | Set to true to return CustomFields and Options
  'sortOrder': new HelloAssoApi.HelloAssoApiV5ModelsEnumsSortOrder(), // HelloAssoApiV5ModelsEnumsSortOrder | Sort organizations items by ascending or descending order. Default is descending
  'sortField': new HelloAssoApi.HelloAssoApiV5ModelsEnumsSortField(), // HelloAssoApiV5ModelsEnumsSortField | Sort organizations items by a specific field (Date or UpdateDate). Default is date
  'withCount': false // Boolean | Whether the pagination should include totalCount and totalPages.
};
apiInstance.organizationsOrganizationSlugItemsGet(organizationSlug, opts, (error, data, response) => {
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
 **organizationSlug** | **String**| The organization slug | 
 **from** | **Date**| First Date Filter | [optional] 
 **to** | **Date**| End Date Filter (exclusive) | [optional] 
 **userSearchKey** | **String**| Filter results on user or payer first name, last name or email | [optional] 
 **pageIndex** | **Number**| The page of results to retrieve | [optional] [default to 1]
 **pageSize** | **Number**| The number of items per page | [optional] [default to 20]
 **continuationToken** | **String**| Continuation Token from which we wish to retrieve results | [optional] 
 **tierTypes** | [**[HelloAssoApiV5ModelsEnumsTierType]**](HelloAssoApiV5ModelsEnumsTierType.md)| The type of tiers Donation, Payment, Registration, Membership, MonthlyDonation, MonthlyPayment, OfflineDonation, Contribution, Bonus | [optional] 
 **itemStates** | [**[HelloAssoApiV5ModelsEnumsItemState]**](HelloAssoApiV5ModelsEnumsItemState.md)| The item states  Available values: * &#x60;Processed&#x60; - The item is paid and is valid * &#x60;Registered&#x60; - The item has been registered manually by the organization and is valid * &#x60;Unknown&#x60; * &#x60;Canceled&#x60; - The item has been canceled, and is no longer valid | [optional] 
 **tierName** | **String**| The name of a tier | [optional] 
 **withDetails** | **Boolean**| Set to true to return CustomFields and Options | [optional] [default to false]
 **sortOrder** | [**HelloAssoApiV5ModelsEnumsSortOrder**](.md)| Sort organizations items by ascending or descending order. Default is descending | [optional] 
 **sortField** | [**HelloAssoApiV5ModelsEnumsSortField**](.md)| Sort organizations items by a specific field (Date or UpdateDate). Default is date | [optional] 
 **withCount** | **Boolean**| Whether the pagination should include totalCount and totalPages. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, text/csv


## organizationsOrganizationSlugOrdersGet

> ResultsWithPaginationModelOrder organizationsOrganizationSlugOrdersGet(organizationSlug, opts)

Obtenir les commandes d&#39;une organisation

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessTransactions&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.CommandesApi();
let organizationSlug = "organizationSlug_example"; // String | The organization slug
let opts = {
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | First Date Filter
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | End Date Filter (exclusive)
  'userSearchKey': "userSearchKey_example", // String | Filter results on user or payer first name, last name or email
  'pageIndex': 1, // Number | The page of results to retrieve
  'pageSize': 20, // Number | The number of items per page
  'continuationToken': "continuationToken_example", // String | Continuation Token from which we wish to retrieve results
  'formTypes': [new HelloAssoApi.HelloAssoApiV5ModelsEnumsFormType()], // [HelloAssoApiV5ModelsEnumsFormType] | The type of the form CrowdFunding, Membership, Event, Donation, PaymentForm, Checkout, Shop
  'withDetails': false, // Boolean | Set to true to return CustomFields
  'sortOrder': new HelloAssoApi.HelloAssoApiV5ModelsEnumsSortOrder(), // HelloAssoApiV5ModelsEnumsSortOrder | Sort organizations orders by ascending or descending order. Default is descending
  'withCount': false // Boolean | Whether the pagination should include totalCount and totalPages.
};
apiInstance.organizationsOrganizationSlugOrdersGet(organizationSlug, opts, (error, data, response) => {
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
 **from** | **Date**| First Date Filter | [optional] 
 **to** | **Date**| End Date Filter (exclusive) | [optional] 
 **userSearchKey** | **String**| Filter results on user or payer first name, last name or email | [optional] 
 **pageIndex** | **Number**| The page of results to retrieve | [optional] [default to 1]
 **pageSize** | **Number**| The number of items per page | [optional] [default to 20]
 **continuationToken** | **String**| Continuation Token from which we wish to retrieve results | [optional] 
 **formTypes** | [**[HelloAssoApiV5ModelsEnumsFormType]**](HelloAssoApiV5ModelsEnumsFormType.md)| The type of the form CrowdFunding, Membership, Event, Donation, PaymentForm, Checkout, Shop | [optional] 
 **withDetails** | **Boolean**| Set to true to return CustomFields | [optional] [default to false]
 **sortOrder** | [**HelloAssoApiV5ModelsEnumsSortOrder**](.md)| Sort organizations orders by ascending or descending order. Default is descending | [optional] 
 **withCount** | **Boolean**| Whether the pagination should include totalCount and totalPages. | [optional] [default to false]

### Return type

[**ResultsWithPaginationModelOrder**](ResultsWithPaginationModelOrder.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

