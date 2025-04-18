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
    var Dialogs, TypeExtensions_1, ExampleCreateDialog;
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
            ExampleCreateDialog = (function (_super) {
                __extends(ExampleCreateDialog, _super);
                function ExampleCreateDialog() {
                    var _this = _super.call(this) || this;
                    _this._data = {
                        UnusualEntityId: -1,
                        IntData: 0,
                        StringData: "",
                        ExtensionProperties: []
                    };
                    return _this;
                }
                ExampleCreateDialog.prototype.onReady = function (element) {
                    var _this = this;
                    var intDataInput = element.querySelector("#intData");
                    intDataInput.onchange = function () { _this._data.IntData = intDataInput.valueAsNumber; };
                    var stringDataInput = element.querySelector("#stringData");
                    stringDataInput.onchange = function () { _this._data.StringData = stringDataInput.value; };
                };
                ExampleCreateDialog.prototype.open = function () {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        _this._resolve = resolve;
                        var option = {
                            title: "Create Example Entity",
                            button1: {
                                id: "buttonCreate",
                                label: _this.context.resources.getString("string_2001"),
                                isPrimary: true,
                                onClick: _this._buttonUpdateClickHandler.bind(_this)
                            },
                            button2: {
                                id: "buttonCancel",
                                label: _this.context.resources.getString("string_2004"),
                                onClick: _this._buttonCancelClickHandler.bind(_this)
                            },
                            onCloseX: function () { return _this._buttonCancelClickHandler(); }
                        };
                        _this.openDialog(option);
                    });
                    return promise;
                };
                ExampleCreateDialog.prototype._buttonUpdateClickHandler = function () {
                    this._resolvePromise(this._data);
                    return true;
                };
                ExampleCreateDialog.prototype._buttonCancelClickHandler = function () {
                    this._resolvePromise(null);
                    return true;
                };
                ExampleCreateDialog.prototype._resolvePromise = function (createResult) {
                    if (TypeExtensions_1.ObjectExtensions.isFunction(this._resolve)) {
                        this._resolve(createResult);
                        this._resolve = null;
                    }
                };
                return ExampleCreateDialog;
            }(Dialogs.ExtensionTemplatedDialogBase));
            exports_1("default", ExampleCreateDialog);
        }
    };
});
//# sourceMappingURL=C:/D/b/b1/ExternalApplicationAccessCSU/Pos/Controls/Dialogs/Create/ExampleCreateDialogModule.js.map