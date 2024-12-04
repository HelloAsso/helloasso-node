# helloasso-node

The HelloAsso node library offers a straightforward way to interact with the HelloAsso API in node applications. It features a collection of pre-built classes for API resources that automatically adapt to API responses, ensuring flexibility across different versions of the HelloAsso API.

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Install it via:

```shell
npm install helloasso-node --save
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var helloasso = require('helloasso-node');

var defaultClient = helloasso.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = "YOUR ACCESS TOKEN"

var api = new helloasso.AnnuaireApi()
var opts = {
  'pageSize': 20, // {Number} The number of items per page
  'continuationToken': "continuationToken_example", // {String} Continuation Token from which we wish to retrieve results
  'helloAssoApiV5ModelsDirectoryListFormsRequest': new helloasso.HelloAssoApiV5ModelsDirectoryListFormsRequest() // {HelloAssoApiV5ModelsDirectoryListFormsRequest} Body which contains the filters to apply
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.directoryFormsPost(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.helloasso.com/v5*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*HelloAssoApi.AnnuaireApi* | [**directoryFormsPost**](docs/AnnuaireApi.md#directoryFormsPost) | **POST** /directory/forms | Récupérer les formulaires
*HelloAssoApi.AnnuaireApi* | [**directoryOrganizationsPost**](docs/AnnuaireApi.md#directoryOrganizationsPost) | **POST** /directory/organizations | Récupérer les organisations
*HelloAssoApi.CheckoutApi* | [**organizationsOrganizationSlugCheckoutIntentsCheckoutIntentIdGet**](docs/CheckoutApi.md#organizationsOrganizationSlugCheckoutIntentsCheckoutIntentIdGet) | **GET** /organizations/{organizationSlug}/checkout-intents/{checkoutIntentId} | Récupérer une intention de paiement
*HelloAssoApi.CheckoutApi* | [**organizationsOrganizationSlugCheckoutIntentsPost**](docs/CheckoutApi.md#organizationsOrganizationSlugCheckoutIntentsPost) | **POST** /organizations/{organizationSlug}/checkout-intents | Initialisation d&#39;un Checkout
*HelloAssoApi.CommandesApi* | [**itemsItemIdGet**](docs/CommandesApi.md#itemsItemIdGet) | **GET** /items/{itemId} | Obtenir le détail d&#39;un article contenu dans une commande
*HelloAssoApi.CommandesApi* | [**ordersOrderIdCancelPost**](docs/CommandesApi.md#ordersOrderIdCancelPost) | **POST** /orders/{orderId}/cancel | Annuler les paiements futurs pour une commande (pas de remboursement).
*HelloAssoApi.CommandesApi* | [**ordersOrderIdGet**](docs/CommandesApi.md#ordersOrderIdGet) | **GET** /orders/{orderId} | Obtenir des informations détaillées sur une commande
*HelloAssoApi.CommandesApi* | [**organizationsOrganizationSlugFormsFormTypeFormSlugItemsGet**](docs/CommandesApi.md#organizationsOrganizationSlugFormsFormTypeFormSlugItemsGet) | **GET** /organizations/{organizationSlug}/forms/{formType}/{formSlug}/items | Obtenir une liste d&#39;articles vendus dans un formulaire
*HelloAssoApi.CommandesApi* | [**organizationsOrganizationSlugFormsFormTypeFormSlugOrdersGet**](docs/CommandesApi.md#organizationsOrganizationSlugFormsFormTypeFormSlugOrdersGet) | **GET** /organizations/{organizationSlug}/forms/{formType}/{formSlug}/orders | Obtenir les commandes d&#39;un formulaire
*HelloAssoApi.CommandesApi* | [**organizationsOrganizationSlugItemsGet**](docs/CommandesApi.md#organizationsOrganizationSlugItemsGet) | **GET** /organizations/{organizationSlug}/items | Obtenir une liste d&#39;articles vendus par une organisation
*HelloAssoApi.CommandesApi* | [**organizationsOrganizationSlugOrdersGet**](docs/CommandesApi.md#organizationsOrganizationSlugOrdersGet) | **GET** /organizations/{organizationSlug}/orders | Obtenir les commandes d&#39;une organisation
*HelloAssoApi.FormulairesApi* | [**organizationsOrganizationSlugFormTypesGet**](docs/FormulairesApi.md#organizationsOrganizationSlugFormTypesGet) | **GET** /organizations/{organizationSlug}/formTypes | Obtenir une liste des types de formulaires pour une organisation
*HelloAssoApi.FormulairesApi* | [**organizationsOrganizationSlugFormsFormTypeActionQuickCreatePost**](docs/FormulairesApi.md#organizationsOrganizationSlugFormsFormTypeActionQuickCreatePost) | **POST** /organizations/{organizationSlug}/forms/{formType}/action/quick-create | Créer un événement simplifié pour un organisme
*HelloAssoApi.FormulairesApi* | [**organizationsOrganizationSlugFormsFormTypeFormSlugPublicGet**](docs/FormulairesApi.md#organizationsOrganizationSlugFormsFormTypeFormSlugPublicGet) | **GET** /organizations/{organizationSlug}/forms/{formType}/{formSlug}/public | Obtenir des données publiques détaillées sur un formulaire
*HelloAssoApi.FormulairesApi* | [**organizationsOrganizationSlugFormsGet**](docs/FormulairesApi.md#organizationsOrganizationSlugFormsGet) | **GET** /organizations/{organizationSlug}/forms | Obtenir les formulaires d&#39;une organisation
*HelloAssoApi.ListeDeValeursApi* | [**valuesCompanyLegalStatusGet**](docs/ListeDeValeursApi.md#valuesCompanyLegalStatusGet) | **GET** /values/company-legal-status | Obtenir la liste des statuts juridiques
*HelloAssoApi.ListeDeValeursApi* | [**valuesOrganizationCategoriesGet**](docs/ListeDeValeursApi.md#valuesOrganizationCategoriesGet) | **GET** /values/organization/categories | Obtenir la liste des catégories du JO
*HelloAssoApi.ListeDeValeursApi* | [**valuesTagsGet**](docs/ListeDeValeursApi.md#valuesTagsGet) | **GET** /values/tags | Obtenir la liste des tags publiques
*HelloAssoApi.OrganisationApi* | [**organizationsLegalInformationsLegalStructuresGet**](docs/OrganisationApi.md#organizationsLegalInformationsLegalStructuresGet) | **GET** /organizations/legal-informations/legal-structures | Obtenir la structure juridique d&#39;une organisation visible.
*HelloAssoApi.OrganisationApi* | [**organizationsLegalInformationsOrganizationSlugConfigurationGet**](docs/OrganisationApi.md#organizationsLegalInformationsOrganizationSlugConfigurationGet) | **GET** /organizations/legal-informations/{organizationSlug}/configuration | 
*HelloAssoApi.OrganisationApi* | [**organizationsLegalInformationsTaxInformationTextsGet**](docs/OrganisationApi.md#organizationsLegalInformationsTaxInformationTextsGet) | **GET** /organizations/legal-informations/tax-information-texts | 
*HelloAssoApi.OrganisationApi* | [**organizationsOrganizationSlugGet**](docs/OrganisationApi.md#organizationsOrganizationSlugGet) | **GET** /organizations/{organizationSlug} | Obtenir le détail d&#39;une organisation
*HelloAssoApi.OrganizationLegalInformationsApi* | [**organizationsLegalInformationsOrganizationSlugConfigurationPut**](docs/OrganizationLegalInformationsApi.md#organizationsLegalInformationsOrganizationSlugConfigurationPut) | **PUT** /organizations/legal-informations/{organizationSlug}/configuration | 
*HelloAssoApi.PaiementsApi* | [**organizationsOrganizationSlugFormsFormTypeFormSlugPaymentsGet**](docs/PaiementsApi.md#organizationsOrganizationSlugFormsFormTypeFormSlugPaymentsGet) | **GET** /organizations/{organizationSlug}/forms/{formType}/{formSlug}/payments | Obtenir les informations des paiements effectués sur un formulaire
*HelloAssoApi.PaiementsApi* | [**organizationsOrganizationSlugPaymentsGet**](docs/PaiementsApi.md#organizationsOrganizationSlugPaymentsGet) | **GET** /organizations/{organizationSlug}/payments | Obtenir les informations des paiements effectués sur une organisation
*HelloAssoApi.PaiementsApi* | [**organizationsOrganizationSlugPaymentsSearchGet**](docs/PaiementsApi.md#organizationsOrganizationSlugPaymentsSearchGet) | **GET** /organizations/{organizationSlug}/payments/search | Rechercher des paiements.
*HelloAssoApi.PaiementsApi* | [**paymentsPaymentIdGet**](docs/PaiementsApi.md#paymentsPaymentIdGet) | **GET** /payments/{paymentId} | Obtenir les informations détaillées d&#39;un paiement.
*HelloAssoApi.PaiementsApi* | [**paymentsPaymentIdRefundPost**](docs/PaiementsApi.md#paymentsPaymentIdRefundPost) | **POST** /payments/{paymentId}/refund | Rembourser un paiement.
*HelloAssoApi.PartenairesApi* | [**partnersMeApiClientsPut**](docs/PartenairesApi.md#partnersMeApiClientsPut) | **PUT** /partners/me/api-clients | Mise à jour du domaine
*HelloAssoApi.PartenairesApi* | [**partnersMeApiNotificationsDelete**](docs/PartenairesApi.md#partnersMeApiNotificationsDelete) | **DELETE** /partners/me/api-notifications | Suppression de l&#39;URL de notification principale
*HelloAssoApi.PartenairesApi* | [**partnersMeApiNotificationsOrganizationsOrganizationSlugDelete**](docs/PartenairesApi.md#partnersMeApiNotificationsOrganizationsOrganizationSlugDelete) | **DELETE** /partners/me/api-notifications/organizations/{organizationSlug} | Suppression d&#39;une URL de notification liée à une organisation
*HelloAssoApi.PartenairesApi* | [**partnersMeApiNotificationsOrganizationsOrganizationSlugPut**](docs/PartenairesApi.md#partnersMeApiNotificationsOrganizationsOrganizationSlugPut) | **PUT** /partners/me/api-notifications/organizations/{organizationSlug} | Mise à jour d&#39;une URL de notification liée à une organisation
*HelloAssoApi.PartenairesApi* | [**partnersMeApiNotificationsPut**](docs/PartenairesApi.md#partnersMeApiNotificationsPut) | **PUT** /partners/me/api-notifications | Mise à jour de l&#39;URL de notification principale
*HelloAssoApi.PartenairesApi* | [**partnersMeGet**](docs/PartenairesApi.md#partnersMeGet) | **GET** /partners/me | Récupération des informations
*HelloAssoApi.PartenairesApi* | [**partnersMeOrganizationsGet**](docs/PartenairesApi.md#partnersMeOrganizationsGet) | **GET** /partners/me/organizations | Obtenir toutes les organisations
*HelloAssoApi.TagsApi* | [**tagsTagNameGet**](docs/TagsApi.md#tagsTagNameGet) | **GET** /tags/{tagName} | Obtenir le détail d&#39;un tag interne
*HelloAssoApi.TaxReceiptApi* | [**organizationsOrganizationSlugTaxReceiptConfigurationGet**](docs/TaxReceiptApi.md#organizationsOrganizationSlugTaxReceiptConfigurationGet) | **GET** /organizations/{organizationSlug}/tax-receipt/configuration | 
*HelloAssoApi.TaxReceiptApi* | [**organizationsOrganizationSlugTaxReceiptConfigurationPut**](docs/TaxReceiptApi.md#organizationsOrganizationSlugTaxReceiptConfigurationPut) | **PUT** /organizations/{organizationSlug}/tax-receipt/configuration | 
*HelloAssoApi.TaxReceiptApi* | [**organizationsOrganizationSlugTaxReceiptPreviewPost**](docs/TaxReceiptApi.md#organizationsOrganizationSlugTaxReceiptPreviewPost) | **POST** /organizations/{organizationSlug}/tax-receipt/preview | 
*HelloAssoApi.UtilisateursApi* | [**usersMeOrganizationsGet**](docs/UtilisateursApi.md#usersMeOrganizationsGet) | **GET** /users/me/organizations | Obtenir mes organisations


## Documentation for Models

 - [HelloAssoApi.HelloAssoApiV5ModelsAccountCompanyLegalStatusModel](docs/HelloAssoApiV5ModelsAccountCompanyLegalStatusModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsAccountOrganismCategoryModel](docs/HelloAssoApiV5ModelsAccountOrganismCategoryModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsAccountsClientsApiClientModel](docs/HelloAssoApiV5ModelsAccountsClientsApiClientModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsAccountsClientsPublicPutApiClientRequest](docs/HelloAssoApiV5ModelsAccountsClientsPublicPutApiClientRequest.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsApiNotificationsApiNotificationType](docs/HelloAssoApiV5ModelsApiNotificationsApiNotificationType.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsApiNotificationsApiUrlNotificationModel](docs/HelloAssoApiV5ModelsApiNotificationsApiUrlNotificationModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsApiNotificationsPostApiUrlNotificationBody](docs/HelloAssoApiV5ModelsApiNotificationsPostApiUrlNotificationBody.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsCartsCheckoutIntentResponse](docs/HelloAssoApiV5ModelsCartsCheckoutIntentResponse.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsCartsCheckoutPayer](docs/HelloAssoApiV5ModelsCartsCheckoutPayer.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsCartsCheckoutTerm](docs/HelloAssoApiV5ModelsCartsCheckoutTerm.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsCartsInitCheckoutBody](docs/HelloAssoApiV5ModelsCartsInitCheckoutBody.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsCartsInitCheckoutResponse](docs/HelloAssoApiV5ModelsCartsInitCheckoutResponse.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsCommonContactModel](docs/HelloAssoApiV5ModelsCommonContactModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsCommonDocumentModel](docs/HelloAssoApiV5ModelsCommonDocumentModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsCommonMetaModel](docs/HelloAssoApiV5ModelsCommonMetaModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsCommonPaginationModel](docs/HelloAssoApiV5ModelsCommonPaginationModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsCommonPlaceModel](docs/HelloAssoApiV5ModelsCommonPlaceModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel](docs/HelloAssoApiV5ModelsDirectoryDirectoryOrganizationPublicModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsDirectoryListFormsRequest](docs/HelloAssoApiV5ModelsDirectoryListFormsRequest.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsDirectoryListOrganizationsRequest](docs/HelloAssoApiV5ModelsDirectoryListOrganizationsRequest.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel](docs/HelloAssoApiV5ModelsDirectoryPartnerOrganizationModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsDirectorySynchronizableFormModel](docs/HelloAssoApiV5ModelsDirectorySynchronizableFormModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsDirectorySynchronizableOrganizationModel](docs/HelloAssoApiV5ModelsDirectorySynchronizableOrganizationModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsFieldType](docs/HelloAssoApiV5ModelsEnumsFieldType.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsFormState](docs/HelloAssoApiV5ModelsEnumsFormState.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsFormType](docs/HelloAssoApiV5ModelsEnumsFormType.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsItemState](docs/HelloAssoApiV5ModelsEnumsItemState.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsMembershipValidityType](docs/HelloAssoApiV5ModelsEnumsMembershipValidityType.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsOperationState](docs/HelloAssoApiV5ModelsEnumsOperationState.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsOrganizationType](docs/HelloAssoApiV5ModelsEnumsOrganizationType.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsPaymentCashOutState](docs/HelloAssoApiV5ModelsEnumsPaymentCashOutState.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsPaymentFrequencyType](docs/HelloAssoApiV5ModelsEnumsPaymentFrequencyType.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsPaymentMeans](docs/HelloAssoApiV5ModelsEnumsPaymentMeans.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsPaymentProviderType](docs/HelloAssoApiV5ModelsEnumsPaymentProviderType.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsPaymentState](docs/HelloAssoApiV5ModelsEnumsPaymentState.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsPaymentType](docs/HelloAssoApiV5ModelsEnumsPaymentType.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsPriceCategory](docs/HelloAssoApiV5ModelsEnumsPriceCategory.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsRecordActionType](docs/HelloAssoApiV5ModelsEnumsRecordActionType.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsSortField](docs/HelloAssoApiV5ModelsEnumsSortField.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsSortOrder](docs/HelloAssoApiV5ModelsEnumsSortOrder.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsTagType](docs/HelloAssoApiV5ModelsEnumsTagType.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsEnumsTierType](docs/HelloAssoApiV5ModelsEnumsTierType.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsFormsFormBasicModel](docs/HelloAssoApiV5ModelsFormsFormBasicModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsFormsFormLightModel](docs/HelloAssoApiV5ModelsFormsFormLightModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsFormsFormPublicModel](docs/HelloAssoApiV5ModelsFormsFormPublicModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsFormsFormQuickCreateModel](docs/HelloAssoApiV5ModelsFormsFormQuickCreateModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsFormsFormQuickCreateRequest](docs/HelloAssoApiV5ModelsFormsFormQuickCreateRequest.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsFormsTermModel](docs/HelloAssoApiV5ModelsFormsTermModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsFormsTierLightModel](docs/HelloAssoApiV5ModelsFormsTierLightModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsFormsTierPublicModel](docs/HelloAssoApiV5ModelsFormsTierPublicModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsOrganizationLegalInformationsOrganizationLegalStructuresModel](docs/HelloAssoApiV5ModelsOrganizationLegalInformationsOrganizationLegalStructuresModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationLegalInformationConfigurationBody](docs/HelloAssoApiV5ModelsOrganizationLegalInformationsUpdateOrganizationLegalInformationConfigurationBody.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsOrganizationOrganizationBasicModel](docs/HelloAssoApiV5ModelsOrganizationOrganizationBasicModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsOrganizationOrganizationLightModel](docs/HelloAssoApiV5ModelsOrganizationOrganizationLightModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsOrganizationOrganizationModel](docs/HelloAssoApiV5ModelsOrganizationOrganizationModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsPartnerStatisticsModel](docs/HelloAssoApiV5ModelsPartnerStatisticsModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsPartnersPartnerPublicModel](docs/HelloAssoApiV5ModelsPartnersPartnerPublicModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsPaymentPublicPaymentModel](docs/HelloAssoApiV5ModelsPaymentPublicPaymentModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsPaymentRefundOperationModel](docs/HelloAssoApiV5ModelsPaymentRefundOperationModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsItem](docs/HelloAssoApiV5ModelsStatisticsItem.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsItemCustomField](docs/HelloAssoApiV5ModelsStatisticsItemCustomField.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsItemDetail](docs/HelloAssoApiV5ModelsStatisticsItemDetail.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsItemDiscount](docs/HelloAssoApiV5ModelsStatisticsItemDiscount.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsItemOption](docs/HelloAssoApiV5ModelsStatisticsItemOption.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsItemPayment](docs/HelloAssoApiV5ModelsStatisticsItemPayment.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsOrder](docs/HelloAssoApiV5ModelsStatisticsOrder.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsOrderAmountModel](docs/HelloAssoApiV5ModelsStatisticsOrderAmountModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsOrderDetail](docs/HelloAssoApiV5ModelsStatisticsOrderDetail.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsOrderItem](docs/HelloAssoApiV5ModelsStatisticsOrderItem.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsOrderLight](docs/HelloAssoApiV5ModelsStatisticsOrderLight.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsOrderPayment](docs/HelloAssoApiV5ModelsStatisticsOrderPayment.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsPayer](docs/HelloAssoApiV5ModelsStatisticsPayer.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsPayment](docs/HelloAssoApiV5ModelsStatisticsPayment.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsPaymentDetail](docs/HelloAssoApiV5ModelsStatisticsPaymentDetail.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsPaymentItem](docs/HelloAssoApiV5ModelsStatisticsPaymentItem.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsRefundOperationLightModel](docs/HelloAssoApiV5ModelsStatisticsRefundOperationLightModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsShareItem](docs/HelloAssoApiV5ModelsStatisticsShareItem.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsSharePayment](docs/HelloAssoApiV5ModelsStatisticsSharePayment.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsStatisticsUser](docs/HelloAssoApiV5ModelsStatisticsUser.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsTagsInternalTagModel](docs/HelloAssoApiV5ModelsTagsInternalTagModel.md)
 - [HelloAssoApi.HelloAssoApiV5ModelsTagsPublicTagModel](docs/HelloAssoApiV5ModelsTagsPublicTagModel.md)
 - [HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsFiscalReceiptFormatOptionModel](docs/HelloAssoModelsAccountsOrganizationLegalInformationsFiscalReceiptFormatOptionModel.md)
 - [HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsFiscalReceiptSignatoryModel](docs/HelloAssoModelsAccountsOrganizationLegalInformationsFiscalReceiptSignatoryModel.md)
 - [HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationFiscalReceiptOptionsConfiguration](docs/HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationFiscalReceiptOptionsConfiguration.md)
 - [HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationLegalInformationConfiguration](docs/HelloAssoModelsAccountsOrganizationLegalInformationsOrganizationLegalInformationConfiguration.md)
 - [HelloAssoApi.HelloAssoModelsAccountsOrganizationLegalInformationsTaxInformationText](docs/HelloAssoModelsAccountsOrganizationLegalInformationsTaxInformationText.md)
 - [HelloAssoApi.HelloAssoModelsComplianceV2CommonAddressAddressModelSnapshot](docs/HelloAssoModelsComplianceV2CommonAddressAddressModelSnapshot.md)
 - [HelloAssoApi.HelloAssoModelsEnumsGlobalRole](docs/HelloAssoModelsEnumsGlobalRole.md)
 - [HelloAssoApi.HelloAssoModelsSharedGeoLocation](docs/HelloAssoModelsSharedGeoLocation.md)
 - [HelloAssoApi.ResultsWithPaginationModelFormLightModel](docs/ResultsWithPaginationModelFormLightModel.md)
 - [HelloAssoApi.ResultsWithPaginationModelItem](docs/ResultsWithPaginationModelItem.md)
 - [HelloAssoApi.ResultsWithPaginationModelOrder](docs/ResultsWithPaginationModelOrder.md)
 - [HelloAssoApi.ResultsWithPaginationModelPartnerOrganizationModel](docs/ResultsWithPaginationModelPartnerOrganizationModel.md)
 - [HelloAssoApi.ResultsWithPaginationModelPayment](docs/ResultsWithPaginationModelPayment.md)
 - [HelloAssoApi.ResultsWithPaginationModelPublicPaymentModel](docs/ResultsWithPaginationModelPublicPaymentModel.md)
 - [HelloAssoApi.ResultsWithPaginationModelSynchronizableFormModel](docs/ResultsWithPaginationModelSynchronizableFormModel.md)
 - [HelloAssoApi.ResultsWithPaginationModelSynchronizableOrganizationModel](docs/ResultsWithPaginationModelSynchronizableOrganizationModel.md)


## Authorization


We use OAuth2 for authentication, so to avoid reinventing the wheel, we recommend using the [simple-oauth2](https://www.npmjs.com/package/simple-oauth2) package

### Prerequisite
Install the simple-oauth2 package:

```bash
npm i simple-oauth2
```

### Client Credentials Flow
```javascript
const { ClientCredentials } = require('simple-oauth2');

