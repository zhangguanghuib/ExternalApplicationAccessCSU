System.register(["PosApi/Extend/Triggers/TransactionTriggers", "PosApi/Consume/Dialogs", "PosApi/Consume/Peripherals"], function (exports_1, context_1) {
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
    var Triggers, Dialogs_1, Peripherals_1, PostCheckoutPrintFileTrigger;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Triggers_1) {
                Triggers = Triggers_1;
            },
            function (Dialogs_1_1) {
                Dialogs_1 = Dialogs_1_1;
            },
            function (Peripherals_1_1) {
                Peripherals_1 = Peripherals_1_1;
            }
        ],
        execute: function () {
            PostCheckoutPrintFileTrigger = (function (_super) {
                __extends(PostCheckoutPrintFileTrigger, _super);
                function PostCheckoutPrintFileTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PostCheckoutPrintFileTrigger.prototype.execute = function (options) {
                    var _this = this;
                    var dialogOptions = {
                        message: "Would you like to print the transaction receipt in a file?",
                        button1: {
                            id: "YES_BUTTON",
                            label: "Yes",
                            isPrimary: false,
                            result: "DO_SAVE"
                        },
                        button2: {
                            id: "NO_BUTTON",
                            label: "No",
                            isPrimary: true,
                            result: "DO_NOT_SAVE"
                        }
                    };
                    var showMessageRequest = new Dialogs_1.ShowMessageDialogClientRequest(dialogOptions);
                    return this.context.runtime.executeAsync(showMessageRequest).then(function (result) {
                        var _a, _b;
                        if (result.canceled || ((_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.dialogResult) === dialogOptions.button2.result) {
                            return Promise.resolve();
                        }
                        var lines = options.salesOrder.SalesLines.map(function (salesLine) {
                            return "Line Id: ".concat(salesLine.LineId, " - Product Id: ").concat(salesLine.ProductId, " - Total Amount: ").concat(salesLine.TotalAmount);
                        });
                        var printRequest = {
                            Lines: lines,
                            FileName: options.salesOrder.Id + ".txt"
                        };
                        var printFileRequest = new Peripherals_1.HardwareStationDeviceActionRequest("FILEPRINTER", "Print", printRequest);
                        return _this.context.runtime.executeAsync(printFileRequest)
                            .then(function () { return; })
                            .catch(function (reason) {
                            return Promise.reject(reason);
                        });
                    });
                };
                return PostCheckoutPrintFileTrigger;
            }(Triggers.PostCartCheckoutTrigger));
            exports_1("default", PostCheckoutPrintFileTrigger);
        }
    };
});
//# sourceMappingURL=C:/D/b/b1/ExternalApplicationAccessCSU/Pos/Triggers/PostCheckoutPrintFileTrigger.js.map