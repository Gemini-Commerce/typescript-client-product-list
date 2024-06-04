/* tslint:disable */
/* eslint-disable */
/**
 * Collection Service
 * API for managing collection
 *
 * The version of the OpenAPI document: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @interface ProductlistProductListEntity
 */
export interface ProductlistProductListEntity {
    /**
     * 
     * @type {string}
     * @memberof ProductlistProductListEntity
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductlistProductListEntity
     */
    'code'?: string;
    /**
     * 
     * @type {ProductlistLocalizedText}
     * @memberof ProductlistProductListEntity
     */
    'urlKey'?: ProductlistLocalizedText;
    /**
     * 
     * @type {string}
     * @memberof ProductlistProductListEntity
     */
    'entityType'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductlistProductListEntity
     */
    'entityCode'?: string;
    /**
     * 
     * @type {Date}
     * @memberof ProductlistProductListEntity
     */
    'createdAt'?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ProductlistProductListEntity
     */
    'updatedAt'?: Date;
    /**
     * 
     * @type {{ [key: string]: ProtobufAny; }}
     * @memberof ProductlistProductListEntity
     */
    'attributes'?: { [key: string]: ProtobufAny; };
    /**
     * 
     * @type {number}
     * @memberof ProductlistProductListEntity
     */
    'countAssociations'?: number;
}