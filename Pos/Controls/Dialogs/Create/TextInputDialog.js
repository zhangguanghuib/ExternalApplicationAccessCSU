System.register(["PosApi/Consume/Dialogs", "PosApi/TypeExtensions"], function (exports_1, context_1) {
    "use strict";
    var Dialogs_1, TypeExtensions_1, TextInputDialog;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Dialogs_1_1) {
                Dialogs_1 = Dialogs_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            TextInputDialog = (function () {
                function TextInputDialog() {
                }
                TextInputDialog.prototype.show = function (context, message) {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        var textInputDialogOptions = {
                            title: context.resources.getString("string_55"),
                            subTitle: context.resources.getString("string_55"),
                            label: "Enter Text",
                            defaultText: "Hello World",
                            onBeforeClose: _this.onBeforeClose.bind(_this)
                        };
                        var dialogRequest = new Dialogs_1.ShowTextInputDialogClientRequest(textInputDialogOptions);
                        context.runtime.executeAsync(dialogRequest)
                            .then(function (result) {
                            if (!result.canceled) {
                                context.logger.logInformational("Text Entered in Box: " + result.data.result.value);
                                resolve(result.data.result.value);
                            }
                            else {
                                context.logger.logInformational("Text Dialog is canceled.");
                                resolve(null);
                            }
                        }).catch(function (reason) {
                            context.logger.logError(JSON.stringify(reason));
                            reject(reason);
                        });
                    });
                    return promise;
                };
                TextInputDialog.prototype.onBeforeClose = function (result) {
                    if (!result.canceled) {
                        if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(result.data)) {
                            if (result.data.value === "Hello World") {
                                var error = new Dialogs_1.ShowTextInputDialogError("Invalid input. Enter different value.", "New Hello World");
                                return Promise.reject(error);
                            }
                            else {
                                return Promise.resolve();
                            }
                        }
                        else {
                            var error = new Dialogs_1.ShowTextInputDialogError("Data result is null.");
                            return Promise.reject(error);
                        }
                    }
                    else {
                        var error = new Dialogs_1.ShowTextInputDialogError("Cannot close dialog. Must enter value");
                        return Promise.reject(error);
                    }
                };
                return TextInputDialog;
            }());
            exports_1("default", TextInputDialog);
        }
    };
});
//# sourceMappingURL=C:/D/b/b1/ExternalApplicationAccessCSU/Pos/Controls/Dialogs/Create/TextInputDialog.js.map