# HelloAssoApi.PaiementsApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationsOrganizationSlugFormsFormTypeFormSlugPaymentsGet**](PaiementsApi.md#organizationsOrganizationSlugFormsFormTypeFormSlugPaymentsGet) | **GET** /organizations/{organizationSlug}/forms/{formType}/{formSlug}/payments | Obtenir les informations des paiements effectués sur un formulaire
[**organizationsOrganizationSlugPaymentsGet**](PaiementsApi.md#organizationsOrganizationSlugPaymentsGet) | **GET** /organizations/{organizationSlug}/payments | Obtenir les informations des paiements effectués sur une organisation
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
let formType = new HelloAssoApi.HelloAssoApiV5CommonModelsEnumsFormType(); // HelloAssoApiV5CommonModelsEnumsFormType | The form type CrowdFunding, Membership, Event, Donation, PaymentForm, Checkout, Shop
let opts = {
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | First Date Filter
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | End Date Filter (exclusive)
  'userSearchKey': "userSearchKey_example", // String | Filter results on user or payer first name, last name or email
  'pageIndex': 1, // Number | The page of results to retrieve
  'pageSize': 20, // Number | The number of items per page
  'continuationToken': "continuationToken_example", // String | Continuation Token from which we wish to retrieve results
  'states': [new HelloAssoApi.HelloAssoApiV5CommonModelsEnumsPaymentState()], // [HelloAssoApiV5CommonModelsEnumsPaymentState] | Filter results by states of payments  Available values: * `Pending` - A payment scheduled at a later date, not yet processed. * `Authorized` - The payment has been authorized, validated, processed. * `Refused` - The payment has been refused by the bank. * `Unknown` * `Registered` - Represents a payment made offline.             Probably for an item of type * `Refunded` - The payment has been refunded. * `Refunding` - The payment is being refunded. * `Contested` - Payment has been contested by the contributor * `WaitingBankValidation` - The payment is pending validation from the bank (used by SEPA direct debit).
  'sortOrder': new HelloAssoApi.HelloAssoApiV5CommonModelsEnumsSortOrder(), // HelloAssoApiV5CommonModelsEnumsSortOrder | Sort payments by ascending or descending order. Default is descending
  'sortField': new HelloAssoApi.HelloAssoApiV5CommonModelsEnumsSortField() // HelloAssoApiV5CommonModelsEnumsSortField | Sort payments by a specific field (Date or UpdateDate). Default is date
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
 **formType** | [**HelloAssoApiV5CommonModelsEnumsFormType**](.md)| The form type CrowdFunding, Membership, Event, Donation, PaymentForm, Checkout, Shop | 
 **from** | **Date**| First Date Filter | [optional] 
 **to** | **Date**| End Date Filter (exclusive) | [optional] 
 **userSearchKey** | **String**| Filter results on user or payer first name, last name or email | [optional] 
 **pageIndex** | **Number**| The page of results to retrieve | [optional] [default to 1]
 **pageSize** | **Number**| The number of items per page | [optional] [default to 20]
 **continuationToken** | **String**| Continuation Token from which we wish to retrieve results | [optional] 
 **states** | [**[HelloAssoApiV5CommonModelsEnumsPaymentState]**](HelloAssoApiV5CommonModelsEnumsPaymentState.md)| Filter results by states of payments  Available values: * &#x60;Pending&#x60; - A payment scheduled at a later date, not yet processed. * &#x60;Authorized&#x60; - The payment has been authorized, validated, processed. * &#x60;Refused&#x60; - The payment has been refused by the bank. * &#x60;Unknown&#x60; * &#x60;Registered&#x60; - Represents a payment made offline.             Probably for an item of type * &#x60;Refunded&#x60; - The payment has been refunded. * &#x60;Refunding&#x60; - The payment is being refunded. * &#x60;Contested&#x60; - Payment has been contested by the contributor * &#x60;WaitingBankValidation&#x60; - The payment is pending validation from the bank (used by SEPA direct debit). | [optional] 
 **sortOrder** | [**HelloAssoApiV5CommonModelsEnumsSortOrder**](.md)| Sort payments by ascending or descending order. Default is descending | [optional] 
 **sortField** | [**HelloAssoApiV5CommonModelsEnumsSortField**](.md)| Sort payments by a specific field (Date or UpdateDate). Default is date | [optional] 

### Return type

[**ResultsWithPaginationModelPayment**](ResultsWithPaginationModelPayment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## organizationsOrganizationSlugPaymentsGet

> ResultsWithPaginationModelPayment organizationsOrganizationSlugPaymentsGet(organizationSlug, opts)

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
  'states': [new HelloAssoApi.HelloAssoApiV5CommonModelsEnumsPaymentState()], // [HelloAssoApiV5CommonModelsEnumsPaymentState] | The payment states  Available values: * `Pending` - A payment scheduled at a later date, not yet processed. * `Authorized` - The payment has been authorized, validated, processed. * `Refused` - The payment has been refused by the bank. * `Unknown` * `Registered` - Represents a payment made offline.             Probably for an item of type * `Refunded` - The payment has been refunded. * `Refunding` - The payment is being refunded. * `Contested` - Payment has been contested by the contributor * `WaitingBankValidation` - The payment is pending validation from the bank (used by SEPA direct debit).
  'sortOrder': new HelloAssoApi.HelloAssoApiV5CommonModelsEnumsSortOrder(), // HelloAssoApiV5CommonModelsEnumsSortOrder | Sort payments by ascending or descending order. Default is descending
  'sortField': new HelloAssoApi.HelloAssoApiV5CommonModelsEnumsSortField() // HelloAssoApiV5CommonModelsEnumsSortField | Sort payments by a specific field (Date or UpdateDate). Default is date
};
apiInstance.organizationsOrganizationSlugPaymentsGet(organizationSlug, opts, (error, data, response) => {
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
 **organizationSlug** | **String**| The organization Slug | 
 **from** | **Date**| First Date Filter | [optional] 
 **to** | **Date**| End Date Filter (exclusive) | [optional] 
 **userSearchKey** | **String**| Filter results on user or payer first name, last name or email | [optional] 
 **pageIndex** | **Number**| The page of results to retrieve | [optional] [default to 1]
 **pageSize** | **Number**| The number of items per page | [optional] [default to 20]
 **continuationToken** | **String**| Continuation Token from which we wish to retrieve results | [optional] 
 **states** | [**[HelloAssoApiV5CommonModelsEnumsPaymentState]**](HelloAssoApiV5CommonModelsEnumsPaymentState.md)| The payment states  Available values: * &#x60;Pending&#x60; - A payment scheduled at a later date, not yet processed. * &#x60;Authorized&#x60; - The payment has been authorized, validated, processed. * &#x60;Refused&#x60; - The payment has been refused by the bank. * &#x60;Unknown&#x60; * &#x60;Registered&#x60; - Represents a payment made offline.             Probably for an item of type * &#x60;Refunded&#x60; - The payment has been refunded. * &#x60;Refunding&#x60; - The payment is being refunded. * &#x60;Contested&#x60; - Payment has been contested by the contributor * &#x60;WaitingBankValidation&#x60; - The payment is pending validation from the bank (used by SEPA direct debit). | [optional] 
 **sortOrder** | [**HelloAssoApiV5CommonModelsEnumsSortOrder**](.md)| Sort payments by ascending or descending order. Default is descending | [optional] 
 **sortField** | [**HelloAssoApiV5CommonModelsEnumsSortField**](.md)| Sort payments by a specific field (Date or UpdateDate). Default is date | [optional] 

### Return type

[**ResultsWithPaginationModelPayment**](ResultsWithPaginationModelPayment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, text/csv


## paymentsPaymentIdGet

> HelloAssoApiV5CommonModelsStatisticsPaymentDetail paymentsPaymentIdGet(paymentId, opts)

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

[**HelloAssoApiV5CommonModelsStatisticsPaymentDetail**](HelloAssoApiV5CommonModelsStatisticsPaymentDetail.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## paymentsPaymentIdRefundPost

> HelloAssoApiV5CommonModelsPaymentRefundOperationModel paymentsPaymentIdRefundPost(paymentId, opts)

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
  'amount': 0, // Number | The amount in cents to refund. Enter this amount only for a partial refund for stripe. If not filled in then the entire payment is refunded
  'xMfaAccessAuthorization': "xMfaAccessAuthorization_example", // String | Must be filled only if AuthorizationErrors.MFA.AccessTokenRequired error code was returned previously.
  'xMfaSmsAccessAuthorization': "xMfaSmsAccessAuthorization_example", // String | Must be filled only if AuthorizationErrors.MFA.AccessOtpSmsRequired error code was returned previously.
  'xMfaPasswordAuthorization': "xMfaPasswordAuthorization_example" // String | Must be filled only if AuthorizationErrors.MFA.AccessPasswordTokenRequired error code was returned previously.
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
 **xMfaAccessAuthorization** | **String**| Must be filled only if AuthorizationErrors.MFA.AccessTokenRequired error code was returned previously. | [optional] 
 **xMfaSmsAccessAuthorization** | **String**| Must be filled only if AuthorizationErrors.MFA.AccessOtpSmsRequired error code was returned previously. | [optional] 
 **xMfaPasswordAuthorization** | **String**| Must be filled only if AuthorizationErrors.MFA.AccessPasswordTokenRequired error code was returned previously. | [optional] 

### Return type

[**HelloAssoApiV5CommonModelsPaymentRefundOperationModel**](HelloAssoApiV5CommonModelsPaymentRefundOperationModel.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

