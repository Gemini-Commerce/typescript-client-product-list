/**
 * product-list/bulk_update_product_list_associations.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ProductlistLocalizedText } from '../models/ProductlistLocalizedText';
import { ProtobufAny } from '../models/ProtobufAny';
import { HttpFile } from '../http/http';

export class ProductlistUpdateProductListRequest {
    'tenantId'?: string;
    'id'?: string;
    'urlKey'?: ProductlistLocalizedText;
    'attributes'?: { [key: string]: ProtobufAny; };
    'attributesMask'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "urlKey",
            "baseName": "urlKey",
            "type": "ProductlistLocalizedText",
            "format": ""
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: ProtobufAny; }",
            "format": ""
        },
        {
            "name": "attributesMask",
            "baseName": "attributesMask",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductlistUpdateProductListRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

