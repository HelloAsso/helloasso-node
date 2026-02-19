# HelloAssoApi.AnnuaireApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**directoryFormsPost**](AnnuaireApi.md#directoryFormsPost) | **POST** /directory/forms | Récupérer les formulaires
[**directoryOrganizationsPost**](AnnuaireApi.md#directoryOrganizationsPost) | **POST** /directory/organizations | Récupérer les organisations



## directoryFormsPost

> HelloAssoApiV5CommonModelsCommonResultsWithPaginationModelSynchronizableFormModel directoryFormsPost(opts)

Récupérer les formulaires

Permet de récupérer une liste de tous les formulaires visibles correspondant à tous les filtres de l&#39;annuaire jusqu&#39;à ce qu&#39;il soit synchronisé (en utilisant le continuationToken). Si aucun filtre n&#39;est spécifié, aucun filtre n&#39;est appliqué. Les résultats sont classés par date de mise à jour de la visibilité API en ordre croissant. Une fois la liste synchronisée, seuls les formulaires avec une date de mise à jour de la visibilité API supérieure à la dernière forme envoyée sont retournés (toujours en utilisant le continuationToken). Cela concerne les nouveaux formulaires à insérer (souhaitant apparaître de l&#39;annuaire) ainsi que les anciens à supprimer (ne souhaitant plus apparaître dans l&#39;annuaire). Le nombre total de résultats (ou de pages) n&#39;est pas récupérable, donc les informations de pagination retournées indiqueront toujours -1.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; FormOpenDirectory&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.AnnuaireApi();
let opts = {
  'pageSize': 20, // Number | The number of items per page
  'continuationToken': "continuationToken_example", // String | Continuation Token from which we wish to retrieve results
  'helloAssoApiV5CommonModelsDirectoryListFormsRequest': new HelloAssoApi.HelloAssoApiV5CommonModelsDirectoryListFormsRequest() // HelloAssoApiV5CommonModelsDirectoryListFormsRequest | Body which contains the filters to apply
};
apiInstance.directoryFormsPost(opts, (error, data, response) => {
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
 **pageSize** | **Number**| The number of items per page | [optional] [default to 20]
 **continuationToken** | **String**| Continuation Token from which we wish to retrieve results | [optional] 
 **helloAssoApiV5CommonModelsDirectoryListFormsRequest** | [**HelloAssoApiV5CommonModelsDirectoryListFormsRequest**](HelloAssoApiV5CommonModelsDirectoryListFormsRequest.md)| Body which contains the filters to apply | [optional] 

### Return type

[**HelloAssoApiV5CommonModelsCommonResultsWithPaginationModelSynchronizableFormModel**](HelloAssoApiV5CommonModelsCommonResultsWithPaginationModelSynchronizableFormModel.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## directoryOrganizationsPost

> HelloAssoApiV5CommonModelsCommonResultsWithPaginationModelSynchronizableOrganizationModel directoryOrganizationsPost(opts)

Récupérer les organisations

Permet de récupérer une liste de toutes les organisations visibles correspondant à tous les filtres de l&#39;annuaire jusqu&#39;à ce qu&#39;il soit synchronisé (en utilisant le continuationToken). Si aucun filtre n&#39;est spécifié, aucun filtre n&#39;est appliqué. Les résultats sont classés par date de mise à jour de la visibilité API en ordre croissant. Une fois la liste synchronisée, seules les organisations avec une date de mise à jour de la visibilité API supérieure à la dernière organisation envoyée sont retournées (toujours en utilisant le continuationToken). Cela concerne les nouvelles organisations à insérer (souhaitant apparaître dans l&#39;annuaire) ainsi que les anciennes à supprimer (ne souhaitant plus apparaître dans l&#39;annuaire). Le nombre total de résultats (ou de pages) n&#39;est pas récupérable, donc les informations de pagination retournées indiqueront toujours -1.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Votre clientId doit être autorisé à tous ces privilèges : &lt;/b&gt; &lt;br/&gt; OrganizationOpenDirectory&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';
let defaultClient = HelloAssoApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HelloAssoApi.AnnuaireApi();
let opts = {
  'pageSize': 20, // Number | The number of items per page
  'continuationToken': "continuationToken_example", // String | Continuation Token from which we wish to retrieve results
  'helloAssoApiV5CommonModelsDirectoryListOrganizationsRequest': new HelloAssoApi.HelloAssoApiV5CommonModelsDirectoryListOrganizationsRequest() // HelloAssoApiV5CommonModelsDirectoryListOrganizationsRequest | Body which contains the filters to apply
};
apiInstance.directoryOrganizationsPost(opts, (error, data, response) => {
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
 **pageSize** | **Number**| The number of items per page | [optional] [default to 20]
 **continuationToken** | **String**| Continuation Token from which we wish to retrieve results | [optional] 
 **helloAssoApiV5CommonModelsDirectoryListOrganizationsRequest** | [**HelloAssoApiV5CommonModelsDirectoryListOrganizationsRequest**](HelloAssoApiV5CommonModelsDirectoryListOrganizationsRequest.md)| Body which contains the filters to apply | [optional] 

### Return type

[**HelloAssoApiV5CommonModelsCommonResultsWithPaginationModelSynchronizableOrganizationModel**](HelloAssoApiV5CommonModelsCommonResultsWithPaginationModelSynchronizableOrganizationModel.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

