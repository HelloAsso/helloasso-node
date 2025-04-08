# HelloAssoApi.PaiementsApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationsOrganizationSlugFormsFormTypeFormSlugPaymentsGet**](PaiementsApi.md#organizationsOrganizationSlugFormsFormTypeFormSlugPaymentsGet) | **GET** /organizations/{organizationSlug}/forms/{formType}/{formSlug}/payments | Obtenir les informations des paiements effectués sur un formulaire
[**organizationsOrganizationSlugPaymentsGet**](PaiementsApi.md#organizationsOrganizationSlugPaymentsGet) | **GET** /organizations/{organizationSlug}/payments | Obtenir les informations des paiements effectués sur une organisation
[**organizationsOrganizationSlugPaymentsSearchGet**](PaiementsApi.md#organizationsOrganizationSlugPaymentsSearchGet) | **GET** /organizations/{organizationSlug}/payments/search | Rechercher des paiements.
[**paymentsPaymentIdGet**](PaiementsApi.md#paymentsPaymentIdGet) | **GET** /payments/{paymentId} | Obtenir les informations détaillées d&#39;un paiement.
[**paymentsPaymentIdRefundPost**](PaiementsApi.md#paymentsPaymentIdRefundPost) | **POST** /payments/{paymentId}/refund | Rembourser un paiement.



## organizationsOrganizationSlugFormsFormTypeFormSlugPaymentsGet

> ResultsWithPaginationModelPayment organizationsOrganizationSlugFormsFormTypeFormSlugPaymentsGet(organizationSlug, formSlug, formType, opts)

Obtenir les informations des paiements effectués sur un formulaire

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;FormAdmin&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessTransactions&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.PaiementsApi();
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
  'states': [new HelloAssoApi.HelloAssoApiV5ModelsEnumsPaymentState()], // [HelloAssoApiV5ModelsEnumsPaymentState] | Filter results by states of payments  Available values: * `Pending` - A payment scheduled at a later date, not yet processed. * `Authorized` - The payment has been authorized, validated, processed. * `Refused` - The payment has been refused by the bank. * `Unknown` * `Registered` - Represents a payment made offline.              Probably for an item of type * `Refunded` - The payment has been refunded. * `Refunding` - The payment is being refunded. * `Contested` - Payment has been contested by the contributor
  'sortOrder': new HelloAssoApi.HelloAssoApiV5ModelsEnumsSortOrder(), // HelloAssoApiV5ModelsEnumsSortOrder | Sort payments by ascending or descending order. Default is descending
  'sortField': new HelloAssoApi.HelloAssoApiV5ModelsEnumsSortField(), // HelloAssoApiV5ModelsEnumsSortField | Sort payments by a specific field (Date or UpdateDate). Default is date
  'withCount': false // Boolean | Whether the pagination should include totalCount and totalPages.
};
apiInstance.organizationsOrganizationSlugFormsFormTypeFormSlugPaymentsGet(organizationSlug, formSlug, formType, opts, (error, data, response) => {
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
 **states** | [**[HelloAssoApiV5ModelsEnumsPaymentState]**](HelloAssoApiV5ModelsEnumsPaymentState.md)| Filter results by states of payments  Available values: * &#x60;Pending&#x60; - A payment scheduled at a later date, not yet processed. * &#x60;Authorized&#x60; - The payment has been authorized, validated, processed. * &#x60;Refused&#x60; - The payment has been refused by the bank. * &#x60;Unknown&#x60; * &#x60;Registered&#x60; - Represents a payment made offline.              Probably for an item of type * &#x60;Refunded&#x60; - The payment has been refunded. * &#x60;Refunding&#x60; - The payment is being refunded. * &#x60;Contested&#x60; - Payment has been contested by the contributor | [optional] 
 **sortOrder** | [**HelloAssoApiV5ModelsEnumsSortOrder**](.md)| Sort payments by ascending or descending order. Default is descending | [optional] 
 **sortField** | [**HelloAssoApiV5ModelsEnumsSortField**](.md)| Sort payments by a specific field (Date or UpdateDate). Default is date | [optional] 
 **withCount** | **Boolean**| Whether the pagination should include totalCount and totalPages. | [optional] [default to false]

### Return type

[**ResultsWithPaginationModelPayment**](ResultsWithPaginationModelPayment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## organizationsOrganizationSlugPaymentsGet

> organizationsOrganizationSlugPaymentsGet(organizationSlug, opts)

Obtenir les informations des paiements effectués sur une organisation

Retourne la liste des paiements selon les paramètres&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessTransactions&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.PaiementsApi();
let organizationSlug = "organizationSlug_example"; // String | The organization Slug
let opts = {
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | First Date Filter
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | End Date Filter (exclusive)
  'userSearchKey': "userSearchKey_example", // String | Filter results on user or payer first name, last name or email
  'pageIndex': 1, // Number | The page of results to retrieve
  'pageSize': 20, // Number | The number of items per page
  'continuationToken': "continuationToken_example", // String | Continuation Token from which we wish to retrieve results
  'states': [new HelloAssoApi.HelloAssoApiV5ModelsEnumsPaymentState()], // [HelloAssoApiV5ModelsEnumsPaymentState] | The payment states  Available values: * `Pending` - A payment scheduled at a later date, not yet processed. * `Authorized` - The payment has been authorized, validated, processed. * `Refused` - The payment has been refused by the bank. * `Unknown` * `Registered` - Represents a payment made offline.              Probably for an item of type * `Refunded` - The payment has been refunded. * `Refunding` - The payment is being refunded. * `Contested` - Payment has been contested by the contributor
  'sortOrder': new HelloAssoApi.HelloAssoApiV5ModelsEnumsSortOrder(), // HelloAssoApiV5ModelsEnumsSortOrder | Sort payments by ascending or descending order. Default is descending
  'sortField': new HelloAssoApi.HelloAssoApiV5ModelsEnumsSortField(), // HelloAssoApiV5ModelsEnumsSortField | Sort payments by a specific field (Date or UpdateDate). Default is date
  'withCount': false // Boolean | Whether the pagination should include totalCount and totalPages.
};
apiInstance.organizationsOrganizationSlugPaymentsGet(organizationSlug, opts, (error, data, response) => {
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
 **organizationSlug** | **String**| The organization Slug | 
 **from** | **Date**| First Date Filter | [optional] 
 **to** | **Date**| End Date Filter (exclusive) | [optional] 
 **userSearchKey** | **String**| Filter results on user or payer first name, last name or email | [optional] 
 **pageIndex** | **Number**| The page of results to retrieve | [optional] [default to 1]
 **pageSize** | **Number**| The number of items per page | [optional] [default to 20]
 **continuationToken** | **String**| Continuation Token from which we wish to retrieve results | [optional] 
 **states** | [**[HelloAssoApiV5ModelsEnumsPaymentState]**](HelloAssoApiV5ModelsEnumsPaymentState.md)| The payment states  Available values: * &#x60;Pending&#x60; - A payment scheduled at a later date, not yet processed. * &#x60;Authorized&#x60; - The payment has been authorized, validated, processed. * &#x60;Refused&#x60; - The payment has been refused by the bank. * &#x60;Unknown&#x60; * &#x60;Registered&#x60; - Represents a payment made offline.              Probably for an item of type * &#x60;Refunded&#x60; - The payment has been refunded. * &#x60;Refunding&#x60; - The payment is being refunded. * &#x60;Contested&#x60; - Payment has been contested by the contributor | [optional] 
 **sortOrder** | [**HelloAssoApiV5ModelsEnumsSortOrder**](.md)| Sort payments by ascending or descending order. Default is descending | [optional] 
 **sortField** | [**HelloAssoApiV5ModelsEnumsSortField**](.md)| Sort payments by a specific field (Date or UpdateDate). Default is date | [optional] 
 **withCount** | **Boolean**| Whether the pagination should include totalCount and totalPages. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, text/csv


## organizationsOrganizationSlugPaymentsSearchGet

> ResultsWithPaginationModelPublicPaymentModel organizationsOrganizationSlugPaymentsSearchGet(organizationSlug, opts)

Rechercher des paiements.

Attention : Le compte total est désactivé, nous retournons la liste des paiements et le continuationToken. Recherchez des paiements basés sur de nombreux critères La recherche doit utiliser au moins l&#39;un des suivants : - ID de l&#39;organisation : paiements effectués pour cette organisation - Formulaire : Paiements effectués par ce formulaire en utilisant le couple ID du formulaire et type du formulaire - ID de l&#39;utilisateur : Paiements effectués par cet utilisateur Et peut combiner autant de ces filtres. - États : Une liste d&#39;états de paiement à filtrer. Aucun ou vide signifie que tous les paiements seront retournés - Plage de dates : En utilisant du et/ou au, la date est inclusive - Requête de recherche : Une liste de mots qui doivent être contenus soit sur les noms des payeurs ou des utilisateurs ou l&#39;email - Montant du paiement : En centimes, qui doit exactement correspondre au montant des paiements (avec ou sans la contribution) L&#39;ordre des résultats est également personnalisable : - Le champ de tri peut être la date, la date de mise à jour ou la date de création - L&#39;ordre peut être ascendant ou descendant&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessTransactions&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.PaiementsApi();
let organizationSlug = "organizationSlug_example"; // String | The organization slug
let opts = {
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | First Date Filter
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | End Date Filter (exclusive)
  'pageSize': 20, // Number | The number of items to retrieve
  'continuationToken': "continuationToken_example", // String | Continuation Token from which we wish to retrieve results
  'formTypes': [new HelloAssoApi.HelloAssoApiV5ModelsEnumsFormType()], // [HelloAssoApiV5ModelsEnumsFormType] | The form type CrowdFunding, Membership, Event, Donation, PaymentForm, Checkout, Shop
  'formType': new HelloAssoApi.HelloAssoApiV5ModelsEnumsFormType(), // HelloAssoApiV5ModelsEnumsFormType | The form type CrowdFunding, Membership, Event, Donation, PaymentForm, Checkout, Shop. This parameter must be used with the parameter formId.
  'states': [new HelloAssoApi.HelloAssoApiV5ModelsEnumsPaymentState()], // [HelloAssoApiV5ModelsEnumsPaymentState] | Filter results by states of payments  Available values: * `Pending` - A payment scheduled at a later date, not yet processed. * `Authorized` - The payment has been authorized, validated, processed. * `Refused` - The payment has been refused by the bank. * `Unknown` * `Registered` - Represents a payment made offline.              Probably for an item of type * `Refunded` - The payment has been refunded. * `Refunding` - The payment is being refunded. * `Contested` - Payment has been contested by the contributor
  'userId': 56, // Number | The User identifier
  'searchKey': "searchKey_example", // String | Filter results on user or payer first name, last name or email.
  'amount': 56, // Number | Amount of the payment in cents. Filter payments with exact amount with or without the contribution.
  'sortOrder': new HelloAssoApi.HelloAssoApiV5ModelsEnumsSortOrder(), // HelloAssoApiV5ModelsEnumsSortOrder | Sort payments by ascending or descending order. Default is descending
  'sortField': new HelloAssoApi.HelloAssoApiV5ModelsEnumsSortField() // HelloAssoApiV5ModelsEnumsSortField | Sort payments by a specific field (Date or UpdateDate). Default is date
};
apiInstance.organizationsOrganizationSlugPaymentsSearchGet(organizationSlug, opts, (error, data, response) => {
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
 **pageSize** | **Number**| The number of items to retrieve | [optional] [default to 20]
 **continuationToken** | **String**| Continuation Token from which we wish to retrieve results | [optional] 
 **formTypes** | [**[HelloAssoApiV5ModelsEnumsFormType]**](HelloAssoApiV5ModelsEnumsFormType.md)| The form type CrowdFunding, Membership, Event, Donation, PaymentForm, Checkout, Shop | [optional] 
 **formType** | [**HelloAssoApiV5ModelsEnumsFormType**](.md)| The form type CrowdFunding, Membership, Event, Donation, PaymentForm, Checkout, Shop. This parameter must be used with the parameter formId. | [optional] 
 **states** | [**[HelloAssoApiV5ModelsEnumsPaymentState]**](HelloAssoApiV5ModelsEnumsPaymentState.md)| Filter results by states of payments  Available values: * &#x60;Pending&#x60; - A payment scheduled at a later date, not yet processed. * &#x60;Authorized&#x60; - The payment has been authorized, validated, processed. * &#x60;Refused&#x60; - The payment has been refused by the bank. * &#x60;Unknown&#x60; * &#x60;Registered&#x60; - Represents a payment made offline.              Probably for an item of type * &#x60;Refunded&#x60; - The payment has been refunded. * &#x60;Refunding&#x60; - The payment is being refunded. * &#x60;Contested&#x60; - Payment has been contested by the contributor | [optional] 
 **userId** | **Number**| The User identifier | [optional] 
 **searchKey** | **String**| Filter results on user or payer first name, last name or email. | [optional] 
 **amount** | **Number**| Amount of the payment in cents. Filter payments with exact amount with or without the contribution. | [optional] 
 **sortOrder** | [**HelloAssoApiV5ModelsEnumsSortOrder**](.md)| Sort payments by ascending or descending order. Default is descending | [optional] 
 **sortField** | [**HelloAssoApiV5ModelsEnumsSortField**](.md)| Sort payments by a specific field (Date or UpdateDate). Default is date | [optional] 

### Return type

[**ResultsWithPaginationModelPublicPaymentModel**](ResultsWithPaginationModelPublicPaymentModel.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## paymentsPaymentIdGet

> HelloAssoApiV5ModelsStatisticsPaymentDetail paymentsPaymentIdGet(paymentId, opts)

Obtenir les informations détaillées d&#39;un paiement.

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;FormAdmin&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessTransactions&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.PaiementsApi();
let paymentId = 56; // Number | The payment identifier.
let opts = {
  'withFailedRefundOperation': false // Boolean | True to retrieve the refund operation in the states 'ABORTED', 'CANCELED', 'ERROR', 'REFUSED'.
};
apiInstance.paymentsPaymentIdGet(paymentId, opts, (error, data, response) => {
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
 **paymentId** | **Number**| The payment identifier. | 
 **withFailedRefundOperation** | **Boolean**| True to retrieve the refund operation in the states &#39;ABORTED&#39;, &#39;CANCELED&#39;, &#39;ERROR&#39;, &#39;REFUSED&#39;. | [optional] [default to false]

### Return type

[**HelloAssoApiV5ModelsStatisticsPaymentDetail**](HelloAssoApiV5ModelsStatisticsPaymentDetail.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## paymentsPaymentIdRefundPost

> HelloAssoApiV5ModelsPaymentRefundOperationModel paymentsPaymentIdRefundPost(paymentId, opts)

Rembourser un paiement.

&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;FormAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; RefundManagement&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.PaiementsApi();
let paymentId = 56; // Number | The payment identifier.
let opts = {
  'comment': "comment_example", // String | The comment about this refund.
  'cancelOrder': false, // Boolean | Whether the future payments and linked items of this order must be canceled (possible only if the payment is fully refunded)
  'sendRefundMail': true, // Boolean | Whether a refund mail must be sent or not.
  'amount': 0 // Number | The amount in cents to refund. Enter this amount only for a partial refund for stripe. If not filled in then the entire payment is refunded
};
apiInstance.paymentsPaymentIdRefundPost(paymentId, opts, (error, data, response) => {
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
 **paymentId** | **Number**| The payment identifier. | 
 **comment** | **String**| The comment about this refund. | [optional] 
 **cancelOrder** | **Boolean**| Whether the future payments and linked items of this order must be canceled (possible only if the payment is fully refunded) | [optional] [default to false]
 **sendRefundMail** | **Boolean**| Whether a refund mail must be sent or not. | [optional] [default to true]
 **amount** | **Number**| The amount in cents to refund. Enter this amount only for a partial refund for stripe. If not filled in then the entire payment is refunded | [optional] [default to 0]

### Return type

[**HelloAssoApiV5ModelsPaymentRefundOperationModel**](HelloAssoApiV5ModelsPaymentRefundOperationModel.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

