System.register(["PosApi/Entities", "./DataServiceEntities.g", "PosApi/Consume/DataService"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Entities_1, DataServiceEntities_g_1, DataService_1, StoreOperations, BoundController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (DataServiceEntities_g_1_1) {
                DataServiceEntities_g_1 = DataServiceEntities_g_1_1;
            },
            function (DataService_1_1) {
                DataService_1 = DataService_1_1;
            }
        ],
        execute: function () {
            exports_1("ProxyEntities", Entities_1.ProxyEntities);
            exports_1("Entities", DataServiceEntities_g_1.Entities);
            (function (StoreOperations) {
                var OverrideCartLinePriceResponse = (function (_super) {
                    __extends(OverrideCartLinePriceResponse, _super);
                    function OverrideCartLinePriceResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return OverrideCartLinePriceResponse;
                }(DataService_1.DataServiceResponse));
                StoreOperations.OverrideCartLinePriceResponse = OverrideCartLinePriceResponse;
                var OverrideCartLinePriceRequest = (function (_super) {
                    __extends(OverrideCartLinePriceRequest, _super);
                    function OverrideCartLinePriceRequest(cartId, lineId, newPrice) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "";
                        _this._entityType = "";
                        _this._method = "OverrideCartLinePrice";
                        _this._parameters = { cartId: cartId, lineId: lineId, newPrice: newPrice };
                        _this._isAction = true;
                        _this._returnType = Entities_1.ProxyEntities.CartClass;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return OverrideCartLinePriceRequest;
                }(DataService_1.DataServiceRequest));
                StoreOperations.OverrideCartLinePriceRequest = OverrideCartLinePriceRequest;
                var SimplePingPostResponse = (function (_super) {
                    __extends(SimplePingPostResponse, _super);
                    function SimplePingPostResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return SimplePingPostResponse;
                }(DataService_1.DataServiceResponse));
                StoreOperations.SimplePingPostResponse = SimplePingPostResponse;
                var SimplePingPostRequest = (function (_super) {
                    __extends(SimplePingPostRequest, _super);
                    function SimplePingPostRequest() {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "";
                        _this._entityType = "";
                        _this._method = "SimplePingPost";
                        _this._parameters = {};
                        _this._isAction = true;
                        _this._returnType = null;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return SimplePingPostRequest;
                }(DataService_1.DataServiceRequest));
                StoreOperations.SimplePingPostRequest = SimplePingPostRequest;
                var GetOnlineShoppingCartListResponse = (function (_super) {
                    __extends(GetOnlineShoppingCartListResponse, _super);
                    function GetOnlineShoppingCartListResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return GetOnlineShoppingCartListResponse;
                }(DataService_1.DataServiceResponse));
                StoreOperations.GetOnlineShoppingCartListResponse = GetOnlineShoppingCartListResponse;
                var GetOnlineShoppingCartListRequest = (function (_super) {
                    __extends(GetOnlineShoppingCartListRequest, _super);
                    function GetOnlineShoppingCartListRequest() {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "";
                        _this._entityType = "";
                        _this._method = "GetOnlineShoppingCartList";
                        _this._parameters = {};
                        _this._isAction = true;
                        _this._returnType = Entities_1.ProxyEntities.CartClass;
                        _this._isReturnTypeCollection = true;
                        return _this;
                    }
                    return GetOnlineShoppingCartListRequest;
                }(DataService_1.DataServiceRequest));
                StoreOperations.GetOnlineShoppingCartListRequest = GetOnlineShoppingCartListRequest;
                var GetCartByIdResponse = (function (_super) {
                    __extends(GetCartByIdResponse, _super);
                    function GetCartByIdResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return GetCartByIdResponse;
                }(DataService_1.DataServiceResponse));
                StoreOperations.GetCartByIdResponse = GetCartByIdResponse;
                var GetCartByIdRequest = (function (_super) {
                    __extends(GetCartByIdRequest, _super);
                    function GetCartByIdRequest(id) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "";
                        _this._entityType = "";
                        _this._method = "GetCartById";
                        _this._parameters = { id: id };
                        _this._isAction = true;
                        _this._returnType = Entities_1.ProxyEntities.CartClass;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return GetCartByIdRequest;
                }(DataService_1.DataServiceRequest));
                StoreOperations.GetCartByIdRequest = GetCartByIdRequest;
                var SearchInventoryDocumentLineResponse = (function (_super) {
                    __extends(SearchInventoryDocumentLineResponse, _super);
                    function SearchInventoryDocumentLineResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return SearchInventoryDocumentLineResponse;
                }(DataService_1.DataServiceResponse));
                StoreOperations.SearchInventoryDocumentLineResponse = SearchInventoryDocumentLineResponse;
                var SearchInventoryDocumentLineRequest = (function (_super) {
                    __extends(SearchInventoryDocumentLineRequest, _super);
                    function SearchInventoryDocumentLineRequest(searchCriteria) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "";
                        _this._entityType = "";
                        _this._method = "SearchInventoryDocumentLine";
                        _this._parameters = { searchCriteria: searchCriteria };
                        _this._isAction = true;
                        _this._returnType = Entities_1.ProxyEntities.InventoryInboundOutboundDocumentLineClass;
                        _this._isReturnTypeCollection = true;
                        return _this;
                    }
                    return SearchInventoryDocumentLineRequest;
                }(DataService_1.DataServiceRequest));
                StoreOperations.SearchInventoryDocumentLineRequest = SearchInventoryDocumentLineRequest;
                var SimplePingGetResponse = (function (_super) {
                    __extends(SimplePingGetResponse, _super);
                    function SimplePingGetResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return SimplePingGetResponse;
                }(DataService_1.DataServiceResponse));
                StoreOperations.SimplePingGetResponse = SimplePingGetResponse;
                var SimplePingGetRequest = (function (_super) {
                    __extends(SimplePingGetRequest, _super);
                    function SimplePingGetRequest() {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "";
                        _this._entityType = "";
                        _this._method = "SimplePingGet";
                        _this._parameters = {};
                        _this._isAction = false;
                        _this._returnType = null;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return SimplePingGetRequest;
                }(DataService_1.DataServiceRequest));
                StoreOperations.SimplePingGetRequest = SimplePingGetRequest;
            })(StoreOperations || (StoreOperations = {}));
            exports_1("StoreOperations", StoreOperations);
            (function (BoundController) {
                var CreateExampleEntityResponse = (function (_super) {
                    __extends(CreateExampleEntityResponse, _super);
                    function CreateExampleEntityResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return CreateExampleEntityResponse;
                }(DataService_1.DataServiceResponse));
                BoundController.CreateExampleEntityResponse = CreateExampleEntityResponse;
                var CreateExampleEntityRequest = (function (_super) {
                    __extends(CreateExampleEntityRequest, _super);
                    function CreateExampleEntityRequest(entityData) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "BoundController";
                        _this._entityType = "ExampleEntity";
                        _this._method = "CreateExampleEntity";
                        _this._parameters = { entityData: entityData };
                        _this._isAction = true;
                        _this._returnType = null;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return CreateExampleEntityRequest;
                }(DataService_1.DataServiceRequest));
                BoundController.CreateExampleEntityRequest = CreateExampleEntityRequest;
                var UpdateExampleEntityResponse = (function (_super) {
                    __extends(UpdateExampleEntityResponse, _super);
                    function UpdateExampleEntityResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return UpdateExampleEntityResponse;
                }(DataService_1.DataServiceResponse));
                BoundController.UpdateExampleEntityResponse = UpdateExampleEntityResponse;
                var UpdateExampleEntityRequest = (function (_super) {
                    __extends(UpdateExampleEntityRequest, _super);
                    function UpdateExampleEntityRequest(unusualEntityId, updatedEntity) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "BoundController";
                        _this._entityType = "ExampleEntity";
                        _this._method = "UpdateExampleEntity";
                        _this._parameters = { updatedEntity: updatedEntity };
                        _this._isAction = true;
                        _this._returnType = null;
                        _this._isReturnTypeCollection = false;
                        _this._keys = { UnusualEntityId: unusualEntityId };
                        return _this;
                    }
                    return UpdateExampleEntityRequest;
                }(DataService_1.DataServiceRequest));
                BoundController.UpdateExampleEntityRequest = UpdateExampleEntityRequest;
                var DeleteExampleEntityResponse = (function (_super) {
                    __extends(DeleteExampleEntityResponse, _super);
                    function DeleteExampleEntityResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return DeleteExampleEntityResponse;
                }(DataService_1.DataServiceResponse));
                BoundController.DeleteExampleEntityResponse = DeleteExampleEntityResponse;
                var DeleteExampleEntityRequest = (function (_super) {
                    __extends(DeleteExampleEntityRequest, _super);
                    function DeleteExampleEntityRequest(unusualEntityId) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "BoundController";
                        _this._entityType = "ExampleEntity";
                        _this._method = "DeleteExampleEntity";
                        _this._parameters = {};
                        _this._isAction = true;
                        _this._returnType = null;
                        _this._isReturnTypeCollection = false;
                        _this._keys = { UnusualEntityId: unusualEntityId };
                        return _this;
                    }
                    return DeleteExampleEntityRequest;
                }(DataService_1.DataServiceRequest));
                BoundController.DeleteExampleEntityRequest = DeleteExampleEntityRequest;
                var GetAllExampleEntitiesResponse = (function (_super) {
                    __extends(GetAllExampleEntitiesResponse, _super);
                    function GetAllExampleEntitiesResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return GetAllExampleEntitiesResponse;
                }(DataService_1.DataServiceResponse));
                BoundController.GetAllExampleEntitiesResponse = GetAllExampleEntitiesResponse;
                var GetAllExampleEntitiesRequest = (function (_super) {
                    __extends(GetAllExampleEntitiesRequest, _super);
                    function GetAllExampleEntitiesRequest() {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "BoundController";
                        _this._entityType = "ExampleEntity";
                        _this._method = "GetAllExampleEntities";
                        _this._parameters = {};
                        _this._isAction = false;
                        _this._returnType = DataServiceEntities_g_1.Entities.ExampleEntity;
                        _this._isReturnTypeCollection = true;
                        return _this;
                    }
                    return GetAllExampleEntitiesRequest;
                }(DataService_1.DataServiceRequest));
                BoundController.GetAllExampleEntitiesRequest = GetAllExampleEntitiesRequest;
            })(BoundController || (BoundController = {}));
            exports_1("BoundController", BoundController);
        }
    };
});
//# sourceMappingURL=C:/D/b/b1/ExternalApplicationAccessCSU/Pos/DataService/DataServiceRequests.g.js.map