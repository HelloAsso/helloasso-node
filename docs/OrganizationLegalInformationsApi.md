# HelloAssoApi.OrganizationLegalInformationsApi

All URIs are relative to *https://api.helloasso.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationsLegalInformationsOrganizationSlugConfigurationPut**](OrganizationLegalInformationsApi.md#organizationsLegalInformationsOrganizationSlugConfigurationPut) | **PUT** /organizations/legal-informations/{organizationSlug}/configuration | 



## organizationsLegalInformationsOrganizationSlugConfigurationPut

> organizationsLegalInformationsOrganizationSlugConfigurationPut(organizationSlug, opts)



&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Your token must have one of these roles : &lt;/b&gt;&lt;br/&gt;OrganizationAdmin&lt;br/&gt;&lt;br/&gt;If you are an &lt;b&gt;association&lt;/b&gt;, you can obtain these roles with your client.&lt;br/&gt;If you are a &lt;b&gt;partner&lt;/b&gt;, you can obtain these roles by the authorize flow.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Your clientId must be allowed all of those privileges : &lt;/b&gt; &lt;br/&gt; OrganizationAdministration&lt;br/&gt;&lt;br/&gt;

### Example

```javascript
import HelloAssoApi from 'hello_asso_api';

let apiInstance = new HelloAssoApi.OrganizationLegalInformationsApi();
let organizationSlug = "organizationSlug_example"; // String | 
let opts = {
  'helloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationLegalInformationConfigurationBody': new HelloAssoApi.HelloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationLegalInformationConfigurationBody() // HelloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationLegalInformationConfigurationBody | 
};
apiInstance.organizationsLegalInformationsOrganizationSlugConfigurationPut(organizationSlug, opts, (error, data, response) => {
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
 **helloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationLegalInformationConfigurationBody** | [**HelloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationLegalInformationConfigurationBody**](HelloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationLegalInformationConfigurationBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: Not defined

