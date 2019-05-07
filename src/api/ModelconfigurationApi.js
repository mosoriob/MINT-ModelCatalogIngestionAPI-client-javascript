/**
 * Model Catalog
 * This is MINT Model Catalog You can find out more about     Model Catalog at [https://w3id.org/mint/modelCatalog/](https://w3id.org/mint/modelCatalog/)
 *
 * OpenAPI spec version: 0.0.2
 * Contact: mosorio@isi.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiResponse from '../model/ApiResponse';
import DatasetSpecification from '../model/DatasetSpecification';
import ModelConfiguration from '../model/ModelConfiguration';
import Parameter from '../model/Parameter';

/**
* Modelconfiguration service.
* @module api/ModelconfigurationApi
* @version 0.0.2
*/
export default class ModelconfigurationApi {

    /**
    * Constructs a new ModelconfigurationApi. 
    * @alias module:api/ModelconfigurationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createInputsByModelconfiguration operation.
     * @callback module:api/ModelconfigurationApi~createInputsByModelconfigurationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new instance of a `DatasetSpecification` related as Input.
     * @param {String} id 
     * @param {Array.<DatasetSpecification>} datasetSpecification 
     * @param {module:api/ModelconfigurationApi~createInputsByModelconfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createInputsByModelconfiguration(id, datasetSpecification, callback) {
      let postBody = datasetSpecification;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createInputsByModelconfiguration");
      }
      // verify the required parameter 'datasetSpecification' is set
      if (datasetSpecification === undefined || datasetSpecification === null) {
        throw new Error("Missing the required parameter 'datasetSpecification' when calling createInputsByModelconfiguration");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/modelconfiguration/{id}/inputs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createModelConfiguration operation.
     * @callback module:api/ModelconfigurationApi~createModelConfigurationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a model configuration
     * @param {module:model/ModelConfiguration} modelConfiguration 
     * @param {module:api/ModelconfigurationApi~createModelConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createModelConfiguration(modelConfiguration, callback) {
      let postBody = modelConfiguration;
      // verify the required parameter 'modelConfiguration' is set
      if (modelConfiguration === undefined || modelConfiguration === null) {
        throw new Error("Missing the required parameter 'modelConfiguration' when calling createModelConfiguration");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/modelconfigurations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createOutputsByModelconfiguration operation.
     * @callback module:api/ModelconfigurationApi~createOutputsByModelconfigurationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create the output of a model configuration
     * @param {String} id 
     * @param {Array.<DatasetSpecification>} datasetSpecification 
     * @param {module:api/ModelconfigurationApi~createOutputsByModelconfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createOutputsByModelconfiguration(id, datasetSpecification, callback) {
      let postBody = datasetSpecification;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createOutputsByModelconfiguration");
      }
      // verify the required parameter 'datasetSpecification' is set
      if (datasetSpecification === undefined || datasetSpecification === null) {
        throw new Error("Missing the required parameter 'datasetSpecification' when calling createOutputsByModelconfiguration");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/modelconfiguration/{id}/outputs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createParametersByModelconfiguration operation.
     * @callback module:api/ModelconfigurationApi~createParametersByModelconfigurationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create the inputs of a model configuration
     * Creates a new instance of a `DatasetSpecification` and it related with the `ModelConfiguration`.
     * @param {String} id 
     * @param {Array.<Parameter>} parameter 
     * @param {module:api/ModelconfigurationApi~createParametersByModelconfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    createParametersByModelconfiguration(id, parameter, callback) {
      let postBody = parameter;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createParametersByModelconfiguration");
      }
      // verify the required parameter 'parameter' is set
      if (parameter === undefined || parameter === null) {
        throw new Error("Missing the required parameter 'parameter' when calling createParametersByModelconfiguration");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/modelconfiguration/{id}/parameters', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteModelConfiguration operation.
     * @callback module:api/ModelconfigurationApi~deleteModelConfigurationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a ModelConfiguration
     * Deletes an existing `ModelConfiguration`.
     * @param {String} id A unique identifier for a `ModelConfiguration`.
     * @param {module:api/ModelconfigurationApi~deleteModelConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteModelConfiguration(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteModelConfiguration");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/modelconfiguration/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getInputsByModelconfiguration operation.
     * @callback module:api/ModelconfigurationApi~getInputsByModelconfigurationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DatasetSpecification>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the inputs of a model configuration
     * @param {String} id The name of the resource 
     * @param {Object} opts Optional parameters
     * @param {String} opts.username To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
     * @param {module:api/ModelconfigurationApi~getInputsByModelconfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DatasetSpecification>}
     */
    getInputsByModelconfiguration(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getInputsByModelconfiguration");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'username': opts['username']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DatasetSpecification];
      return this.apiClient.callApi(
        '/modelconfiguration/{id}/inputs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getModelConfigurations operation.
     * @callback module:api/ModelconfigurationApi~getModelConfigurationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ModelConfiguration>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List modelconfiguration
     * @param {Object} opts Optional parameters
     * @param {String} opts.username To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
     * @param {module:api/ModelconfigurationApi~getModelConfigurationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ModelConfiguration>}
     */
    getModelConfigurations(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'username': opts['username']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ModelConfiguration];
      return this.apiClient.callApi(
        '/modelconfigurations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getModelConfiguraton operation.
     * @callback module:api/ModelconfigurationApi~getModelConfiguratonCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get modelconfiguration
     * Gets the details of a single instance of a `ModelConfiguration`.
     * @param {String} id A unique identifier for a `ModelConfiguration`.
     * @param {Object} opts Optional parameters
     * @param {String} opts.username To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
     * @param {module:api/ModelconfigurationApi~getModelConfiguratonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ModelConfiguration}
     */
    getModelConfiguraton(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getModelConfiguraton");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'username': opts['username']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ModelConfiguration;
      return this.apiClient.callApi(
        '/modelconfiguration/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getOutputsByModelconfiguration operation.
     * @callback module:api/ModelconfigurationApi~getOutputsByModelconfigurationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DatasetSpecification>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the outputs of a model configuration
     * @param {String} id The name of the resource 
     * @param {Object} opts Optional parameters
     * @param {String} opts.username To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
     * @param {module:api/ModelconfigurationApi~getOutputsByModelconfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DatasetSpecification>}
     */
    getOutputsByModelconfiguration(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOutputsByModelconfiguration");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'username': opts['username']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DatasetSpecification];
      return this.apiClient.callApi(
        '/modelconfiguration/{id}/outputs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getParametersByModelconfiguration operation.
     * @callback module:api/ModelconfigurationApi~getParametersByModelconfigurationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Parameter>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the parameters of a model configuration
     * @param {String} id The name of the resource 
     * @param {Object} opts Optional parameters
     * @param {String} opts.username To obtain the results maintained by the MINT project, you must not set up the variable. If you want the results of a user, you must set up the variable with the username
     * @param {module:api/ModelconfigurationApi~getParametersByModelconfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Parameter>}
     */
    getParametersByModelconfiguration(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getParametersByModelconfiguration");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'username': opts['username']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Parameter];
      return this.apiClient.callApi(
        '/modelconfiguration/{id}/parameters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateModelConfiguration operation.
     * @callback module:api/ModelconfigurationApi~updateModelConfigurationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update model configuration
     * @param {String} id A unique identifier for a `ModelConfiguration`.
     * @param {module:model/ModelConfiguration} modelConfiguration 
     * @param {module:api/ModelconfigurationApi~updateModelConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateModelConfiguration(id, modelConfiguration, callback) {
      let postBody = modelConfiguration;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateModelConfiguration");
      }
      // verify the required parameter 'modelConfiguration' is set
      if (modelConfiguration === undefined || modelConfiguration === null) {
        throw new Error("Missing the required parameter 'modelConfiguration' when calling updateModelConfiguration");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/modelconfiguration/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}