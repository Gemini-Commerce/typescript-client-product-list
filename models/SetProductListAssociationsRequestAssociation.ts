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

export class SetProductListAssociationsRequestAssociation {
    'listId'?: string;
    'position'?: number;
    'productGrn'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "listId",
            "baseName": "listId",
            "type": "string",
            "format": ""
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "productGrn",
            "baseName": "productGrn",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SetProductListAssociationsRequestAssociation.attributeTypeMap;
    }

    public constructor() {
    }
}

