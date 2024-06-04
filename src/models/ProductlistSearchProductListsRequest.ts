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
 * @interface ProductlistSearchProductListsRequest
 */
export interface ProductlistSearchProductListsRequest {
    /**
     * 
     * @type {string}
     * @memberof ProductlistSearchProductListsRequest
     */
    'tenantId'?: string;
    /**
     * 
     * @type {SearchProductListsRequestQuery}
     * @memberof ProductlistSearchProductListsRequest
     */
    'query'?: SearchProductListsRequestQuery;
    /**
     * 
     * @type {number}
     * @memberof ProductlistSearchProductListsRequest
     */
    'pageSize'?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductlistSearchProductListsRequest
     */
    'pageNumber'?: number;
}