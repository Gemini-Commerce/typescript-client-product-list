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
 * @interface ProductlistListProductListAssociationsRequest
 */
export interface ProductlistListProductListAssociationsRequest {
    /**
     * 
     * @type {string}
     * @memberof ProductlistListProductListAssociationsRequest
     */
    'tenantId'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductlistListProductListAssociationsRequest
     */
    'listId'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductlistListProductListAssociationsRequest
     */
    'productGrn'?: string;
    /**
     * 
     * @type {number}
     * @memberof ProductlistListProductListAssociationsRequest
     */
    'pageSize'?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductlistListProductListAssociationsRequest
     */
    'pageToken'?: string;
    /**
     * 
     * @type {Array<ProductlistOrderBy>}
     * @memberof ProductlistListProductListAssociationsRequest
     */
    'orderBy'?: Array<ProductlistOrderBy>;
}