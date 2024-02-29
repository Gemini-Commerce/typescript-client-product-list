import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ProductListApiRequestFactory, ProductListApiResponseProcessor} from "../apis/ProductListApi";
export class ObservableProductListApi {
    private requestFactory: ProductListApiRequestFactory;
    private responseProcessor: ProductListApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductListApiRequestFactory,
        responseProcessor?: ProductListApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductListApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductListApiResponseProcessor();
    }

    /**
     * The BulkUpdateProductListAssociations endpoint updates the positions of specified associations.
     * Bulk update collection associations position
     * @param body 
     */
    public bulkUpdateProductListAssociationsWithHttpInfo(body: ProductlistBulkUpdateProductListAssociationsRequest, _options?: Configuration): Observable<HttpInfo<RpcStatus>> {
        const requestContextPromise = this.requestFactory.bulkUpdateProductListAssociations(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bulkUpdateProductListAssociationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * The BulkUpdateProductListAssociations endpoint updates the positions of specified associations.
     * Bulk update collection associations position
     * @param body 
     */
    public bulkUpdateProductListAssociations(body: ProductlistBulkUpdateProductListAssociationsRequest, _options?: Configuration): Observable<RpcStatus> {
        return this.bulkUpdateProductListAssociationsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<RpcStatus>) => apiResponse.data));
    }

    /**
     * The CreateProductList endpoint is used to create a new collection of products within the system. This endpoint allows users to define the details and attributes of the collection.
     * Create Collection
     * @param body 
     */
    public createProductListWithHttpInfo(body: ProductlistCreateProductListRequest, _options?: Configuration): Observable<HttpInfo<ProductlistCreateProductListResponse>> {
        const requestContextPromise = this.requestFactory.createProductList(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductListWithHttpInfo(rsp)));
            }));
    }

    /**
     * The CreateProductList endpoint is used to create a new collection of products within the system. This endpoint allows users to define the details and attributes of the collection.
     * Create Collection
     * @param body 
     */
    public createProductList(body: ProductlistCreateProductListRequest, _options?: Configuration): Observable<ProductlistCreateProductListResponse> {
        return this.createProductListWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductlistCreateProductListResponse>) => apiResponse.data));
    }

    /**
     * The CreateProductListAssociation endpoint is used to create an association between a collection and a product.
     * Create Collection/Product Association
     * @param body 
     */
    public createProductListAssociationWithHttpInfo(body: ProductlistCreateProductListAssociationRequest, _options?: Configuration): Observable<HttpInfo<ProductlistCreateProductListAssociationResponse>> {
        const requestContextPromise = this.requestFactory.createProductListAssociation(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductListAssociationWithHttpInfo(rsp)));
            }));
    }

    /**
     * The CreateProductListAssociation endpoint is used to create an association between a collection and a product.
     * Create Collection/Product Association
     * @param body 
     */
    public createProductListAssociation(body: ProductlistCreateProductListAssociationRequest, _options?: Configuration): Observable<ProductlistCreateProductListAssociationResponse> {
        return this.createProductListAssociationWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductlistCreateProductListAssociationResponse>) => apiResponse.data));
    }

    /**
     * The DeleteProductList endpoint is used to delete an existing collection of products within the system.
     * Delete Collection
     * @param body 
     */
    public deleteProductListWithHttpInfo(body: ProductlistDeleteProductListRequest, _options?: Configuration): Observable<HttpInfo<ProductlistDeleteProductListResponse>> {
        const requestContextPromise = this.requestFactory.deleteProductList(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductListWithHttpInfo(rsp)));
            }));
    }

    /**
     * The DeleteProductList endpoint is used to delete an existing collection of products within the system.
     * Delete Collection
     * @param body 
     */
    public deleteProductList(body: ProductlistDeleteProductListRequest, _options?: Configuration): Observable<ProductlistDeleteProductListResponse> {
        return this.deleteProductListWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductlistDeleteProductListResponse>) => apiResponse.data));
    }

    /**
     * The DeleteProductListAssociation endpoint is used to delete an association between a collection and a product.
     * Delete Collection/Product Association
     * @param body 
     */
    public deleteProductListAssociationWithHttpInfo(body: ProductlistDeleteProductListAssociationRequest, _options?: Configuration): Observable<HttpInfo<ProductlistDeleteProductListAssociationResponse>> {
        const requestContextPromise = this.requestFactory.deleteProductListAssociation(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductListAssociationWithHttpInfo(rsp)));
            }));
    }

    /**
     * The DeleteProductListAssociation endpoint is used to delete an association between a collection and a product.
     * Delete Collection/Product Association
     * @param body 
     */
    public deleteProductListAssociation(body: ProductlistDeleteProductListAssociationRequest, _options?: Configuration): Observable<ProductlistDeleteProductListAssociationResponse> {
        return this.deleteProductListAssociationWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductlistDeleteProductListAssociationResponse>) => apiResponse.data));
    }

    /**
     * The GetProductListAssociationsByProductGrn endpoint is used to get the associations between a collection and a list of products by product GRN.
     * Get Collection/Product Associations by Product GRN
     * @param body 
     */
    public getProductListAssociationsByProductGrnWithHttpInfo(body: ProductlistGetProductListAssociationsByProductGrnRequest, _options?: Configuration): Observable<HttpInfo<ProductlistGetProductListAssociationsByProductGrnResponse>> {
        const requestContextPromise = this.requestFactory.getProductListAssociationsByProductGrn(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductListAssociationsByProductGrnWithHttpInfo(rsp)));
            }));
    }

    /**
     * The GetProductListAssociationsByProductGrn endpoint is used to get the associations between a collection and a list of products by product GRN.
     * Get Collection/Product Associations by Product GRN
     * @param body 
     */
    public getProductListAssociationsByProductGrn(body: ProductlistGetProductListAssociationsByProductGrnRequest, _options?: Configuration): Observable<ProductlistGetProductListAssociationsByProductGrnResponse> {
        return this.getProductListAssociationsByProductGrnWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductlistGetProductListAssociationsByProductGrnResponse>) => apiResponse.data));
    }

    /**
     * The GetProductListByCode endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Code
     * @param body 
     */
    public getProductListByCodeWithHttpInfo(body: ProductlistGetProductListByCodeRequest, _options?: Configuration): Observable<HttpInfo<ProductlistGetProductListByCodeResponse>> {
        const requestContextPromise = this.requestFactory.getProductListByCode(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductListByCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * The GetProductListByCode endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Code
     * @param body 
     */
    public getProductListByCode(body: ProductlistGetProductListByCodeRequest, _options?: Configuration): Observable<ProductlistGetProductListByCodeResponse> {
        return this.getProductListByCodeWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductlistGetProductListByCodeResponse>) => apiResponse.data));
    }

    /**
     * The GetProductListById endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Id
     * @param body 
     */
    public getProductListByIdWithHttpInfo(body: ProductlistGetProductListByIdRequest, _options?: Configuration): Observable<HttpInfo<ProductlistGetProductListByIdResponse>> {
        const requestContextPromise = this.requestFactory.getProductListById(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductListByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * The GetProductListById endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Id
     * @param body 
     */
    public getProductListById(body: ProductlistGetProductListByIdRequest, _options?: Configuration): Observable<ProductlistGetProductListByIdResponse> {
        return this.getProductListByIdWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductlistGetProductListByIdResponse>) => apiResponse.data));
    }

    /**
     * The GetProductListByUrlKey endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Url Key
     * @param body 
     */
    public getProductListByUrlKeyWithHttpInfo(body: ProductlistGetProductListByUrlKeyRequest, _options?: Configuration): Observable<HttpInfo<ProductlistGetProductListByUrlKeyResponse>> {
        const requestContextPromise = this.requestFactory.getProductListByUrlKey(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductListByUrlKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * The GetProductListByUrlKey endpoint is used to retrieve an existing collection of products within the system.
     * Get Collection by Url Key
     * @param body 
     */
    public getProductListByUrlKey(body: ProductlistGetProductListByUrlKeyRequest, _options?: Configuration): Observable<ProductlistGetProductListByUrlKeyResponse> {
        return this.getProductListByUrlKeyWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductlistGetProductListByUrlKeyResponse>) => apiResponse.data));
    }

    /**
     * The GetProductListsCount endpoint is used to get the number of products associated with a collection.
     * Get Collection Product Count
     * @param body 
     */
    public getProductListsCountWithHttpInfo(body: ProductlistGetProductListsCountRequest, _options?: Configuration): Observable<HttpInfo<ProductlistGetProductListsCountResponse>> {
        const requestContextPromise = this.requestFactory.getProductListsCount(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductListsCountWithHttpInfo(rsp)));
            }));
    }

    /**
     * The GetProductListsCount endpoint is used to get the number of products associated with a collection.
     * Get Collection Product Count
     * @param body 
     */
    public getProductListsCount(body: ProductlistGetProductListsCountRequest, _options?: Configuration): Observable<ProductlistGetProductListsCountResponse> {
        return this.getProductListsCountWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductlistGetProductListsCountResponse>) => apiResponse.data));
    }

    /**
     * The ListProductListAssociations endpoint is used to list the associations between a collection and a list of products.
     * List Collection/Product Associations
     * @param body 
     */
    public listProductListAssociationsWithHttpInfo(body: ProductlistListProductListAssociationsRequest, _options?: Configuration): Observable<HttpInfo<ProductlistListProductListAssociationsResponse>> {
        const requestContextPromise = this.requestFactory.listProductListAssociations(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductListAssociationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * The ListProductListAssociations endpoint is used to list the associations between a collection and a list of products.
     * List Collection/Product Associations
     * @param body 
     */
    public listProductListAssociations(body: ProductlistListProductListAssociationsRequest, _options?: Configuration): Observable<ProductlistListProductListAssociationsResponse> {
        return this.listProductListAssociationsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductlistListProductListAssociationsResponse>) => apiResponse.data));
    }

    /**
     * The ListProductLists endpoint is used to retrieve a list of existing collections of products within the system.
     * List Collections
     * @param body 
     */
    public listProductListsWithHttpInfo(body: ProductlistListProductListsRequest, _options?: Configuration): Observable<HttpInfo<ProductlistListProductListsResponse>> {
        const requestContextPromise = this.requestFactory.listProductLists(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProductListsWithHttpInfo(rsp)));
            }));
    }

    /**
     * The ListProductLists endpoint is used to retrieve a list of existing collections of products within the system.
     * List Collections
     * @param body 
     */
    public listProductLists(body: ProductlistListProductListsRequest, _options?: Configuration): Observable<ProductlistListProductListsResponse> {
        return this.listProductListsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductlistListProductListsResponse>) => apiResponse.data));
    }

    /**
     * The SearchProductLists endpoint is used to retrieve a list of existing collections of products within the system.
     * Search Collections
     * @param body 
     */
    public searchProductListsWithHttpInfo(body: ProductlistSearchProductListsRequest, _options?: Configuration): Observable<HttpInfo<ProductlistSearchProductListsResponse>> {
        const requestContextPromise = this.requestFactory.searchProductLists(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchProductListsWithHttpInfo(rsp)));
            }));
    }

    /**
     * The SearchProductLists endpoint is used to retrieve a list of existing collections of products within the system.
     * Search Collections
     * @param body 
     */
    public searchProductLists(body: ProductlistSearchProductListsRequest, _options?: Configuration): Observable<ProductlistSearchProductListsResponse> {
        return this.searchProductListsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductlistSearchProductListsResponse>) => apiResponse.data));
    }

    /**
     * The SearchProductListsByIds endpoint is used to retrieve a list of existing collections of products within the system.
     * Search Collections by Ids
     * @param body 
     */
    public searchProductListsByIdsWithHttpInfo(body: ProductlistSearchProductListsByIdsRequest, _options?: Configuration): Observable<HttpInfo<ProductlistSearchProductListsByIdsResponse>> {
        const requestContextPromise = this.requestFactory.searchProductListsByIds(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchProductListsByIdsWithHttpInfo(rsp)));
            }));
    }

    /**
     * The SearchProductListsByIds endpoint is used to retrieve a list of existing collections of products within the system.
     * Search Collections by Ids
     * @param body 
     */
    public searchProductListsByIds(body: ProductlistSearchProductListsByIdsRequest, _options?: Configuration): Observable<ProductlistSearchProductListsByIdsResponse> {
        return this.searchProductListsByIdsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductlistSearchProductListsByIdsResponse>) => apiResponse.data));
    }

    /**
     * The UpdateProductList endpoint is used to update an existing collection of products within the system.
     * Update Collection
     * @param body 
     */
    public updateProductListWithHttpInfo(body: ProductlistUpdateProductListRequest, _options?: Configuration): Observable<HttpInfo<ProductlistUpdateProductListResponse>> {
        const requestContextPromise = this.requestFactory.updateProductList(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductListWithHttpInfo(rsp)));
            }));
    }

    /**
     * The UpdateProductList endpoint is used to update an existing collection of products within the system.
     * Update Collection
     * @param body 
     */
    public updateProductList(body: ProductlistUpdateProductListRequest, _options?: Configuration): Observable<ProductlistUpdateProductListResponse> {
        return this.updateProductListWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ProductlistUpdateProductListResponse>) => apiResponse.data));
    }

}
