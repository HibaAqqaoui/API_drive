/*
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.51
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The ServerUploadBody model module.
 * @module model/ServerUploadBody
 * @version 1.0.0
 */
export class ServerUploadBody {
  /**
   * Constructs a new <code>ServerUploadBody</code>.
   * @alias module:model/ServerUploadBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ServerUploadBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServerUploadBody} obj Optional instance to populate.
   * @return {module:model/ServerUploadBody} The populated <code>ServerUploadBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ServerUploadBody();
      if (data.hasOwnProperty('file'))
        obj.file = ApiClient.convertToType(data['file'], 'Blob');
    }
    return obj;
  }
}

/**
 * @member {Blob} file
 */
ServerUploadBody.prototype.file = undefined;
