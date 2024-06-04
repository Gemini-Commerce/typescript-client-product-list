/**
 * Collection Service
 * API for managing collection
 *
 * OpenAPI spec version: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ProductlistProductListEntity } from '../models/ProductlistProductListEntity';
import { ProductlistProductListError } from '../models/ProductlistProductListError';
import { HttpFile } from '../http/http';

export class ProductlistUpdateProductListResponse {
    'list'?: ProductlistProductListEntity;
    'errors'?: Array<ProductlistProductListError>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "list",
            "baseName": "list",
            "type": "ProductlistProductListEntity",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ProductlistProductListError>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductlistUpdateProductListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

