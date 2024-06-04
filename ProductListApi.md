# .ProductListApi

All URIs are relative to *https://product-list.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkUpdateProductListAssociations**](ProductListApi.md#bulkUpdateProductListAssociations) | **POST** /productlist.ProductList/BulkUpdateProductListAssociations | Bulk update collection associations position
[**createProductList**](ProductListApi.md#createProductList) | **POST** /productlist.ProductList/CreateProductList | Create Collection
[**createProductListAssociation**](ProductListApi.md#createProductListAssociation) | **POST** /productlist.ProductList/CreateProductListAssociation | Create Collection/Product Association
[**deleteProductList**](ProductListApi.md#deleteProductList) | **POST** /productlist.ProductList/DeleteProductList | Delete Collection
[**deleteProductListAssociation**](ProductListApi.md#deleteProductListAssociation) | **POST** /productlist.ProductList/DeleteProductListAssociation | Delete Collection/Product Association
[**getProductListAssociationsByProductGrn**](ProductListApi.md#getProductListAssociationsByProductGrn) | **POST** /productlist.ProductList/GetProductListAssociationsByProductGrn | Get Collection/Product Associations by Product GRN
[**getProductListByCode**](ProductListApi.md#getProductListByCode) | **POST** /productlist.ProductList/GetProductListByCode | Get Collection by Code
[**getProductListById**](ProductListApi.md#getProductListById) | **POST** /productlist.ProductList/GetProductListById | Get Collection by Id
[**getProductListByUrlKey**](ProductListApi.md#getProductListByUrlKey) | **POST** /productlist.ProductList/GetProductListByUrlKey | Get Collection by Url Key
[**getProductListsCount**](ProductListApi.md#getProductListsCount) | **POST** /productlist.ProductList/GetProductListsCount | Get Collection Product Count
[**listProductListAssociations**](ProductListApi.md#listProductListAssociations) | **POST** /productlist.ProductList/ListProductListAssociations | List Collection/Product Associations
[**listProductLists**](ProductListApi.md#listProductLists) | **POST** /productlist.ProductList/ListProductLists | List Collections
[**searchProductLists**](ProductListApi.md#searchProductLists) | **POST** /productlist.ProductList/SearchProductLists | Search Collections
[**searchProductListsByIds**](ProductListApi.md#searchProductListsByIds) | **POST** /productlist.ProductList/SearchProductListsByIds | Search Collections by Ids
[**updateProductList**](ProductListApi.md#updateProductList) | **POST** /productlist.ProductList/UpdateProductList | Update Collection


# **bulkUpdateProductListAssociations**
> RpcStatus bulkUpdateProductListAssociations(body)

The BulkUpdateProductListAssociations endpoint updates the positions of specified associations.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductListApi(configuration);

let body:.ProductListApiBulkUpdateProductListAssociationsRequest = {
  // ProductlistBulkUpdateProductListAssociationsRequest
  body: {
    tenantId: "tenantId_example",
    productListAssociations: [
      {
        id: "id_example",
        position: 1,
      },
    ],
  },
};

apiInstance.bulkUpdateProductListAssociations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductlistBulkUpdateProductListAssociationsRequest**|  |


### Return type

**RpcStatus**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createProductList**
> ProductlistCreateProductListResponse createProductList(body)

The CreateProductList endpoint is used to create a new collection of products within the system. This endpoint allows users to define the details and attributes of the collection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductListApi(configuration);

let body:.ProductListApiCreateProductListRequest = {
  // ProductlistCreateProductListRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
    urlKey: {
      value: {
        "key": "key_example",
      },
    },
    entityType: "entityType_example",
    entityCode: "entityCode_example",
    attributes: {
      "key": 
        key: {},
      ,
    },
  },
};

apiInstance.createProductList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductlistCreateProductListRequest**|  |


### Return type

**ProductlistCreateProductListResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createProductListAssociation**
> ProductlistCreateProductListAssociationResponse createProductListAssociation(body)

The CreateProductListAssociation endpoint is used to create an association between a collection and a product.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductListApi(configuration);

let body:.ProductListApiCreateProductListAssociationRequest = {
  // ProductlistCreateProductListAssociationRequest
  body: {
    tenantId: "tenantId_example",
    listId: "listId_example",
    position: 1,
    productGrn: "productGrn_example",
  },
};

apiInstance.createProductListAssociation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductlistCreateProductListAssociationRequest**|  |


### Return type

**ProductlistCreateProductListAssociationResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProductList**
> ProductlistDeleteProductListResponse deleteProductList(body)

The DeleteProductList endpoint is used to delete an existing collection of products within the system.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductListApi(configuration);

let body:.ProductListApiDeleteProductListRequest = {
  // ProductlistDeleteProductListRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.deleteProductList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductlistDeleteProductListRequest**|  |


### Return type

**ProductlistDeleteProductListResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProductListAssociation**
> ProductlistDeleteProductListAssociationResponse deleteProductListAssociation(body)

The DeleteProductListAssociation endpoint is used to delete an association between a collection and a product.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductListApi(configuration);

let body:.ProductListApiDeleteProductListAssociationRequest = {
  // ProductlistDeleteProductListAssociationRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.deleteProductListAssociation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductlistDeleteProductListAssociationRequest**|  |


### Return type

**ProductlistDeleteProductListAssociationResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProductListAssociationsByProductGrn**
> ProductlistGetProductListAssociationsByProductGrnResponse getProductListAssociationsByProductGrn(body)

The GetProductListAssociationsByProductGrn endpoint is used to get the associations between a collection and a list of products by product GRN.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductListApi(configuration);

let body:.ProductListApiGetProductListAssociationsByProductGrnRequest = {
  // ProductlistGetProductListAssociationsByProductGrnRequest
  body: {
    tenantId: "tenantId_example",
    productGrn: "productGrn_example",
  },
};

apiInstance.getProductListAssociationsByProductGrn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductlistGetProductListAssociationsByProductGrnRequest**|  |


### Return type

**ProductlistGetProductListAssociationsByProductGrnResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProductListByCode**
> ProductlistGetProductListByCodeResponse getProductListByCode(body)

The GetProductListByCode endpoint is used to retrieve an existing collection of products within the system.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductListApi(configuration);

let body:.ProductListApiGetProductListByCodeRequest = {
  // ProductlistGetProductListByCodeRequest
  body: {
    tenantId: "tenantId_example",
    code: "code_example",
  },
};

apiInstance.getProductListByCode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductlistGetProductListByCodeRequest**|  |


### Return type

**ProductlistGetProductListByCodeResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProductListById**
> ProductlistGetProductListByIdResponse getProductListById(body)

The GetProductListById endpoint is used to retrieve an existing collection of products within the system.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductListApi(configuration);

let body:.ProductListApiGetProductListByIdRequest = {
  // ProductlistGetProductListByIdRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.getProductListById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductlistGetProductListByIdRequest**|  |


### Return type

**ProductlistGetProductListByIdResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProductListByUrlKey**
> ProductlistGetProductListByUrlKeyResponse getProductListByUrlKey(body)

The GetProductListByUrlKey endpoint is used to retrieve an existing collection of products within the system.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductListApi(configuration);

let body:.ProductListApiGetProductListByUrlKeyRequest = {
  // ProductlistGetProductListByUrlKeyRequest
  body: {
    tenantId: "tenantId_example",
    urlKey: "urlKey_example",
    locale: "locale_example",
  },
};

apiInstance.getProductListByUrlKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductlistGetProductListByUrlKeyRequest**|  |


### Return type

**ProductlistGetProductListByUrlKeyResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProductListsCount**
> ProductlistGetProductListsCountResponse getProductListsCount(body)

The GetProductListsCount endpoint is used to get the number of products associated with a collection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductListApi(configuration);

let body:.ProductListApiGetProductListsCountRequest = {
  // ProductlistGetProductListsCountRequest
  body: {
    tenantId: "tenantId_example",
  },
};

apiInstance.getProductListsCount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductlistGetProductListsCountRequest**|  |


### Return type

**ProductlistGetProductListsCountResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProductListAssociations**
> ProductlistListProductListAssociationsResponse listProductListAssociations(body)

The ListProductListAssociations endpoint is used to list the associations between a collection and a list of products.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductListApi(configuration);

let body:.ProductListApiListProductListAssociationsRequest = {
  // ProductlistListProductListAssociationsRequest
  body: {
    tenantId: "tenantId_example",
    listId: "listId_example",
    productGrn: "productGrn_example",
    pageSize: 1,
    pageToken: "pageToken_example",
    orderBy: [
      {
        field: "field_example",
        direction: "DEFAULT",
      },
    ],
  },
};

apiInstance.listProductListAssociations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductlistListProductListAssociationsRequest**|  |


### Return type

**ProductlistListProductListAssociationsResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProductLists**
> ProductlistListProductListsResponse listProductLists(body)

The ListProductLists endpoint is used to retrieve a list of existing collections of products within the system.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductListApi(configuration);

let body:.ProductListApiListProductListsRequest = {
  // ProductlistListProductListsRequest
  body: {
    tenantId: "tenantId_example",
    pageSize: 1,
    pageToken: "pageToken_example",
  },
};

apiInstance.listProductLists(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductlistListProductListsRequest**|  |


### Return type

**ProductlistListProductListsResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchProductLists**
> ProductlistSearchProductListsResponse searchProductLists(body)

The SearchProductLists endpoint is used to retrieve a list of existing collections of products within the system.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductListApi(configuration);

let body:.ProductListApiSearchProductListsRequest = {
  // ProductlistSearchProductListsRequest
  body: {
    tenantId: "tenantId_example",
    query: {
      attributes: [
        "attributes_example",
      ],
      value: "value_example",
    },
    pageSize: 1,
    pageNumber: 1,
  },
};

apiInstance.searchProductLists(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductlistSearchProductListsRequest**|  |


### Return type

**ProductlistSearchProductListsResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchProductListsByIds**
> ProductlistSearchProductListsByIdsResponse searchProductListsByIds(body)

The SearchProductListsByIds endpoint is used to retrieve a list of existing collections of products within the system.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductListApi(configuration);

let body:.ProductListApiSearchProductListsByIdsRequest = {
  // ProductlistSearchProductListsByIdsRequest
  body: {
    tenantId: "tenantId_example",
    ids: [
      "ids_example",
    ],
    pageSize: 1,
    pageNumber: 1,
  },
};

apiInstance.searchProductListsByIds(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductlistSearchProductListsByIdsRequest**|  |


### Return type

**ProductlistSearchProductListsByIdsResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProductList**
> ProductlistUpdateProductListResponse updateProductList(body)

The UpdateProductList endpoint is used to update an existing collection of products within the system.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductListApi(configuration);

let body:.ProductListApiUpdateProductListRequest = {
  // ProductlistUpdateProductListRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    urlKey: {
      value: {
        "key": "key_example",
      },
    },
    attributes: {
      "key": 
        key: {},
      ,
    },
    attributesMask: "attributesMask_example",
  },
};

apiInstance.updateProductList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ProductlistUpdateProductListRequest**|  |


### Return type

**ProductlistUpdateProductListResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