// Create the client credentials instance
const client = new ClientCredentials({
  client: {
    id: 'your_client_id',
    secret: 'your_client_secret',
  },
  auth: {
    tokenHost: 'https://api.helloasso.com',
    tokenPath: '/oauth2/token',
  },
});

// Get an access token
async function getAccessToken() {
  try {
    const token = await client.getToken();
    console.log('Access Token:', token.token);
    return token.token;
  } catch (error) {
    console.error('Error getting access token:', error.message);
  }
}

// Usage
getAccessToken();
```

### Refresh Token Flow
```javascript
const { AuthorizationCode } = require('simple-oauth2');

// Create the authorization code instance
const client = new AuthorizationCode({
  client: {
    id: 'your_client_id',
    secret: 'your_client_secret',
  },
  auth: {
    tokenHost: 'https://api.helloasso.com',
    tokenPath: '/oauth2/token',
  },
});

// Refresh the token
async function refreshAccessToken(refreshToken) {
  try {
    const tokenObject = client.createToken({ refresh_token: refreshToken });
    const newToken = await tokenObject.refresh();
    console.log('New Access Token:', newToken.token);
    return newToken.token;
  } catch (error) {
    console.error('Error refreshing token:', error.message);
  }
}

// Usage
refreshAccessToken('your_refresh_token');
```

### Authorization Code Flow
```javascript
const { AuthorizationCode } = require('simple-oauth2');
const crypto = require('crypto');

