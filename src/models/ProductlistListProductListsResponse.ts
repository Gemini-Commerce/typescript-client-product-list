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
 * @interface ProductlistListProductListsResponse
 */
export interface ProductlistListProductListsResponse {
    /**
     * 
     * @type {Array<ProductlistProductListEntity>}
     * @memberof ProductlistListProductListsResponse
     */
    'lists'?: Array<ProductlistProductListEntity>;
    /**
     * 
     * @type {string}
     * @memberof ProductlistListProductListsResponse
     */
    'nextPageToken'?: string;
}