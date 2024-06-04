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

import { ProductlistBulkUpdateProductListAssociationsRequestProductListAssociation } from '../models/ProductlistBulkUpdateProductListAssociationsRequestProductListAssociation';
import { HttpFile } from '../http/http';

export class ProductlistBulkUpdateProductListAssociationsRequest {
    'tenantId'?: string;
    'productListAssociations'?: Array<ProductlistBulkUpdateProductListAssociationsRequestProductListAssociation>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "productListAssociations",
            "baseName": "productListAssociations",
            "type": "Array<ProductlistBulkUpdateProductListAssociationsRequestProductListAssociation>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductlistBulkUpdateProductListAssociationsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
