# MintApi.ParameterApi

All URIs are relative to *https://api.models.mint.isi.edu/v0.0.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createParameter**](ParameterApi.md#createParameter) | **POST** /parameters | Create a Parameter
[**getParameters**](ParameterApi.md#getParameters) | **GET** /parameters | List All Parameters



## createParameter

> createParameter(parameter)

Create a Parameter

Creates a new instance of a &#x60;Parameter&#x60;.

### Example

```javascript
import MintApi from 'mint-api';
let defaultClient = MintApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MintApi.ParameterApi();
let parameter = new MintApi.Parameter(); // Parameter | A new `Parameter` to be created.
apiInstance.createParameter(parameter, (error, data, response) => {
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
 **parameter** | [**Parameter**](Parameter.md)| A new &#x60;Parameter&#x60; to be created. | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## getParameters

> [Parameter] getParameters(opts)

List All Parameters

Gets a list of all &#x60;Parameter&#x60; entities.

### Example

```javascript
import MintApi from 'mint-api';

let apiInstance = new MintApi.ParameterApi();
let opts = {
  'username': "username_example" // String | To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
};
apiInstance.getParameters(opts, (error, data, response) => {
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
 **username** | **String**| To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username | [optional] 

### Return type

[**[Parameter]**](Parameter.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

