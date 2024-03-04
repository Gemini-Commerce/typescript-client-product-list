/**
 * Collection Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ProductlistGetProductListsCountResponse {
    'totalSize'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "totalSize",
            "baseName": "totalSize",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return ProductlistGetProductListsCountResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

