import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { OrderByDirection } from '../models/OrderByDirection';
import { ProductlistBulkUpdateProductListAssociationsRequest } from '../models/ProductlistBulkUpdateProductListAssociationsRequest';
import { ProductlistBulkUpdateProductListAssociationsRequestProductListAssociation } from '../models/ProductlistBulkUpdateProductListAssociationsRequestProductListAssociation';
import { ProductlistCreateProductListAssociationRequest } from '../models/ProductlistCreateProductListAssociationRequest';
import { ProductlistCreateProductListAssociationResponse } from '../models/ProductlistCreateProductListAssociationResponse';
import { ProductlistCreateProductListRequest } from '../models/ProductlistCreateProductListRequest';
import { ProductlistCreateProductListResponse } from '../models/ProductlistCreateProductListResponse';
import { ProductlistDeleteProductListAssociationRequest } from '../models/ProductlistDeleteProductListAssociationRequest';
import { ProductlistDeleteProductListAssociationResponse } from '../models/ProductlistDeleteProductListAssociationResponse';
import { ProductlistDeleteProductListRequest } from '../models/ProductlistDeleteProductListRequest';
import { ProductlistDeleteProductListResponse } from '../models/ProductlistDeleteProductListResponse';
import { ProductlistGetProductListAssociationsByProductGrnRequest } from '../models/ProductlistGetProductListAssociationsByProductGrnRequest';
import { ProductlistGetProductListAssociationsByProductGrnResponse } from '../models/ProductlistGetProductListAssociationsByProductGrnResponse';
import { ProductlistGetProductListByCodeRequest } from '../models/ProductlistGetProductListByCodeRequest';
import { ProductlistGetProductListByCodeResponse } from '../models/ProductlistGetProductListByCodeResponse';
import { ProductlistGetProductListByIdRequest } from '../models/ProductlistGetProductListByIdRequest';
import { ProductlistGetProductListByIdResponse } from '../models/ProductlistGetProductListByIdResponse';
import { ProductlistGetProductListByUrlKeyRequest } from '../models/ProductlistGetProductListByUrlKeyRequest';
import { ProductlistGetProductListByUrlKeyResponse } from '../models/ProductlistGetProductListByUrlKeyResponse';
import { ProductlistGetProductListsCountRequest } from '../models/ProductlistGetProductListsCountRequest';
import { ProductlistGetProductListsCountResponse } from '../models/ProductlistGetProductListsCountResponse';
import { ProductlistListProductListAssociationsRequest } from '../models/ProductlistListProductListAssociationsRequest';
import { ProductlistListProductListAssociationsResponse } from '../models/ProductlistListProductListAssociationsResponse';
import { ProductlistListProductListsRequest } from '../models/ProductlistListProductListsRequest';
import { ProductlistListProductListsResponse } from '../models/ProductlistListProductListsResponse';
import { ProductlistLocalizedText } from '../models/ProductlistLocalizedText';
import { ProductlistOrderBy } from '../models/ProductlistOrderBy';
import { ProductlistProductListAssociation } from '../models/ProductlistProductListAssociation';
import { ProductlistProductListAssociationError } from '../models/ProductlistProductListAssociationError';
import { ProductlistProductListEntity } from '../models/ProductlistProductListEntity';
import { ProductlistProductListError } from '../models/ProductlistProductListError';
import { ProductlistSearchProductListsByIdsRequest } from '../models/ProductlistSearchProductListsByIdsRequest';
import { ProductlistSearchProductListsByIdsResponse } from '../models/ProductlistSearchProductListsByIdsResponse';
import { ProductlistSearchProductListsRequest } from '../models/ProductlistSearchProductListsRequest';
import { ProductlistSearchProductListsResponse } from '../models/ProductlistSearchProductListsResponse';
import { ProductlistUpdateProductListRequest } from '../models/ProductlistUpdateProductListRequest';
import { ProductlistUpdateProductListResponse } from '../models/ProductlistUpdateProductListResponse';
import { ProtobufAny } from '../models/ProtobufAny';
import { RpcStatus } from '../models/RpcStatus';
import { SearchProductListsRequestQuery } from '../models/SearchProductListsRequestQuery';