// Create the authorization code instance
const authorisationClient = new AuthorizationCode({
  client: {
    id: 'your_client_id',
    secret: 'your_client_secret',
  },
  auth: {
    tokenHost: 'https://auth.helloasso-sandbox.com/',
    authorizePath: '/authorize',
  },
});

const tokenClient = new AuthorizationCode({
  client: {
    id: 'your_client_id',
    secret: 'your_client_secret',
  },
  auth: {
    tokenHost: 'https://api.helloasso-sandbox.com/',
    tokenPath: '/oauth2/token'
  },
});

// Generate a Code Verifier and Code Challenge
function generatePKCE() {
  const codeVerifier = crypto.randomBytes(32).toString('hex'); // Create a random string
  const codeChallenge = crypto
    .createHash('sha256')
    .update(codeVerifier)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, ''); // Base64 URL encode

  return { codeVerifier, codeChallenge };
}

// Step 1: Generate the authorization URL
function getAuthorizationUrl() {
  const { codeVerifier, codeChallenge } = generatePKCE();
  const authorizationUri = client.authorizeURL({
    redirect_uri: 'https://your-app.com/callback',
    scope: 'your_scope',
    state: 'random_state_string',
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
  });

  console.log('Authorization URL:', authorizationUri);
  console.log('Code verifier:', codeVerifier);

  // Save the codeVerifier for later (e.g., in session or database)
  return { authorizationUri, codeVerifier };
}

// Step 2: Exchange the authorization code for an access token
async function getAccessTokenFromCode(authorizationCode, codeVerifier) {
  try {
    const token = await tokenClient.getToken({
      code: authorizationCode,
      redirect_uri: 'https://your-app.com/callback',
      code_verifier: codeVerifier
    });
    console.log('Access Token:', token.token);
    return token.token;
  } catch (error) {
    console.error('Error getting access token:', error.message);
  }
}

// Usage
const { authorizationUri, codeVerifier } = getAuthorizationUrl();
// After user authorizes, exchange the code (passed in the redirect URL callback)
// getAccessTokenFromCode('your_authorization_code', codeVerifier);
```

## About this package

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- Generator version: 7.10.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen