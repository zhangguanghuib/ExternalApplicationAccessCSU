System.register(["PosApi/Extend/Triggers/ApplicationTriggers"], function (exports_1, context_1) {
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
    var Triggers, PostLogOnTrigger;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Triggers_1) {
                Triggers = Triggers_1;
            }
        ],
        execute: function () {
            PostLogOnTrigger = (function (_super) {
                __extends(PostLogOnTrigger, _super);
                function PostLogOnTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PostLogOnTrigger.prototype.execute = function (options) {
                    var _this = this;
                    this.context.logger.logInformational("Executing PostLogOnTrigger with options " + JSON.stringify(options) + ".");
                    var promise = new Promise(function (resolve, reject) {
                        var options = {
                            resolveCallback: resolve,
                            rejectCallback: reject
                        };
                        _this.context.logger.logInformational("Navigating to PostLogOnView...");
                        _this.context.navigator.navigate("PostLogOnView", options);
                    });
                    promise.then(function (value) {
                        _this.context.logger.logInformational("Promise resolved");
                    });
                    return promise;
                };
                return PostLogOnTrigger;
            }(Triggers.PostLogOnTrigger));
            exports_1("default", PostLogOnTrigger);
        }
    };
});
//# sourceMappingURL=C:/D/b/b1/ExternalApplicationAccessCSU/Pos/Triggers/PostLogOnTrigger.js.map