import { ObservableProductListApi } from "./ObservableAPI";
import { ProductListApiRequestFactory, ProductListApiResponseProcessor} from "../apis/ProductListApi";

export interface ProductListApiBulkUpdateProductListAssociationsRequest {
    /**
     * 
     * @type ProductlistBulkUpdateProductListAssociationsRequest
     * @memberof ProductListApibulkUpdateProductListAssociations
     */
    body: ProductlistBulkUpdateProductListAssociationsRequest
}

export interface ProductListApiCreateProductListRequest {
    /**
     * 
     * @type ProductlistCreateProductListRequest
     * @memberof ProductListApicreateProductList
     */
    body: ProductlistCreateProductListRequest
}

export interface ProductListApiCreateProductListAssociationRequest {
    /**
     * 
     * @type ProductlistCreateProductListAssociationRequest
     * @memberof ProductListApicreateProductListAssociation
     */
    body: ProductlistCreateProductListAssociationRequest
}

export interface ProductListApiDeleteProductListRequest {
    /**
     * 
     * @type ProductlistDeleteProductListRequest
     * @memberof ProductListApideleteProductList
     */
    body: ProductlistDeleteProductListRequest
}

export interface ProductListApiDeleteProductListAssociationRequest {
    /**
     * 
     * @type ProductlistDeleteProductListAssociationRequest
     * @memberof ProductListApideleteProductListAssociation
     */
    body: ProductlistDeleteProductListAssociationRequest
}

export interface ProductListApiGetProductListAssociationsByProductGrnRequest {
    /**
     * 
     * @type ProductlistGetProductListAssociationsByProductGrnRequest
     * @memberof ProductListApigetProductListAssociationsByProductGrn
     */
    body: ProductlistGetProductListAssociationsByProductGrnRequest
}

export interface ProductListApiGetProductListByCodeRequest {
    /**
     * 
     * @type ProductlistGetProductListByCodeRequest
     * @memberof ProductListApigetProductListByCode
     */
    body: ProductlistGetProductListByCodeRequest
}

export interface ProductListApiGetProductListByIdRequest {
    /**
     * 
     * @type ProductlistGetProductListByIdRequest
     * @memberof ProductListApigetProductListById
     */
    body: ProductlistGetProductListByIdRequest
}

export interface ProductListApiGetProductListByUrlKeyRequest {
    /**
     * 
     * @type ProductlistGetProductListByUrlKeyRequest
     * @memberof ProductListApigetProductListByUrlKey
     */
    body: ProductlistGetProductListByUrlKeyRequest
}

export interface ProductListApiGetProductListsCountRequest {
    /**
     * 
     * @type ProductlistGetProductListsCountRequest
     * @memberof ProductListApigetProductListsCount
     */
    body: ProductlistGetProductListsCountRequest
}

export interface ProductListApiListProductListAssociationsRequest {
    /**
     * 
     * @type ProductlistListProductListAssociationsRequest
     * @memberof ProductListApilistProductListAssociations
     */
    body: ProductlistListProductListAssociationsRequest
}

export interface ProductListApiListProductListsRequest {
    /**
     * 
     * @type ProductlistListProductListsRequest
     * @memberof ProductListApilistProductLists
     */
    body: ProductlistListProductListsRequest
}

export interface ProductListApiSearchProductListsRequest {
    /**
     * 
     * @type ProductlistSearchProductListsRequest
     * @memberof ProductListApisearchProductLists
     */
    body: ProductlistSearchProductListsRequest
}

export interface ProductListApiSearchProductListsByIdsRequest {
    /**
     * 
     * @type ProductlistSearchProductListsByIdsRequest
     * @memberof ProductListApisearchProductListsByIds
     */
    body: ProductlistSearchProductListsByIdsRequest
}

