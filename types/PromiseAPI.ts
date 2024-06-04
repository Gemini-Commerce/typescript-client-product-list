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
import { ObservableProductListApi } from './ObservableAPI';

import { ProductListApiRequestFactory, ProductListApiResponseProcessor} from "../apis/ProductListApi";
export class PromiseProductListApi {
    private api: ObservableProductListApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductListApiRequestFactory,
        responseProcessor?: ProductListApiResponseProcessor
    ) {
        this.api = new ObservableProductListApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The BulkUpdateProductListAssociations endpoint updates the positions of specified associations.
     * Bulk update collection associations position
     * @param body 
     */
    public bulkUpdateProductListAssociationsWithHttpInfo(body: ProductlistBulkUpdateProductListAssociationsRequest, _options?: Configuration): Promise<HttpInfo<RpcStatus>> {
        const result = this.api.bulkUpdateProductListAssociationsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The BulkUpdateProductListAssociations endpoint updates the positions of specified associations.
     * Bulk update collection associations position
     * @param body 
     */
    public bulkUpdateProductListAssociations(body: ProductlistBulkUpdateProductListAssociationsRequest, _options?: Configuration): Promise<RpcStatus> {
        const result = this.api.bulkUpdateProductListAssociations(body, _options);
        return result.toPromise();
    }

    /**
     * The CreateProductList endpoint is used to create a new collection of products within the system. This endpoint allows users to define the details and attributes of the collection.
     * Create Collection
     * @param body 
     */
    public createProductListWithHttpInfo(body: ProductlistCreateProductListRequest, _options?: Configuration): Promise<HttpInfo<ProductlistCreateProductListResponse>> {
        const result = this.api.createProductListWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The CreateProductList endpoint is used to create a new collection of products within the system. This endpoint allows users to define the details and attributes of the collection.
     * Create Collection
     * @param body 
     */
    public createProductList(body: ProductlistCreateProductListRequest, _options?: Configuration): Promise<ProductlistCreateProductListResponse> {
        const result = this.api.createProductList(body, _options);
        return result.toPromise();
    }

    /**
     * The CreateProductListAssociation endpoint is used to create an association between a collection and a product.
     * Create Collection/Product Association
     * @param body 
     */
    public createProductListAssociationWithHttpInfo(body: ProductlistCreateProductListAssociationRequest, _options?: Configuration): Promise<HttpInfo<ProductlistCreateProductListAssociationResponse>> {
        const result = this.api.createProductListAssociationWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The CreateProductListAssociation endpoint is used to create an association between a collection and a product.
     * Create Collection/Product Association
     * @param body 
     */
    public createProductListAssociation(body: ProductlistCreateProductListAssociationRequest, _options?: Configuration): Promise<ProductlistCreateProductListAssociationResponse> {
        const result = this.api.createProductListAssociation(body, _options);
        return result.toPromise();
    }

    /**
     * The DeleteProductList endpoint is used to delete an existing collection of products within the system.
     * Delete Collection
     * @param body 
     */
    public deleteProductListWithHttpInfo(body: ProductlistDeleteProductListRequest, _options?: Configuration): Promise<HttpInfo<ProductlistDeleteProductListResponse>> {
        const result = this.api.deleteProductListWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The DeleteProductList endpoint is used to delete an existing collection of products within the system.
     * Delete Collection
     * @param body 
     */
    public deleteProductList(body: ProductlistDeleteProductListRequest, _options?: Configuration): Promise<ProductlistDeleteProductListResponse> {
        const result = this.api.deleteProductList(body, _options);
        return result.toPromise();
    }

    /**
     * The DeleteProductListAssociation endpoint is used to delete an association between a collection and a product.
     * Delete Collection/Product Association
     * @param body 
     */
    public deleteProductListAssociationWithHttpInfo(body: ProductlistDeleteProductListAssociationRequest, _options?: Configuration): Promise<HttpInfo<ProductlistDeleteProductListAssociationResponse>> {
        const result = this.api.deleteProductListAssociationWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The DeleteProductListAssociation endpoint is used to delete an association between a collection and a product.
     * Delete Collection/Product Association
     * @param body 
     */
    public deleteProductListAssociation(body: ProductlistDeleteProductListAssociationRequest, _options?: Configuration): Promise<ProductlistDeleteProductListAssociationResponse> {
        const result = this.api.deleteProductListAssociation(body, _options);
        return result.toPromise();
    }

    /**
     * The GetProductListAssociationsByProductGrn endpoint is used to get the associations between a collection and a list of products by product GRN.
     * Get Collection/Product Associations by Product GRN
     * @param body 
     */
    public getProductListAssociationsByProductGrnWithHttpInfo(body: ProductlistGetProductListAssociationsByProductGrnRequest, _options?: Configuration): Promise<HttpInfo<ProductlistGetProductListAssociationsByProductGrnResponse>> {
        const result = this.api.getProductListAssociationsByProductGrnWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The GetProductListAssociationsByProductGrn endpoint is used to get the associations between a collection and a list of products by product GRN.
     * Get Collection/Product Associations by Product GRN
     * @param body 
     */
    public getProductListAssociationsByProductGrn(body: ProductlistGetProductListAssociationsByProductGrnRequest, _options?: Configuration): Promise<ProductlistGetProductListAssociationsByProductGrnResponse> {
        const result = this.api.getProductListAssociationsByProductGrn(body, _options);
        return result.toPromise();
    }

    /**
     * The GetProductListByCode endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Code
     * @param body 
     */
    public getProductListByCodeWithHttpInfo(body: ProductlistGetProductListByCodeRequest, _options?: Configuration): Promise<HttpInfo<ProductlistGetProductListByCodeResponse>> {
        const result = this.api.getProductListByCodeWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The GetProductListByCode endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Code
     * @param body 
     */
    public getProductListByCode(body: ProductlistGetProductListByCodeRequest, _options?: Configuration): Promise<ProductlistGetProductListByCodeResponse> {
        const result = this.api.getProductListByCode(body, _options);
        return result.toPromise();
    }

    /**
     * The GetProductListById endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Id
     * @param body 
     */
    public getProductListByIdWithHttpInfo(body: ProductlistGetProductListByIdRequest, _options?: Configuration): Promise<HttpInfo<ProductlistGetProductListByIdResponse>> {
        const result = this.api.getProductListByIdWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The GetProductListById endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Id
     * @param body 
     */
    public getProductListById(body: ProductlistGetProductListByIdRequest, _options?: Configuration): Promise<ProductlistGetProductListByIdResponse> {
        const result = this.api.getProductListById(body, _options);
        return result.toPromise();
    }

    /**
     * The GetProductListByUrlKey endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Url Key
     * @param body 
     */
    public getProductListByUrlKeyWithHttpInfo(body: ProductlistGetProductListByUrlKeyRequest, _options?: Configuration): Promise<HttpInfo<ProductlistGetProductListByUrlKeyResponse>> {
        const result = this.api.getProductListByUrlKeyWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The GetProductListByUrlKey endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Url Key
     * @param body 
     */
    public getProductListByUrlKey(body: ProductlistGetProductListByUrlKeyRequest, _options?: Configuration): Promise<ProductlistGetProductListByUrlKeyResponse> {
        const result = this.api.getProductListByUrlKey(body, _options);
        return result.toPromise();
    }

    /**
     * The GetProductListsCount endpoint is used to get the number of products associated with a collection.
     * Get Collection Product Count
     * @param body 
     */
    public getProductListsCountWithHttpInfo(body: ProductlistGetProductListsCountRequest, _options?: Configuration): Promise<HttpInfo<ProductlistGetProductListsCountResponse>> {
        const result = this.api.getProductListsCountWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The GetProductListsCount endpoint is used to get the number of products associated with a collection.
     * Get Collection Product Count
     * @param body 
     */
    public getProductListsCount(body: ProductlistGetProductListsCountRequest, _options?: Configuration): Promise<ProductlistGetProductListsCountResponse> {
        const result = this.api.getProductListsCount(body, _options);
        return result.toPromise();
    }

    /**
     * The ListProductListAssociations endpoint is used to list the associations between a collection and a list of products.
     * List Collection/Product Associations
     * @param body 
     */
    public listProductListAssociationsWithHttpInfo(body: ProductlistListProductListAssociationsRequest, _options?: Configuration): Promise<HttpInfo<ProductlistListProductListAssociationsResponse>> {
        const result = this.api.listProductListAssociationsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The ListProductListAssociations endpoint is used to list the associations between a collection and a list of products.
     * List Collection/Product Associations
     * @param body 
     */
    public listProductListAssociations(body: ProductlistListProductListAssociationsRequest, _options?: Configuration): Promise<ProductlistListProductListAssociationsResponse> {
        const result = this.api.listProductListAssociations(body, _options);
        return result.toPromise();
    }

    /**
     * The ListProductLists endpoint is used to retrieve a list of existing collections of products within the system.
     * List Collections
     * @param body 
     */
    public listProductListsWithHttpInfo(body: ProductlistListProductListsRequest, _options?: Configuration): Promise<HttpInfo<ProductlistListProductListsResponse>> {
        const result = this.api.listProductListsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The ListProductLists endpoint is used to retrieve a list of existing collections of products within the system.
     * List Collections
     * @param body 
     */
    public listProductLists(body: ProductlistListProductListsRequest, _options?: Configuration): Promise<ProductlistListProductListsResponse> {
        const result = this.api.listProductLists(body, _options);
        return result.toPromise();
    }

    /**
     * The SearchProductLists endpoint is used to retrieve a list of existing collections of products within the system.
     * Search Collections
     * @param body 
     */
    public searchProductListsWithHttpInfo(body: ProductlistSearchProductListsRequest, _options?: Configuration): Promise<HttpInfo<ProductlistSearchProductListsResponse>> {
        const result = this.api.searchProductListsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The SearchProductLists endpoint is used to retrieve a list of existing collections of products within the system.
     * Search Collections
     * @param body 
     */
    public searchProductLists(body: ProductlistSearchProductListsRequest, _options?: Configuration): Promise<ProductlistSearchProductListsResponse> {
        const result = this.api.searchProductLists(body, _options);
        return result.toPromise();
    }

    /**
     * The SearchProductListsByIds endpoint is used to retrieve a list of existing collections of products within the system.
     * Search Collections by Ids
     * @param body 
     */
    public searchProductListsByIdsWithHttpInfo(body: ProductlistSearchProductListsByIdsRequest, _options?: Configuration): Promise<HttpInfo<ProductlistSearchProductListsByIdsResponse>> {
        const result = this.api.searchProductListsByIdsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The SearchProductListsByIds endpoint is used to retrieve a list of existing collections of products within the system.
     * Search Collections by Ids
     * @param body 
     */
    public searchProductListsByIds(body: ProductlistSearchProductListsByIdsRequest, _options?: Configuration): Promise<ProductlistSearchProductListsByIdsResponse> {
        const result = this.api.searchProductListsByIds(body, _options);
        return result.toPromise();
    }

    /**
     * The UpdateProductList endpoint is used to update an existing collection of products within the system.
     * Update Collection
     * @param body 
     */
    public updateProductListWithHttpInfo(body: ProductlistUpdateProductListRequest, _options?: Configuration): Promise<HttpInfo<ProductlistUpdateProductListResponse>> {
        const result = this.api.updateProductListWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * The UpdateProductList endpoint is used to update an existing collection of products within the system.
     * Update Collection
     * @param body 
     */
    public updateProductList(body: ProductlistUpdateProductListRequest, _options?: Configuration): Promise<ProductlistUpdateProductListResponse> {
        const result = this.api.updateProductList(body, _options);
        return result.toPromise();
    }


}



