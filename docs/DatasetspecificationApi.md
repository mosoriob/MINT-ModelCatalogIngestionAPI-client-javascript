# MintApi.DatasetspecificationApi

All URIs are relative to *https://api.models.mint.isi.edu/v0.0.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDataSet**](DatasetspecificationApi.md#createDataSet) | **POST** /datasetspecifications | Create a datasetspecification
[**getDataSets**](DatasetspecificationApi.md#getDataSets) | **GET** /datasetspecifications | List All datasetspecifications



## createDataSet

> createDataSet(datasetSpecification)

Create a datasetspecification

Creates a new instance of a &#x60;datasetspecification&#x60;.

### Example

```javascript
import MintApi from 'mint-api';
let defaultClient = MintApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MintApi.DatasetspecificationApi();
let datasetSpecification = new MintApi.DatasetSpecification(); // DatasetSpecification | A new `datasetspecification` to be created.
apiInstance.createDataSet(datasetSpecification, (error, data, response) => {
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
 **datasetSpecification** | [**DatasetSpecification**](DatasetSpecification.md)| A new &#x60;datasetspecification&#x60; to be created. | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## getDataSets

> [DatasetSpecification] getDataSets(opts)

List All datasetspecifications

Gets a list of all &#x60;datasetspecification&#x60; entities.

### Example

```javascript
import MintApi from 'mint-api';

let apiInstance = new MintApi.DatasetspecificationApi();
let opts = {
  'username': "username_example" // String | To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
};
apiInstance.getDataSets(opts, (error, data, response) => {
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

[**[DatasetSpecification]**](DatasetSpecification.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