export interface ProductListApiUpdateProductListRequest {
    /**
     * 
     * @type ProductlistUpdateProductListRequest
     * @memberof ProductListApiupdateProductList
     */
    body: ProductlistUpdateProductListRequest
}

export class ObjectProductListApi {
    private api: ObservableProductListApi

    public constructor(configuration: Configuration, requestFactory?: ProductListApiRequestFactory, responseProcessor?: ProductListApiResponseProcessor) {
        this.api = new ObservableProductListApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The BulkUpdateProductListAssociations endpoint updates the positions of specified associations.
     * Bulk update collection associations position
     * @param param the request object
     */
    public bulkUpdateProductListAssociationsWithHttpInfo(param: ProductListApiBulkUpdateProductListAssociationsRequest, options?: Configuration): Promise<HttpInfo<RpcStatus>> {
        return this.api.bulkUpdateProductListAssociationsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The BulkUpdateProductListAssociations endpoint updates the positions of specified associations.
     * Bulk update collection associations position
     * @param param the request object
     */
    public bulkUpdateProductListAssociations(param: ProductListApiBulkUpdateProductListAssociationsRequest, options?: Configuration): Promise<RpcStatus> {
        return this.api.bulkUpdateProductListAssociations(param.body,  options).toPromise();
    }

    /**
     * The CreateProductList endpoint is used to create a new collection of products within the system. This endpoint allows users to define the details and attributes of the collection.
     * Create Collection
     * @param param the request object
     */
    public createProductListWithHttpInfo(param: ProductListApiCreateProductListRequest, options?: Configuration): Promise<HttpInfo<ProductlistCreateProductListResponse>> {
        return this.api.createProductListWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The CreateProductList endpoint is used to create a new collection of products within the system. This endpoint allows users to define the details and attributes of the collection.
     * Create Collection
     * @param param the request object
     */
    public createProductList(param: ProductListApiCreateProductListRequest, options?: Configuration): Promise<ProductlistCreateProductListResponse> {
        return this.api.createProductList(param.body,  options).toPromise();
    }

    /**
     * The CreateProductListAssociation endpoint is used to create an association between a collection and a product.
     * Create Collection/Product Association
     * @param param the request object
     */
    public createProductListAssociationWithHttpInfo(param: ProductListApiCreateProductListAssociationRequest, options?: Configuration): Promise<HttpInfo<ProductlistCreateProductListAssociationResponse>> {
        return this.api.createProductListAssociationWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The CreateProductListAssociation endpoint is used to create an association between a collection and a product.
     * Create Collection/Product Association
     * @param param the request object
     */
    public createProductListAssociation(param: ProductListApiCreateProductListAssociationRequest, options?: Configuration): Promise<ProductlistCreateProductListAssociationResponse> {
        return this.api.createProductListAssociation(param.body,  options).toPromise();
    }

    /**
     * The DeleteProductList endpoint is used to delete an existing collection of products within the system.
     * Delete Collection
     * @param param the request object
     */
    public deleteProductListWithHttpInfo(param: ProductListApiDeleteProductListRequest, options?: Configuration): Promise<HttpInfo<ProductlistDeleteProductListResponse>> {
        return this.api.deleteProductListWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The DeleteProductList endpoint is used to delete an existing collection of products within the system.
     * Delete Collection
     * @param param the request object
     */
    public deleteProductList(param: ProductListApiDeleteProductListRequest, options?: Configuration): Promise<ProductlistDeleteProductListResponse> {
        return this.api.deleteProductList(param.body,  options).toPromise();
    }

    /**
     * The DeleteProductListAssociation endpoint is used to delete an association between a collection and a product.
     * Delete Collection/Product Association
     * @param param the request object
     */
    public deleteProductListAssociationWithHttpInfo(param: ProductListApiDeleteProductListAssociationRequest, options?: Configuration): Promise<HttpInfo<ProductlistDeleteProductListAssociationResponse>> {
        return this.api.deleteProductListAssociationWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The DeleteProductListAssociation endpoint is used to delete an association between a collection and a product.
     * Delete Collection/Product Association
     * @param param the request object
     */
    public deleteProductListAssociation(param: ProductListApiDeleteProductListAssociationRequest, options?: Configuration): Promise<ProductlistDeleteProductListAssociationResponse> {
        return this.api.deleteProductListAssociation(param.body,  options).toPromise();
    }

    /**
     * The GetProductListAssociationsByProductGrn endpoint is used to get the associations between a collection and a list of products by product GRN.
     * Get Collection/Product Associations by Product GRN
     * @param param the request object
     */
    public getProductListAssociationsByProductGrnWithHttpInfo(param: ProductListApiGetProductListAssociationsByProductGrnRequest, options?: Configuration): Promise<HttpInfo<ProductlistGetProductListAssociationsByProductGrnResponse>> {
        return this.api.getProductListAssociationsByProductGrnWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The GetProductListAssociationsByProductGrn endpoint is used to get the associations between a collection and a list of products by product GRN.
     * Get Collection/Product Associations by Product GRN
     * @param param the request object
     */
    public getProductListAssociationsByProductGrn(param: ProductListApiGetProductListAssociationsByProductGrnRequest, options?: Configuration): Promise<ProductlistGetProductListAssociationsByProductGrnResponse> {
        return this.api.getProductListAssociationsByProductGrn(param.body,  options).toPromise();
    }

    /**
     * The GetProductListByCode endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Code
     * @param param the request object
     */
    public getProductListByCodeWithHttpInfo(param: ProductListApiGetProductListByCodeRequest, options?: Configuration): Promise<HttpInfo<ProductlistGetProductListByCodeResponse>> {
        return this.api.getProductListByCodeWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The GetProductListByCode endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Code
     * @param param the request object
     */
    public getProductListByCode(param: ProductListApiGetProductListByCodeRequest, options?: Configuration): Promise<ProductlistGetProductListByCodeResponse> {
        return this.api.getProductListByCode(param.body,  options).toPromise();
    }

    /**
     * The GetProductListById endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Id
     * @param param the request object
     */
    public getProductListByIdWithHttpInfo(param: ProductListApiGetProductListByIdRequest, options?: Configuration): Promise<HttpInfo<ProductlistGetProductListByIdResponse>> {
        return this.api.getProductListByIdWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The GetProductListById endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Id
     * @param param the request object
     */
    public getProductListById(param: ProductListApiGetProductListByIdRequest, options?: Configuration): Promise<ProductlistGetProductListByIdResponse> {
        return this.api.getProductListById(param.body,  options).toPromise();
    }

    /**
     * The GetProductListByUrlKey endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Url Key
     * @param param the request object
     */
    public getProductListByUrlKeyWithHttpInfo(param: ProductListApiGetProductListByUrlKeyRequest, options?: Configuration): Promise<HttpInfo<ProductlistGetProductListByUrlKeyResponse>> {
        return this.api.getProductListByUrlKeyWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The GetProductListByUrlKey endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Url Key
     * @param param the request object
     */
    public getProductListByUrlKey(param: ProductListApiGetProductListByUrlKeyRequest, options?: Configuration): Promise<ProductlistGetProductListByUrlKeyResponse> {
        return this.api.getProductListByUrlKey(param.body,  options).toPromise();
    }

    /**
     * The GetProductListsCount endpoint is used to get the number of products associated with a collection.
     * Get Collection Product Count
     * @param param the request object
     */
    public getProductListsCountWithHttpInfo(param: ProductListApiGetProductListsCountRequest, options?: Configuration): Promise<HttpInfo<ProductlistGetProductListsCountResponse>> {
        return this.api.getProductListsCountWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The GetProductListsCount endpoint is used to get the number of products associated with a collection.
     * Get Collection Product Count
     * @param param the request object
     */
    public getProductListsCount(param: ProductListApiGetProductListsCountRequest, options?: Configuration): Promise<ProductlistGetProductListsCountResponse> {
        return this.api.getProductListsCount(param.body,  options).toPromise();
    }

    /**
     * The ListProductListAssociations endpoint is used to list the associations between a collection and a list of products.
     * List Collection/Product Associations
     * @param param the request object
     */
    public listProductListAssociationsWithHttpInfo(param: ProductListApiListProductListAssociationsRequest, options?: Configuration): Promise<HttpInfo<ProductlistListProductListAssociationsResponse>> {
        return this.api.listProductListAssociationsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The ListProductListAssociations endpoint is used to list the associations between a collection and a list of products.
     * List Collection/Product Associations
     * @param param the request object
     */
    public listProductListAssociations(param: ProductListApiListProductListAssociationsRequest, options?: Configuration): Promise<ProductlistListProductListAssociationsResponse> {
        return this.api.listProductListAssociations(param.body,  options).toPromise();
    }

    /**
     * The ListProductLists endpoint is used to retrieve a list of existing collections of products within the system.
     * List Collections
     * @param param the request object
     */
    public listProductListsWithHttpInfo(param: ProductListApiListProductListsRequest, options?: Configuration): Promise<HttpInfo<ProductlistListProductListsResponse>> {
        return this.api.listProductListsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The ListProductLists endpoint is used to retrieve a list of existing collections of products within the system.
     * List Collections
     * @param param the request object
     */
    public listProductLists(param: ProductListApiListProductListsRequest, options?: Configuration): Promise<ProductlistListProductListsResponse> {
        return this.api.listProductLists(param.body,  options).toPromise();
    }

    /**
     * The SearchProductLists endpoint is used to retrieve a list of existing collections of products within the system.
     * Search Collections
     * @param param the request object
     */
    public searchProductListsWithHttpInfo(param: ProductListApiSearchProductListsRequest, options?: Configuration): Promise<HttpInfo<ProductlistSearchProductListsResponse>> {
        return this.api.searchProductListsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The SearchProductLists endpoint is used to retrieve a list of existing collections of products within the system.
     * Search Collections
     * @param param the request object
     */
    public searchProductLists(param: ProductListApiSearchProductListsRequest, options?: Configuration): Promise<ProductlistSearchProductListsResponse> {
        return this.api.searchProductLists(param.body,  options).toPromise();
    }

    /**
     * The SearchProductListsByIds endpoint is used to retrieve a list of existing collections of products within the system.
     * Search Collections by Ids
     * @param param the request object
     */
    public searchProductListsByIdsWithHttpInfo(param: ProductListApiSearchProductListsByIdsRequest, options?: Configuration): Promise<HttpInfo<ProductlistSearchProductListsByIdsResponse>> {
        return this.api.searchProductListsByIdsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The SearchProductListsByIds endpoint is used to retrieve a list of existing collections of products within the system.
     * Search Collections by Ids
     * @param param the request object
     */
    public searchProductListsByIds(param: ProductListApiSearchProductListsByIdsRequest, options?: Configuration): Promise<ProductlistSearchProductListsByIdsResponse> {
        return this.api.searchProductListsByIds(param.body,  options).toPromise();
    }

    /**
     * The UpdateProductList endpoint is used to update an existing collection of products within the system.
     * Update Collection
     * @param param the request object
     */
    public updateProductListWithHttpInfo(param: ProductListApiUpdateProductListRequest, options?: Configuration): Promise<HttpInfo<ProductlistUpdateProductListResponse>> {
        return this.api.updateProductListWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * The UpdateProductList endpoint is used to update an existing collection of products within the system.
     * Update Collection
     * @param param the request object
     */
    public updateProductList(param: ProductListApiUpdateProductListRequest, options?: Configuration): Promise<ProductlistUpdateProductListResponse> {
        return this.api.updateProductList(param.body,  options).toPromise();
    }

}
