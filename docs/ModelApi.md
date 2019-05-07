# MintApi.ModelApi

All URIs are relative to *https://api.models.mint.isi.edu/v0.0.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createModel**](ModelApi.md#createModel) | **POST** /models | Create a model
[**deleteModel**](ModelApi.md#deleteModel) | **DELETE** /model/{id} | Delete a Model
[**getModel**](ModelApi.md#getModel) | **GET** /model/{id} | Get a Model
[**getModels**](ModelApi.md#getModels) | **GET** /models | List All models
[**updateModel**](ModelApi.md#updateModel) | **PUT** /model/{id} | Update a Model



## createModel

> createModel(model)

Create a model

Creates a new instance of a &#x60;model&#x60;.

### Example

```javascript
import MintApi from 'mint-api';
let defaultClient = MintApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MintApi.ModelApi();
let model = new MintApi.Model(); // Model | A new `model` to be created.
apiInstance.createModel(model, (error, data, response) => {
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
 **model** | [**Model**](Model.md)| A new &#x60;model&#x60; to be created. | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deleteModel

> deleteModel(id)

Delete a Model

Deletes an existing &#x60;Model&#x60;.

### Example

```javascript
import MintApi from 'mint-api';
let defaultClient = MintApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MintApi.ModelApi();
let id = "id_example"; // String | A unique identifier for a `Model`.
apiInstance.deleteModel(id, (error, data, response) => {
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
 **id** | **String**| A unique identifier for a &#x60;Model&#x60;. | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getModel

> Model getModel(id, opts)

Get a Model

Gets the details of a single instance of a &#x60;Model&#x60;.

### Example

```javascript
import MintApi from 'mint-api';

let apiInstance = new MintApi.ModelApi();
let id = "id_example"; // String | A unique identifier for a `Model`.
let opts = {
  'username': "username_example" // String | To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
};
apiInstance.getModel(id, opts, (error, data, response) => {
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
 **id** | **String**| A unique identifier for a &#x60;Model&#x60;. | 
 **username** | **String**| To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username | [optional] 

### Return type

[**Model**](Model.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModels

> [Model] getModels(opts)

List All models

Gets a list of all &#x60;model&#x60; entities.

### Example

```javascript
import MintApi from 'mint-api';

let apiInstance = new MintApi.ModelApi();
let opts = {
  'username': "username_example" // String | To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
};
apiInstance.getModels(opts, (error, data, response) => {
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

[**[Model]**](Model.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateModel

> updateModel(id, model)

Update a Model

Updates an existing &#x60;Model&#x60;.

### Example

```javascript
import MintApi from 'mint-api';
let defaultClient = MintApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MintApi.ModelApi();
let id = "id_example"; // String | A unique identifier for a `Model`.
let model = new MintApi.Model(); // Model | Updated `Model` information.
apiInstance.updateModel(id, model, (error, data, response) => {
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
 **id** | **String**| A unique identifier for a &#x60;Model&#x60;. | 
 **model** | [**Model**](Model.md)| Updated &#x60;Model&#x60; information. | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

