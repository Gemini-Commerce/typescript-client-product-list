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

import { ProductlistLocalizedText } from '../models/ProductlistLocalizedText';
import { ProtobufAny } from '../models/ProtobufAny';
import { HttpFile } from '../http/http';

export class ProductlistProductListEntity {
    'id'?: string;
    'code'?: string;
    'urlKey'?: ProductlistLocalizedText;
    'entityType'?: string;
    'entityCode'?: string;
    'createdAt'?: Date;
    'updatedAt'?: Date;
    'attributes'?: { [key: string]: ProtobufAny; };
    'countAssociations'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
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
            "name": "entityType",
            "baseName": "entityType",
            "type": "string",
            "format": ""
        },
        {
            "name": "entityCode",
            "baseName": "entityCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: ProtobufAny; }",
            "format": ""
        },
        {
            "name": "countAssociations",
            "baseName": "countAssociations",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return ProductlistProductListEntity.attributeTypeMap;
    }

    public constructor() {
    }
}
