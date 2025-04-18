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
    var Dialogs, TypeExtensions_1, ExampleEditDialog;
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
            ExampleEditDialog = (function (_super) {
                __extends(ExampleEditDialog, _super);
                function ExampleEditDialog() {
                    return _super.call(this) || this;
                }
                ExampleEditDialog.prototype.onReady = function (element) {
                    var _this = this;
                    var intDataInput = element.querySelector("#intData");
                    intDataInput.value = this._data.IntData.toString();
                    intDataInput.onchange = function () { _this._data.IntData = intDataInput.valueAsNumber; };
                    var stringDataInput = element.querySelector("#stringData");
                    stringDataInput.value = this._data.StringData;
                    stringDataInput.onchange = function () { _this._data.StringData = stringDataInput.value; };
                };
                ExampleEditDialog.prototype.open = function (dataToEdit) {
                    var _this = this;
                    this._data = dataToEdit;
                    var promise = new Promise(function (resolve, reject) {
                        _this._resolve = resolve;
                        var option = {
                            title: "Update Example Entity",
                            button1: {
                                id: "buttonUpdate",
                                label: _this.context.resources.getString("string_2002"),
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
                ExampleEditDialog.prototype._buttonUpdateClickHandler = function () {
                    this._resolvePromise(this._data);
                    return true;
                };
                ExampleEditDialog.prototype._buttonCancelClickHandler = function () {
                    this._resolvePromise(null);
                    return true;
                };
                ExampleEditDialog.prototype._resolvePromise = function (editResult) {
                    if (TypeExtensions_1.ObjectExtensions.isFunction(this._resolve)) {
                        this._resolve(editResult);
                        this._resolve = null;
                    }
                };
                return ExampleEditDialog;
            }(Dialogs.ExtensionTemplatedDialogBase));
            exports_1("default", ExampleEditDialog);
        }
    };
});
//# sourceMappingURL=C:/D/b/b1/ExternalApplicationAccessCSU/Pos/Controls/Dialogs/Edit/ExampleEditDialogModule.js.map