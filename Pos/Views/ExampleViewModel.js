System.register(["../DataService/DataServiceRequests.g", "../Controls/Dialogs/Create/ExampleCreateDialogModule", "../Controls/Dialogs/Edit/ExampleEditDialogModule", "../Controls/Dialogs/Display/PingResultDialogModule", "PosApi/TypeExtensions"], function (exports_1, context_1) {
    "use strict";
    var Messages, ExampleCreateDialogModule_1, ExampleEditDialogModule_1, PingResultDialogModule_1, TypeExtensions_1, ExampleViewModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (ExampleCreateDialogModule_1_1) {
                ExampleCreateDialogModule_1 = ExampleCreateDialogModule_1_1;
            },
            function (ExampleEditDialogModule_1_1) {
                ExampleEditDialogModule_1 = ExampleEditDialogModule_1_1;
            },
            function (PingResultDialogModule_1_1) {
                PingResultDialogModule_1 = PingResultDialogModule_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            ExampleViewModel = (function () {
                function ExampleViewModel(context) {
                    var _this = this;
                    this._context = context;
                    this.title = context.resources.getString("string_0001");
                    this.loadedData = [];
                    this.isItemSelected = function () { return !TypeExtensions_1.ObjectExtensions.isNullOrUndefined(_this._selectedItem); };
                }
                ExampleViewModel.prototype.load = function () {
                    var _this = this;
                    return this._context.runtime
                        .executeAsync(new Messages.BoundController.GetAllExampleEntitiesRequest())
                        .then(function (response) {
                        if (!response.canceled) {
                            _this.loadedData = response.data.result;
                        }
                    });
                };
                ExampleViewModel.prototype.seletionChanged = function (items) {
                    this._context.logger.logInformational("Item selected:" + JSON.stringify(items));
                    this._selectedItem = TypeExtensions_1.ArrayExtensions.firstOrUndefined(items);
                    return Promise.resolve();
                };
                ExampleViewModel.prototype.createExampleEntity = function () {
                    var _this = this;
                    var dialog = new ExampleCreateDialogModule_1.default();
                    return dialog
                        .open()
                        .then(function (newItem) {
                        if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(newItem)) {
                            _this._context.logger.logInformational("Create canceled.");
                            return Promise.resolve(false);
                        }
                        _this._context.logger.logInformational("Item created with data: " + JSON.stringify(newItem));
                        return _this._context.runtime
                            .executeAsync(new Messages.BoundController.CreateExampleEntityRequest(newItem))
                            .then(function (response) {
                            if (!response.canceled && response.data.result != 0) {
                                _this._context.logger.logInformational("Create success for id: " + response.data.result);
                                return _this.load().then(function () { return true; });
                            }
                            _this._context.logger.logInformational("Create failed for entity: " + JSON.stringify(newItem));
                            return Promise.resolve(false);
                        });
                    }).catch(function (reason) {
                        _this._context.logger.logError("Error occurred in the create dialog: " + JSON.stringify(reason));
                        return Promise.resolve(false);
                    });
                };
                ExampleViewModel.prototype.editExampleEntity = function () {
                    var _this = this;
                    var dialog = new ExampleEditDialogModule_1.default();
                    return dialog
                        .open(this._selectedItem)
                        .then(function (updatedItem) {
                        if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(updatedItem)) {
                            _this._context.logger.logInformational("Update canceled for data: " + JSON.stringify(updatedItem));
                            return Promise.resolve(false);
                        }
                        _this._context.logger.logInformational("Updated data is: " + JSON.stringify(updatedItem));
                        return _this._context.runtime
                            .executeAsync(new Messages.BoundController.UpdateExampleEntityRequest(updatedItem.UnusualEntityId, updatedItem))
                            .then(function (response) {
                            if (!response.canceled && response.data.result) {
                                _this._context.logger.logInformational("Update success for id: " + updatedItem.UnusualEntityId);
                                return _this.load().then(function () { return true; });
                            }
                            _this._context.logger.logInformational("Update failed for id: " + updatedItem.UnusualEntityId);
                            return Promise.resolve(false);
                        });
                    }).catch(function (reason) {
                        _this._context.logger.logError("Error occurred in the edit dialog: " + JSON.stringify(reason));
                        return Promise.resolve(false);
                    });
                };
                ExampleViewModel.prototype.deleteExampleEntity = function () {
                    var _this = this;
                    return this._context.runtime
                        .executeAsync(new Messages.BoundController.DeleteExampleEntityRequest(this._selectedItem.UnusualEntityId))
                        .then(function (response) {
                        if (!response.canceled && response.data.result) {
                            _this._context.logger.logInformational("Delete success for id: " + _this._selectedItem.UnusualEntityId);
                            return _this.load();
                        }
                        _this._context.logger.logInformational("Delete failed for id " + _this._selectedItem.UnusualEntityId);
                        return Promise.resolve();
                    });
                };
                ExampleViewModel.prototype.runPingTest = function () {
                    var _this = this;
                    return this._context.runtime
                        .executeAsync(new Messages.StoreOperations.SimplePingGetRequest())
                        .then(function (pingGetResponse) {
                        return _this._context.runtime
                            .executeAsync(new Messages.StoreOperations.SimplePingPostRequest())
                            .then(function (pingPostResponse) {
                            var pingResultDialog = new PingResultDialogModule_1.default();
                            return pingResultDialog.open(pingGetResponse.data.result, pingPostResponse.data.result);
                        });
                    });
                };
                ExampleViewModel.prototype.GetCartList = function () {
                    return this._context.runtime
                        .executeAsync(new Messages.StoreOperations.GetOnlineShoppingCartListRequest())
                        .then(function (getOnlineShoppingCartListResponse) {
                        console.table(getOnlineShoppingCartListResponse.data.result);
                        return Promise.resolve();
                    }).catch(function (error) {
                        return Promise.reject(error);
                    });
                };
                return ExampleViewModel;
            }());
            exports_1("default", ExampleViewModel);
        }
    };
});
//# sourceMappingURL=C:/D/b/b1/ExternalApplicationAccessCSU/Pos/Views/ExampleViewModel.js.map