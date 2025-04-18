System.register(["PosApi/Create/Views", "./ExampleViewModel", "PosApi/Consume/Controls", "PosApi/TypeExtensions"], function (exports_1, context_1) {
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
    var Views, ExampleViewModel_1, Controls_1, TypeExtensions_1, ExampleView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Views_1) {
                Views = Views_1;
            },
            function (ExampleViewModel_1_1) {
                ExampleViewModel_1 = ExampleViewModel_1_1;
            },
            function (Controls_1_1) {
                Controls_1 = Controls_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            ExampleView = (function (_super) {
                __extends(ExampleView, _super);
                function ExampleView(context) {
                    var _this = this;
                    var config = {
                        title: context.resources.getString("string_0001"),
                        commandBar: {
                            commands: [
                                {
                                    name: "Create",
                                    label: context.resources.getString("string_2001"),
                                    icon: Views.Icons.Add,
                                    isVisible: true,
                                    canExecute: true,
                                    execute: function (args) {
                                        _this.viewModel.createExampleEntity().then(function (entityCreated) {
                                            if (entityCreated) {
                                                _this.dataList.data = _this.viewModel.loadedData;
                                            }
                                        });
                                    }
                                },
                                {
                                    name: "Edit",
                                    label: context.resources.getString("string_2002"),
                                    icon: Views.Icons.Edit,
                                    isVisible: true,
                                    canExecute: false,
                                    execute: function (args) {
                                        _this.state.isProcessing = true;
                                        _this.viewModel.editExampleEntity().then(function (editsMade) {
                                            if (editsMade) {
                                                _this.dataList.data = _this.viewModel.loadedData;
                                            }
                                            _this.state.isProcessing = false;
                                        });
                                    }
                                },
                                {
                                    name: "Delete",
                                    label: context.resources.getString("string_1006"),
                                    icon: Views.Icons.Delete,
                                    isVisible: true,
                                    canExecute: false,
                                    execute: function (args) {
                                        _this.state.isProcessing = true;
                                        _this.viewModel.deleteExampleEntity().then(function () {
                                            _this.dataList.data = _this.viewModel.loadedData;
                                            _this.state.isProcessing = false;
                                        });
                                    }
                                },
                                {
                                    name: "PingTest",
                                    label: context.resources.getString("string_3001"),
                                    icon: Views.Icons.LightningBolt,
                                    isVisible: true,
                                    canExecute: true,
                                    execute: function (args) {
                                        _this.state.isProcessing = true;
                                        _this.viewModel.runPingTest().then(function () {
                                            _this.state.isProcessing = false;
                                        });
                                    }
                                },
                                {
                                    name: "GetCartList",
                                    label: "Get Cart List",
                                    icon: Views.Icons.LightningBolt,
                                    isVisible: true,
                                    canExecute: true,
                                    execute: function (args) {
                                        _this.state.isProcessing = true;
                                        _this.viewModel.GetCartList().then(function () {
                                            _this.state.isProcessing = false;
                                        }).catch(function (error) {
                                            _this.state.isProcessing = false;
                                            return Promise.reject(error);
                                        });
                                    }
                                }
                            ]
                        }
                    };
                    _this = _super.call(this, context, config) || this;
                    _this.viewModel = new ExampleViewModel_1.default(context);
                    return _this;
                }
                ExampleView.prototype.dispose = function () {
                    TypeExtensions_1.ObjectExtensions.disposeAllProperties(this);
                };
                ExampleView.prototype.onReady = function (element) {
                    var _this = this;
                    var dataListOptions = {
                        interactionMode: Controls_1.DataListInteractionMode.SingleSelect,
                        data: this.viewModel.loadedData,
                        columns: [
                            {
                                title: this.context.resources.getString("string_1001"),
                                ratio: 40, collapseOrder: 1, minWidth: 100,
                                computeValue: function (data) { return data.IntData.toString(); }
                            },
                            {
                                title: this.context.resources.getString("string_1002"),
                                ratio: 60, collapseOrder: 2, minWidth: 100,
                                computeValue: function (data) { return data.StringData; }
                            }
                        ]
                    };
                    var dataListRootElem = element.querySelector("#exampleListView");
                    this.dataList = this.context.controlFactory.create(this.context.logger.getNewCorrelationId(), "DataList", dataListOptions, dataListRootElem);
                    this.dataList.addEventListener("SelectionChanged", function (eventData) {
                        _this.viewModel.seletionChanged(eventData.items);
                        _this.state.commandBar.commands.forEach(function (command) { return command.canExecute = (["Create", "PingTest"].some(function (name) { return name == command.name; }) ||
                            _this.viewModel.isItemSelected()); });
                    });
                    this.state.isProcessing = true;
                    this.viewModel.load().then(function () {
                        _this.dataList.data = _this.viewModel.loadedData;
                        _this.state.isProcessing = false;
                    });
                };
                return ExampleView;
            }(Views.CustomViewControllerBase));
            exports_1("default", ExampleView);
        }
    };
});
//# sourceMappingURL=C:/D/b/b1/ExternalApplicationAccessCSU/Pos/Views/ExampleView.js.map