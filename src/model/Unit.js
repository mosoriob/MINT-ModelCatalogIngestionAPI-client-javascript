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

import ApiClient from '../ApiClient';

/**
 * The Unit model module.
 * @module model/Unit
 * @version 0.0.2
 */
class Unit {
    /**
     * Constructs a new <code>Unit</code>.
     * @alias module:model/Unit
     * @param id {String} 
     */
    constructor(id) { 
        
        Unit.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>Unit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Unit} obj Optional instance to populate.
     * @return {module:model/Unit} The populated <code>Unit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Unit();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], ['String']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('ccut_hasPart')) {
                obj['ccut_hasPart'] = ApiClient.convertToType(data['ccut_hasPart'], ['String']);
            }
            if (data.hasOwnProperty('ccut_hasDimensionality')) {
                obj['ccut_hasDimensionality'] = ApiClient.convertToType(data['ccut_hasDimensionality'], ['String']);
            }
            if (data.hasOwnProperty('abbreviation')) {
                obj['abbreviation'] = ApiClient.convertToType(data['abbreviation'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Unit.prototype['id'] = undefined;

/**
 * @member {Array.<String>} type
 */
Unit.prototype['type'] = undefined;

/**
 * @member {String} description
 */
Unit.prototype['description'] = undefined;

/**
 * @member {String} label
 */
Unit.prototype['label'] = undefined;

/**
 * @member {Array.<String>} ccut_hasPart
 */
Unit.prototype['ccut_hasPart'] = undefined;

/**
 * @member {Array.<String>} ccut_hasDimensionality
 */
Unit.prototype['ccut_hasDimensionality'] = undefined;

/**
 * @member {Array.<String>} abbreviation
 */
Unit.prototype['abbreviation'] = undefined;






export default Unit;
