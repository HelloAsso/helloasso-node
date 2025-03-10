# HelloAssoApi.HelloAssoApiV5ModelsDirectoryListFormsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formName** | **String** | Textual search for form name | [optional] 
**formDescription** | **String** | Textual search for form description | [optional] 
**formZipCodes** | **[String]** | The zip codes where the forms are located | [optional] 
**formCities** | **[String]** | The cities where the forms are located | [optional] 
**formRegions** | **[String]** | The regions where the forms are located | [optional] 
**formDepartments** | **[String]** | The departments where the forms are located | [optional] 
**formCountries** | **[String]** | The countries where the forms are located | [optional] 
**formTypes** | [**[HelloAssoApiV5ModelsEnumsFormType]**](HelloAssoApiV5ModelsEnumsFormType.md) | The form types : CrowdFunding, Membership, Event, Donation, PaymentForm ... | [optional] 
**formActivityType** | **[String]** | The Activity Type of the form | [optional] 
**formPublicationStartDateMin** | **Date** | The inclusive minimum publication date of the forms, format \&quot;yyyy-MM-ddTHH:mm:ss.fffK\&quot; | [optional] 
**formPublicationStartDateMax** | **Date** | The exclusive maximum publication date of the forms, format \&quot;yyyy-MM-ddTHH:mm:ss.fffK\&quot; | [optional] 
**formStartDateMin** | **Date** | The inclusive minimum start date of the forms, format \&quot;yyyy-MM-ddTHH:mm:ss.fffK\&quot; | [optional] 
**formStartDateMax** | **Date** | The exclusive maximum start date of the forms, format \&quot;yyyy-MM-ddTHH:mm:ss.fffK\&quot; | [optional] 
**formEndDateMax** | **Date** | The exclusive maximum end date of the forms, format \&quot;yyyy-MM-ddTHH:mm:ss.fffK\&quot; | [optional] 
**formEndDateMin** | **Date** | The inclusive minimum end date of the forms, format \&quot;yyyy-MM-ddTHH:mm:ss.fffK\&quot; | [optional] 
**formIsFree** | **Boolean** | Allow only free forms if true | [optional] 
**formHasRemainingEntries** | **Boolean** | Allow only forms with remaning entries if true | [optional] 
**formInternalTags** | **[String]** | Allow only forms with internal tags  this filter is for special operations only | [optional] 
**formPublicTags** | **[String]** | Allow only forms with public tags | [optional] 
**organizationName** | **String** | Textual search for organization name | [optional] 
**organizationDescription** | **String** | Textual search for organization description | [optional] 
**organizationCategories** | **[String]** | The categories of the forms | [optional] 
**organizationTypes** | **[String]** | The organization types | [optional] 
**organizationZipCodes** | **[String]** | The zip codes where the organizations are located | [optional] 
**organizationCities** | **[String]** | The cities where the organizations are located | [optional] 
**organizationRegions** | **[String]** | The regions where the organizations are located | [optional] 
**organizationDepartments** | **[String]** | The departments where the organizations are located | [optional] 
**organizationFiscalReceiptEligibility** | **Boolean** | Allow only organization with a fiscal receipt eligibility | [optional] 
**organizationLinkedPartners** | **[String]** | Organization linked partners | [optional] 


