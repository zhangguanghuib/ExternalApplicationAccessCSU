System.register(["PosApi/Consume/Peripherals", "PosApi/Extend/Views/InventoryDocumentShippingAndReceivingView", "../../DataService/DataServiceRequests.g", "../../Controls/Dialogs/Create/MessageDialog"], function (exports_1, context_1) {
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
    var Peripherals_1, InventoryDocument, Proxy, MessageDialog_1, ExportFullOrderListCommand;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Peripherals_1_1) {
                Peripherals_1 = Peripherals_1_1;
            },
            function (InventoryDocument_1) {
                InventoryDocument = InventoryDocument_1;
            },
            function (Proxy_1) {
                Proxy = Proxy_1;
            },
            function (MessageDialog_1_1) {
                MessageDialog_1 = MessageDialog_1_1;
            }
        ],
        execute: function () {
            ExportFullOrderListCommand = (function (_super) {
                __extends(ExportFullOrderListCommand, _super);
                function ExportFullOrderListCommand(context) {
                    var _this = _super.call(this, context) || this;
                    _this.label = "Export";
                    _this.id = "ExportInventoryOrderList";
                    _this.extraClass = "iconLightningBolt";
                    _this.SourceDocumentId = "";
                    _this.SourceDocumentTypeValue = 0;
                    return _this;
                }
                ExportFullOrderListCommand.prototype.init = function (state) {
                    this.isVisible = true;
                    this.canExecute = true;
                    this.SourceDocumentId = state.document.SourceDocument.DocumentId;
                    this.SourceDocumentTypeValue = state.document.SourceDocument.DocumentTypeValue;
                    console.log("ExportFullOrderListCommand - init");
                };
                ExportFullOrderListCommand.prototype.getUniqueExcelName = function () {
                    var timestamp = new Date().getTime();
                    var timestampString = timestamp.toString();
                    return "ExportedData_".concat(timestampString, ".xlsx");
                };
                ExportFullOrderListCommand.prototype.execute = function () {
                    var _this = this;
                    this.isProcessing = true;
                    var sourceDocumentLines = [];
                    var searchCriteria = {
                        SourceDocumentId: this.SourceDocumentId,
                        SourceDocumentTypeValue: this.SourceDocumentTypeValue
                    };
                    var request = new Proxy.StoreOperations.SearchInventoryDocumentLineRequest(searchCriteria);
                    this.context.runtime.executeAsync(request)
                        .then(function (response) {
                        if (response.data.result.length > 0) {
                            var inventoryInboundOutboundDocumentLines = response.data.result;
                            inventoryInboundOutboundDocumentLines.forEach(function (inventoryInboundOutboundDocumentLine) {
                                sourceDocumentLines.push(inventoryInboundOutboundDocumentLine.SourceDocumentLine);
                            });
                            console.table(sourceDocumentLines);
                        }
                    }).then(function () {
                        var exportInventoryDocumentLinesRequest = {
                            Lines: sourceDocumentLines,
                            FileName: _this.getUniqueExcelName()
                        };
                        var hardwareStatationDeviceActionRequest = new Peripherals_1.HardwareStationDeviceActionRequest("DATAEXPORT", "ExportToExcel", exportInventoryDocumentLinesRequest);
                        _this.context.runtime.executeAsync(hardwareStatationDeviceActionRequest).then(function (response) {
                            console.log(response.data.response);
                            _this.context.logger.logInformational("Hardware Station request executed successfully");
                            var exportedFolder = response.data.response;
                            var message = "Export the transfer order lines successfully, the exported file is in this folder: ".concat(exportedFolder);
                            MessageDialog_1.default.show(_this.context, message).then(function () {
                                _this.isProcessing = false;
                            });
                        }).catch(function (err) {
                            _this.context.logger.logInformational("Failure in executing Hardware Station request");
                            var message = "Something wrong happened when export the transder order lines via Hardware Station";
                            MessageDialog_1.default.show(_this.context, message).then(function () {
                                _this.isProcessing = false;
                                throw err;
                            });
                        });
                    });
                };
                return ExportFullOrderListCommand;
            }(InventoryDocument.InventoryDocumentShippingAndReceivingExtensionCommandBase));
            exports_1("default", ExportFullOrderListCommand);
        }
    };
});
//# sourceMappingURL=C:/D/b/b1/ExternalApplicationAccessCSU/Pos/ViewExtensions/InventoryDocumentShippingAndReceivingView/ExportFullOrderListCommand.js.map