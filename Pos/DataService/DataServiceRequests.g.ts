
/* tslint:disable */
import { ProxyEntities } from "PosApi/Entities";

import { Entities } from "./DataServiceEntities.g";

import { DataServiceRequest, DataServiceResponse } from "PosApi/Consume/DataService";
export { ProxyEntities };

export { Entities };

  export namespace StoreOperations {

  export class OverrideCartLinePriceResponse extends DataServiceResponse {
    public result: ProxyEntities.Cart;
  }

  export class OverrideCartLinePriceRequest<TResponse extends OverrideCartLinePriceResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(cartId: string, lineId: string, newPrice: number) {
        super();

        this._entitySet = "";
        this._entityType = "";
        this._method = "OverrideCartLinePrice";
        this._parameters = { cartId: cartId, lineId: lineId, newPrice: newPrice };
        this._isAction = true;
        this._returnType = ProxyEntities.CartClass;
        this._isReturnTypeCollection = false;
        
      }
  }

  export class SimplePingPostResponse extends DataServiceResponse {
    public result: boolean;
  }

  export class SimplePingPostRequest<TResponse extends SimplePingPostResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor() {
        super();

        this._entitySet = "";
        this._entityType = "";
        this._method = "SimplePingPost";
        this._parameters = {  };
        this._isAction = true;
        this._returnType = null;
        this._isReturnTypeCollection = false;
        
      }
  }

  export class GetOnlineShoppingCartListResponse extends DataServiceResponse {
    public result: ProxyEntities.Cart[];
  }

  export class GetOnlineShoppingCartListRequest<TResponse extends GetOnlineShoppingCartListResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor() {
        super();

        this._entitySet = "";
        this._entityType = "";
        this._method = "GetOnlineShoppingCartList";
        this._parameters = {  };
        this._isAction = true;
        this._returnType = ProxyEntities.CartClass;
        this._isReturnTypeCollection = true;
        
      }
  }

  export class GetCartByIdResponse extends DataServiceResponse {
    public result: ProxyEntities.Cart;
  }

  export class GetCartByIdRequest<TResponse extends GetCartByIdResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(id: string) {
        super();

        this._entitySet = "";
        this._entityType = "";
        this._method = "GetCartById";
        this._parameters = { id: id };
        this._isAction = true;
        this._returnType = ProxyEntities.CartClass;
        this._isReturnTypeCollection = false;
        
      }
  }

  export class SearchInventoryDocumentLineResponse extends DataServiceResponse {
    public result: ProxyEntities.InventoryInboundOutboundDocumentLine[];
  }

  export class SearchInventoryDocumentLineRequest<TResponse extends SearchInventoryDocumentLineResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(searchCriteria: ProxyEntities.InventoryDocumentLineSearchCriteria) {
        super();

        this._entitySet = "";
        this._entityType = "";
        this._method = "SearchInventoryDocumentLine";
        this._parameters = { searchCriteria: searchCriteria };
        this._isAction = true;
        this._returnType = ProxyEntities.InventoryInboundOutboundDocumentLineClass;
        this._isReturnTypeCollection = true;
        
      }
  }

  export class SimplePingGetResponse extends DataServiceResponse {
    public result: boolean;
  }

  export class SimplePingGetRequest<TResponse extends SimplePingGetResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor() {
        super();

        this._entitySet = "";
        this._entityType = "";
        this._method = "SimplePingGet";
        this._parameters = {  };
        this._isAction = false;
        this._returnType = null;
        this._isReturnTypeCollection = false;
        
      }
  }

}

export namespace BoundController {
  // Entity Set ExampleEntity
  export class CreateExampleEntityResponse extends DataServiceResponse {
    public result: number;
  }

  export class CreateExampleEntityRequest<TResponse extends CreateExampleEntityResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(entityData: Entities.ExampleEntity) {
        super();

        this._entitySet = "BoundController";
        this._entityType = "ExampleEntity";
        this._method = "CreateExampleEntity";
        this._parameters = { entityData: entityData };
        this._isAction = true;
        this._returnType = null;
        this._isReturnTypeCollection = false;
        
      }
  }

  export class UpdateExampleEntityResponse extends DataServiceResponse {
    public result: boolean;
  }

  export class UpdateExampleEntityRequest<TResponse extends UpdateExampleEntityResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(unusualEntityId: number, updatedEntity: Entities.ExampleEntity) {
        super();

        this._entitySet = "BoundController";
        this._entityType = "ExampleEntity";
        this._method = "UpdateExampleEntity";
        this._parameters = { updatedEntity: updatedEntity };
        this._isAction = true;
        this._returnType = null;
        this._isReturnTypeCollection = false;
        this._keys = { UnusualEntityId: unusualEntityId };
      }
  }

  export class DeleteExampleEntityResponse extends DataServiceResponse {
    public result: boolean;
  }

  export class DeleteExampleEntityRequest<TResponse extends DeleteExampleEntityResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor(unusualEntityId: number) {
        super();

        this._entitySet = "BoundController";
        this._entityType = "ExampleEntity";
        this._method = "DeleteExampleEntity";
        this._parameters = {  };
        this._isAction = true;
        this._returnType = null;
        this._isReturnTypeCollection = false;
        this._keys = { UnusualEntityId: unusualEntityId };
      }
  }

  export class GetAllExampleEntitiesResponse extends DataServiceResponse {
    public result: Entities.ExampleEntity[];
  }

  export class GetAllExampleEntitiesRequest<TResponse extends GetAllExampleEntitiesResponse> extends DataServiceRequest<TResponse> {
    /**
     * Constructor
     */
      public constructor() {
        super();

        this._entitySet = "BoundController";
        this._entityType = "ExampleEntity";
        this._method = "GetAllExampleEntities";
        this._parameters = {  };
        this._isAction = false;
        this._returnType = Entities.ExampleEntity;
        this._isReturnTypeCollection = true;
        
      }
  }

}
