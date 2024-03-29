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

import { SetProductListAssociationsRequestAssociation } from '../models/SetProductListAssociationsRequestAssociation';
import { HttpFile } from '../http/http';

export class ProductlistSetProductListAssociationsRequest {
    'tenantId'?: string;
    'listId'?: string;
    'productGrn'?: string;
    'associations'?: Array<SetProductListAssociationsRequestAssociation>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "listId",
            "baseName": "listId",
            "type": "string",
            "format": ""
        },
        {
            "name": "productGrn",
            "baseName": "productGrn",
            "type": "string",
            "format": ""
        },
        {
            "name": "associations",
            "baseName": "associations",
            "type": "Array<SetProductListAssociationsRequestAssociation>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductlistSetProductListAssociationsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

