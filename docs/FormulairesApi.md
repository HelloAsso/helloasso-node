# HelloAssoApi.FormulairesApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationsOrganizationSlugFormTypesGet**](FormulairesApi.md#organizationsOrganizationSlugFormTypesGet) | **GET** /organizations/{organizationSlug}/formTypes | Obtenir une liste des types de formulaires pour une organisation
[**organizationsOrganizationSlugFormsFormTypeActionQuickCreatePost**](FormulairesApi.md#organizationsOrganizationSlugFormsFormTypeActionQuickCreatePost) | **POST** /organizations/{organizationSlug}/forms/{formType}/action/quick-create | Créer un événement simplifié pour un organisme
[**organizationsOrganizationSlugFormsFormTypeFormSlugPublicGet**](FormulairesApi.md#organizationsOrganizationSlugFormsFormTypeFormSlugPublicGet) | **GET** /organizations/{organizationSlug}/forms/{formType}/{formSlug}/public | Obtenir des données publiques détaillées sur un formulaire
[**organizationsOrganizationSlugFormsGet**](FormulairesApi.md#organizationsOrganizationSlugFormsGet) | **GET** /organizations/{organizationSlug}/forms | Obtenir les formulaires d&#39;une organisation



## organizationsOrganizationSlugFormTypesGet

> organizationsOrganizationSlugFormTypesGet(organizationSlug, opts)

Obtenir une liste des types de formulaires pour une organisation

Liste tous les types de formulaires où l&#39;organisation possède au moins un formulaire. Cela peut également être filtré par états.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessPublicData&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.FormulairesApi();
let organizationSlug = "organizationSlug_example"; // String | The organization Slug
let opts = {
  'states': [new HelloAssoApi.HelloAssoApiV5CommonModelsEnumsFormState()] // [HelloAssoApiV5CommonModelsEnumsFormState] | List of Form States to filter with. If none specified, it won't filter results.  Available values: * `Public` - The form is publicly visible and findable on search engines * `Private` - The form is visible only with the URL, you cannot find it on search engines * `Draft` - The form is not yet published but visible if you have admin rights * `Disabled` - The form is disabled and can be reenabled by changing state to public or private
};
apiInstance.organizationsOrganizationSlugFormTypesGet(organizationSlug, opts, (error, data, response) => {
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
 **states** | [**[HelloAssoApiV5CommonModelsEnumsFormState]**](HelloAssoApiV5CommonModelsEnumsFormState.md)| List of Form States to filter with. If none specified, it won&#39;t filter results.  Available values: * &#x60;Public&#x60; - The form is publicly visible and findable on search engines * &#x60;Private&#x60; - The form is visible only with the URL, you cannot find it on search engines * &#x60;Draft&#x60; - The form is not yet published but visible if you have admin rights * &#x60;Disabled&#x60; - The form is disabled and can be reenabled by changing state to public or private | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## organizationsOrganizationSlugFormsFormTypeActionQuickCreatePost

> organizationsOrganizationSlugFormsFormTypeActionQuickCreatePost(organizationSlug, formType, opts)

Créer un événement simplifié pour un organisme

Permet la création d&#39;un événement avec seulement des informations limitées et quelques tarifications simples. L&#39;événement créé de cette manière peut être modifié ultérieurement avec d&#39;autres services&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre token doit avoir l&#39;un de ces rôles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;Si vous êtes une &lt;b&gt;association&lt;/b&gt;, vous pouvez obtenir ces rôles avec votre client.&lt;br/&gt;Si vous êtes un &lt;b&gt;partenaire&lt;/b&gt;, vous pouvez obtenir ces rôles par le flux d&#39;autorisation.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; FormAdministration&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.FormulairesApi();
let organizationSlug = "organizationSlug_example"; // String | The organization Slug
let formType = new HelloAssoApi.HelloAssoApiV5CommonModelsEnumsFormType(); // HelloAssoApiV5CommonModelsEnumsFormType | The form type to create - only Event type is supported
let opts = {
  'helloAssoApiV5CommonModelsFormsFormQuickCreateRequest': new HelloAssoApi.HelloAssoApiV5CommonModelsFormsFormQuickCreateRequest() // HelloAssoApiV5CommonModelsFormsFormQuickCreateRequest | The body of the request.
};
apiInstance.organizationsOrganizationSlugFormsFormTypeActionQuickCreatePost(organizationSlug, formType, opts, (error, data, response) => {
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
 **formType** | [**HelloAssoApiV5CommonModelsEnumsFormType**](.md)| The form type to create - only Event type is supported | 
 **helloAssoApiV5CommonModelsFormsFormQuickCreateRequest** | [**HelloAssoApiV5CommonModelsFormsFormQuickCreateRequest**](HelloAssoApiV5CommonModelsFormsFormQuickCreateRequest.md)| The body of the request. | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: Not defined


## organizationsOrganizationSlugFormsFormTypeFormSlugPublicGet

> organizationsOrganizationSlugFormsFormTypeFormSlugPublicGet(organizationSlug, formType, formSlug)

Obtenir des données publiques détaillées sur un formulaire

Permet de récupérer toutes les informations publiques d&#39;un formulaire, qu&#39;il s&#39;agisse de Crowdfunding, d&#39;Adhésion, d&#39;Événement, de Don...&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessPublicData&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.FormulairesApi();
let organizationSlug = "organizationSlug_example"; // String | 
let formType = new HelloAssoApi.HelloAssoApiV5CommonModelsEnumsFormType(); // HelloAssoApiV5CommonModelsEnumsFormType | 
let formSlug = "formSlug_example"; // String | 
apiInstance.organizationsOrganizationSlugFormsFormTypeFormSlugPublicGet(organizationSlug, formType, formSlug, (error, data, response) => {
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
 **formType** | [**HelloAssoApiV5CommonModelsEnumsFormType**](.md)|  | 
 **formSlug** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## organizationsOrganizationSlugFormsGet

> organizationsOrganizationSlugFormsGet(organizationSlug, opts)

Obtenir les formulaires d&#39;une organisation

Liste tous les formulaires correspondant aux états et types. Si aucun filtre n&#39;est spécifié, aucun filtre n&#39;est appliqué. Les résultats sont classés par date de création en ordre décroissant.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; AccessPublicData&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.FormulairesApi();
let organizationSlug = "organizationSlug_example"; // String | The organization Slug
let opts = {
  'states': [new HelloAssoApi.HelloAssoApiV5CommonModelsEnumsFormState()], // [HelloAssoApiV5CommonModelsEnumsFormState] | States to filter  Available values: * `Public` - The form is publicly visible and findable on search engines * `Private` - The form is visible only with the URL, you cannot find it on search engines * `Draft` - The form is not yet published but visible if you have admin rights * `Disabled` - The form is disabled and can be reenabled by changing state to public or private
  'formTypes': [new HelloAssoApi.HelloAssoApiV5CommonModelsEnumsFormType()], // [HelloAssoApiV5CommonModelsEnumsFormType] | Types to filter
  'pageIndex': 1, // Number | The page of results to retrieve
  'pageSize': 20, // Number | The number of items per page
  'continuationToken': "continuationToken_example" // String | Continuation Token from which we wish to retrieve results
};
apiInstance.organizationsOrganizationSlugFormsGet(organizationSlug, opts, (error, data, response) => {
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
 **states** | [**[HelloAssoApiV5CommonModelsEnumsFormState]**](HelloAssoApiV5CommonModelsEnumsFormState.md)| States to filter  Available values: * &#x60;Public&#x60; - The form is publicly visible and findable on search engines * &#x60;Private&#x60; - The form is visible only with the URL, you cannot find it on search engines * &#x60;Draft&#x60; - The form is not yet published but visible if you have admin rights * &#x60;Disabled&#x60; - The form is disabled and can be reenabled by changing state to public or private | [optional] 
 **formTypes** | [**[HelloAssoApiV5CommonModelsEnumsFormType]**](HelloAssoApiV5CommonModelsEnumsFormType.md)| Types to filter | [optional] 
 **pageIndex** | **Number**| The page of results to retrieve | [optional] [default to 1]
 **pageSize** | **Number**| The number of items per page | [optional] [default to 20]
 **continuationToken** | **String**| Continuation Token from which we wish to retrieve results | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

