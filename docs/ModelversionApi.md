# MintApi.ModelversionApi

All URIs are relative to *https://api.models.mint.isi.edu/v0.0.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createModelVersion**](ModelversionApi.md#createModelVersion) | **POST** /modelversions | Create a ModelVersion
[**deleteModelVersion**](ModelversionApi.md#deleteModelVersion) | **DELETE** /modelversion/{id} | Delete a ModelVersion
[**getModelVersion**](ModelversionApi.md#getModelVersion) | **GET** /modelversion/{id} | Get a ModelVersion
[**getModelVersions**](ModelversionApi.md#getModelVersions) | **GET** /modelversions | List All ModelVersions
[**updateModelVersion**](ModelversionApi.md#updateModelVersion) | **PUT** /modelversion/{id} | Update a ModelVersion



## createModelVersion

> createModelVersion(modelVersion)

Create a ModelVersion

Creates a new instance of a &#x60;ModelVersion&#x60;.

### Example

```javascript
import MintApi from 'mint-api';
let defaultClient = MintApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MintApi.ModelversionApi();
let modelVersion = new MintApi.ModelVersion(); // ModelVersion | A new `ModelVersion` to be created.
apiInstance.createModelVersion(modelVersion, (error, data, response) => {
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
 **modelVersion** | [**ModelVersion**](ModelVersion.md)| A new &#x60;ModelVersion&#x60; to be created. | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deleteModelVersion

> deleteModelVersion(id)

Delete a ModelVersion

Deletes an existing &#x60;ModelVersion&#x60;.

### Example

```javascript
import MintApi from 'mint-api';

let apiInstance = new MintApi.ModelversionApi();
let id = "id_example"; // String | A unique identifier for a `ModelVersion`.
apiInstance.deleteModelVersion(id, (error, data, response) => {
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
 **id** | **String**| A unique identifier for a &#x60;ModelVersion&#x60;. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getModelVersion

> ModelVersion getModelVersion(id, opts)

Get a ModelVersion

Gets the details of a single instance of a &#x60;ModelVersion&#x60;.

### Example

```javascript
import MintApi from 'mint-api';

let apiInstance = new MintApi.ModelversionApi();
let id = "id_example"; // String | A unique identifier for a `ModelVersion`.
let opts = {
  'username': "username_example" // String | To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
};
apiInstance.getModelVersion(id, opts, (error, data, response) => {
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
 **id** | **String**| A unique identifier for a &#x60;ModelVersion&#x60;. | 
 **username** | **String**| To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username | [optional] 

### Return type

[**ModelVersion**](ModelVersion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModelVersions

> [ModelVersion] getModelVersions(opts)

List All ModelVersions

Gets a list of all &#x60;ModelVersion&#x60; entities.

### Example

```javascript
import MintApi from 'mint-api';

let apiInstance = new MintApi.ModelversionApi();
let opts = {
  'username': "username_example" // String | To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
};
apiInstance.getModelVersions(opts, (error, data, response) => {
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

[**[ModelVersion]**](ModelVersion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateModelVersion

> updateModelVersion(id, modelVersion)

Update a ModelVersion

Updates an existing &#x60;ModelVersion&#x60;.

### Example

```javascript
import MintApi from 'mint-api';
let defaultClient = MintApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MintApi.ModelversionApi();
let id = "id_example"; // String | A unique identifier for a `ModelVersion`.
let modelVersion = new MintApi.ModelVersion(); // ModelVersion | Updated `ModelVersion` information.
apiInstance.updateModelVersion(id, modelVersion, (error, data, response) => {
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
 **id** | **String**| A unique identifier for a &#x60;ModelVersion&#x60;. | 
 **modelVersion** | [**ModelVersion**](ModelVersion.md)| Updated &#x60;ModelVersion&#x60; information. | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

