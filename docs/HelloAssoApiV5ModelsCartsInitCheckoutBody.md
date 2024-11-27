# HelloAssoApi.HelloAssoApiV5ModelsCartsInitCheckoutBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalAmount** | **Number** | Total amount, all taxes included, in cents (required)  Must be equal to the sum of the initial amount and subsequent terms | 
**initialAmount** | **Number** | The amount for the first term, all taxes included, in cents (required) | 
**itemName** | **String** | Item name (required)  A text describing what the user paid for (&#39;Renew license&#39;, &#39;3 tickets&#39;, donation, etc).  Will be displayed in the near future in the user space and in the organization back office | 
**backUrl** | **String** | Url followed by the contributor if he wants to return to its previous site | 
**errorUrl** | **String** | Url called in case of an error during the checkout process | 
**returnUrl** | **String** | Url called after the payment | 
**containsDonation** | **Boolean** | The sale (or a part of) is a donation | 
**terms** | [**[HelloAssoApiV5ModelsCartsCheckoutTerm]**](HelloAssoApiV5ModelsCartsCheckoutTerm.md) | The list of future terms (if applicable) | [optional] 
**payer** | [**HelloAssoApiV5ModelsCartsCheckoutPayer**](HelloAssoApiV5ModelsCartsCheckoutPayer.md) |  | [optional] 
**metadata** | **Object** | Metadata (optional)  Json object (max length : 20000) | [optional] 


