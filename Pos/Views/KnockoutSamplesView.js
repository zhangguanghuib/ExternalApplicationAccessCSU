System.register(["PosApi/Create/Views", "PosApi/Consume/Controls", "PosApi/TypeExtensions", "knockout"], function (exports_1, context_1) {
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
    var Views, Controls, TypeExtensions_1, knockout_1, KnockoutSamplesView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Views_1) {
                Views = Views_1;
            },
            function (Controls_1) {
                Controls = Controls_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (knockout_1_1) {
                knockout_1 = knockout_1_1;
            }
        ],
        execute: function () {
            KnockoutSamplesView = (function (_super) {
                __extends(KnockoutSamplesView, _super);
                function KnockoutSamplesView(context) {
                    var _this = _super.call(this, context) || this;
                    _this._texts = [
                        "This view is using knockout on the version specified in the csproj (except the data list control).",
                        "It only works because the manifest has declared the knockout dependency.",
                        "You can add the types file (.d.ts) manually to get IntelliSense."
                    ];
                    _this.viewText = knockout_1.default.observable(_this._texts[0]);
                    return _this;
                }
                KnockoutSamplesView.prototype.onReady = function (element) {
                    var _this = this;
                    var dataListDataSource = this._getDataListData();
                    var dataListOptions = {
                        columns: [
                            {
                                title: "Name",
                                ratio: 30,
                                collapseOrder: 3,
                                minWidth: 100,
                                computeValue: function (value) {
                                    return value.requestedWorkerName;
                                }
                            },
                            {
                                title: "Type",
                                ratio: 30,
                                collapseOrder: 1,
                                minWidth: 100,
                                computeValue: function (value) {
                                    return value.requestType;
                                }
                            },
                            {
                                title: "Status",
                                ratio: 40,
                                collapseOrder: 2,
                                minWidth: 100,
                                computeValue: function (value) {
                                    return value.requestStatus;
                                }
                            }
                        ],
                        data: dataListDataSource,
                        interactionMode: Controls.DataListInteractionMode.MultiSelect,
                        equalityComparer: function (left, right) { return left.requestId === right.requestId; }
                    };
                    var dataListRootElem = element.querySelector("#dataListSample");
                    this.dataList = this.context.controlFactory.create("", "DataList", dataListOptions, dataListRootElem);
                    this.dataList.addEventListener("SelectionChanged", function (eventData) {
                        _this._dataListSelectionChanged(eventData.items);
                    });
                    this.dataList.addEventListener("ItemInvoked", function (eventData) {
                        _this._dataListItemInvoked(eventData.item);
                    });
                    knockout_1.default.applyBindings(this, element);
                };
                KnockoutSamplesView.prototype.dispose = function () {
                    TypeExtensions_1.ObjectExtensions.disposeAllProperties(this);
                };
                KnockoutSamplesView.prototype.buttonClicked = function () {
                    this._texts = this._texts.slice(1).concat(this._texts[0]);
                    this.viewText(this._texts[0]);
                };
                KnockoutSamplesView.prototype._getDataListData = function () {
                    return [
                        {
                            requestId: 1,
                            requestDateTime: new Date(),
                            requestedWorkerName: "Allison Berker",
                            requestType: "Leave request",
                            requestStatus: "Approved"
                        },
                        {
                            requestId: 2,
                            requestDateTime: new Date(),
                            requestedWorkerName: "Bert Miner",
                            requestType: "Shift Swap",
                            requestStatus: "Pending"
                        },
                        {
                            requestId: 3,
                            requestDateTime: new Date(),
                            requestedWorkerName: "Greg Marchievsky",
                            requestType: "Shift Offer",
                            requestStatus: "Rejected"
                        },
                        {
                            requestId: 4,
                            requestDateTime: new Date(),
                            requestedWorkerName: "Bohdan Yevchenko",
                            requestType: "Vacation request",
                            requestStatus: "Approved"
                        }
                    ];
                };
                KnockoutSamplesView.prototype._dataListSelectionChanged = function (items) {
                    this.context.logger.logInformational("SelectionChanged: " + JSON.stringify(items));
                };
                KnockoutSamplesView.prototype._dataListItemInvoked = function (item) {
                    this.context.logger.logInformational("ItemInvoked " + JSON.stringify(item));
                };
                return KnockoutSamplesView;
            }(Views.CustomViewControllerBase));
            exports_1("default", KnockoutSamplesView);
        }
    };
});
//# sourceMappingURL=C:/D/b/b1/ExternalApplicationAccessCSU/Pos/Views/KnockoutSamplesView.js.map