System.register(["PosApi/Create/Dialogs", "PosApi/TypeExtensions"], function (exports_1, context_1) {
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
    var Dialogs, TypeExtensions_1, PingResultDialog;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Dialogs_1) {
                Dialogs = Dialogs_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            PingResultDialog = (function (_super) {
                __extends(PingResultDialog, _super);
                function PingResultDialog() {
                    return _super.call(this) || this;
                }
                PingResultDialog.prototype.onReady = function (element) {
                    var getPingResult = element.querySelector("#UnboundGetResult");
                    getPingResult.textContent = this._pingUnboundGetResult ? "Success!" : "Failed.";
                    var postPingResult = element.querySelector("#UnboundPostResult");
                    postPingResult.textContent = this._pingUnboundPostResult ? "Success!" : "Failed.";
                };
                PingResultDialog.prototype.open = function (pingUnboundGetResult, pingUnboundPostResult) {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        _this._resolve = resolve;
                        _this._pingUnboundGetResult = pingUnboundGetResult;
                        _this._pingUnboundPostResult = pingUnboundPostResult;
                        _this.openDialog({
                            title: "Ping Test Results",
                            button1: {
                                id: "buttonOk",
                                label: _this.context.resources.getString("string_2005"),
                                isPrimary: true,
                                onClick: _this._closeDialogHandler.bind(_this)
                            },
                            onCloseX: function () { return _this._closeDialogHandler(); }
                        });
                    });
                    return promise;
                };
                PingResultDialog.prototype._closeDialogHandler = function () {
                    this._resolvePromise();
                    return true;
                };
                PingResultDialog.prototype._resolvePromise = function () {
                    if (TypeExtensions_1.ObjectExtensions.isFunction(this._resolve)) {
                        this._resolve(null);
                        this._resolve = null;
                    }
                };
                return PingResultDialog;
            }(Dialogs.ExtensionTemplatedDialogBase));
            exports_1("default", PingResultDialog);
        }
    };
});
//# sourceMappingURL=C:/D/b/b1/ExternalApplicationAccessCSU/Pos/Controls/Dialogs/Display/PingResultDialogModule.js.map