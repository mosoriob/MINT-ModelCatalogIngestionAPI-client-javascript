# MintApi.ModelconfigurationApi

All URIs are relative to *https://api.models.mint.isi.edu/v0.0.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInputsByModelconfiguration**](ModelconfigurationApi.md#createInputsByModelconfiguration) | **POST** /modelconfiguration/{id}/inputs | Creates a new instance of a &#x60;DatasetSpecification&#x60; related as Input.
[**createModelConfiguration**](ModelconfigurationApi.md#createModelConfiguration) | **POST** /modelconfigurations | Create a model configuration
[**createOutputsByModelconfiguration**](ModelconfigurationApi.md#createOutputsByModelconfiguration) | **POST** /modelconfiguration/{id}/outputs | Create the output of a model configuration
[**createParametersByModelconfiguration**](ModelconfigurationApi.md#createParametersByModelconfiguration) | **POST** /modelconfiguration/{id}/parameters | Create the inputs of a model configuration
[**deleteModelConfiguration**](ModelconfigurationApi.md#deleteModelConfiguration) | **DELETE** /modelconfiguration/{id} | Delete a ModelConfiguration
[**getInputsByModelconfiguration**](ModelconfigurationApi.md#getInputsByModelconfiguration) | **GET** /modelconfiguration/{id}/inputs | Get the inputs of a model configuration
[**getModelConfigurations**](ModelconfigurationApi.md#getModelConfigurations) | **GET** /modelconfigurations | List modelconfiguration
[**getModelConfiguraton**](ModelconfigurationApi.md#getModelConfiguraton) | **GET** /modelconfiguration/{id} | Get modelconfiguration
[**getOutputsByModelconfiguration**](ModelconfigurationApi.md#getOutputsByModelconfiguration) | **GET** /modelconfiguration/{id}/outputs | Get the outputs of a model configuration
[**getParametersByModelconfiguration**](ModelconfigurationApi.md#getParametersByModelconfiguration) | **GET** /modelconfiguration/{id}/parameters | Get the parameters of a model configuration
[**updateModelConfiguration**](ModelconfigurationApi.md#updateModelConfiguration) | **PUT** /modelconfiguration/{id} | Update model configuration



## createInputsByModelconfiguration

> createInputsByModelconfiguration(id, datasetSpecification)

Creates a new instance of a &#x60;DatasetSpecification&#x60; related as Input.

### Example

```javascript
import MintApi from 'mint-api';
let defaultClient = MintApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MintApi.ModelconfigurationApi();
let id = "id_example"; // String | 
let datasetSpecification = [new MintApi.DatasetSpecification()]; // [DatasetSpecification] | 
apiInstance.createInputsByModelconfiguration(id, datasetSpecification, (error, data, response) => {
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
 **id** | **String**|  | 
 **datasetSpecification** | [**[DatasetSpecification]**](Array.md)|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createModelConfiguration

> createModelConfiguration(modelConfiguration)

Create a model configuration

### Example

```javascript
import MintApi from 'mint-api';
let defaultClient = MintApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MintApi.ModelconfigurationApi();
let modelConfiguration = new MintApi.ModelConfiguration(); // ModelConfiguration | 
apiInstance.createModelConfiguration(modelConfiguration, (error, data, response) => {
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
 **modelConfiguration** | [**ModelConfiguration**](ModelConfiguration.md)|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOutputsByModelconfiguration

> createOutputsByModelconfiguration(id, datasetSpecification)

Create the output of a model configuration

### Example

```javascript
import MintApi from 'mint-api';
let defaultClient = MintApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MintApi.ModelconfigurationApi();
let id = "id_example"; // String | 
let datasetSpecification = [new MintApi.DatasetSpecification()]; // [DatasetSpecification] | 
apiInstance.createOutputsByModelconfiguration(id, datasetSpecification, (error, data, response) => {
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
 **id** | **String**|  | 
 **datasetSpecification** | [**[DatasetSpecification]**](Array.md)|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createParametersByModelconfiguration

> createParametersByModelconfiguration(id, parameter)

Create the inputs of a model configuration

Creates a new instance of a &#x60;DatasetSpecification&#x60; and it related with the &#x60;ModelConfiguration&#x60;.

### Example

```javascript
import MintApi from 'mint-api';
let defaultClient = MintApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MintApi.ModelconfigurationApi();
let id = "id_example"; // String | 
let parameter = [new MintApi.Parameter()]; // [Parameter] | 
apiInstance.createParametersByModelconfiguration(id, parameter, (error, data, response) => {
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
 **id** | **String**|  | 
 **parameter** | [**[Parameter]**](Array.md)|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteModelConfiguration

> deleteModelConfiguration(id)

Delete a ModelConfiguration

Deletes an existing &#x60;ModelConfiguration&#x60;.

### Example

```javascript
import MintApi from 'mint-api';
let defaultClient = MintApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MintApi.ModelconfigurationApi();
let id = "id_example"; // String | A unique identifier for a `ModelConfiguration`.
apiInstance.deleteModelConfiguration(id, (error, data, response) => {
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
 **id** | **String**| A unique identifier for a &#x60;ModelConfiguration&#x60;. | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getInputsByModelconfiguration

> [DatasetSpecification] getInputsByModelconfiguration(id, opts)

Get the inputs of a model configuration

### Example

```javascript
import MintApi from 'mint-api';

let apiInstance = new MintApi.ModelconfigurationApi();
let id = "id_example"; // String | The name of the resource 
let opts = {
  'username': "username_example" // String | To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
};
apiInstance.getInputsByModelconfiguration(id, opts, (error, data, response) => {
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
 **id** | **String**| The name of the resource  | 
 **username** | **String**| To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username | [optional] 

### Return type

[**[DatasetSpecification]**](DatasetSpecification.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModelConfigurations

> [ModelConfiguration] getModelConfigurations(opts)

List modelconfiguration

### Example

```javascript
import MintApi from 'mint-api';

let apiInstance = new MintApi.ModelconfigurationApi();
let opts = {
  'username': "username_example" // String | To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
};
apiInstance.getModelConfigurations(opts, (error, data, response) => {
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

[**[ModelConfiguration]**](ModelConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getModelConfiguraton

> ModelConfiguration getModelConfiguraton(id, opts)

Get modelconfiguration

Gets the details of a single instance of a &#x60;ModelConfiguration&#x60;.

### Example

```javascript
import MintApi from 'mint-api';

let apiInstance = new MintApi.ModelconfigurationApi();
let id = "id_example"; // String | A unique identifier for a `ModelConfiguration`.
let opts = {
  'username': "username_example" // String | To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
};
apiInstance.getModelConfiguraton(id, opts, (error, data, response) => {
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
 **id** | **String**| A unique identifier for a &#x60;ModelConfiguration&#x60;. | 
 **username** | **String**| To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username | [optional] 

### Return type

[**ModelConfiguration**](ModelConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOutputsByModelconfiguration

> [DatasetSpecification] getOutputsByModelconfiguration(id, opts)

Get the outputs of a model configuration

### Example

```javascript
import MintApi from 'mint-api';

let apiInstance = new MintApi.ModelconfigurationApi();
let id = "id_example"; // String | The name of the resource 
let opts = {
  'username': "username_example" // String | To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
};
apiInstance.getOutputsByModelconfiguration(id, opts, (error, data, response) => {
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
 **id** | **String**| The name of the resource  | 
 **username** | **String**| To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username | [optional] 

### Return type

[**[DatasetSpecification]**](DatasetSpecification.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getParametersByModelconfiguration

> [Parameter] getParametersByModelconfiguration(id, opts)

Get the parameters of a model configuration

### Example

```javascript
import MintApi from 'mint-api';

let apiInstance = new MintApi.ModelconfigurationApi();
let id = "id_example"; // String | The name of the resource 
let opts = {
  'username': "username_example" // String | To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
};
apiInstance.getParametersByModelconfiguration(id, opts, (error, data, response) => {
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
 **id** | **String**| The name of the resource  | 
 **username** | **String**| To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username | [optional] 

### Return type

[**[Parameter]**](Parameter.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateModelConfiguration

> updateModelConfiguration(id, modelConfiguration)

Update model configuration

### Example

```javascript
import MintApi from 'mint-api';
let defaultClient = MintApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new MintApi.ModelconfigurationApi();
let id = "id_example"; // String | A unique identifier for a `ModelConfiguration`.
let modelConfiguration = new MintApi.ModelConfiguration(); // ModelConfiguration | 
apiInstance.updateModelConfiguration(id, modelConfiguration, (error, data, response) => {
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
 **id** | **String**| A unique identifier for a &#x60;ModelConfiguration&#x60;. | 
 **modelConfiguration** | [**ModelConfiguration**](ModelConfiguration.md)|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

