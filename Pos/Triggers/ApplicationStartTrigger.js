System.register(["PosApi/Extend/Triggers/ApplicationTriggers", "knockout"], function (exports_1, context_1) {
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
    var Triggers, knockout_1, ApplicationStartTrigger;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Triggers_1) {
                Triggers = Triggers_1;
            },
            function (knockout_1_1) {
                knockout_1 = knockout_1_1;
            }
        ],
        execute: function () {
            ApplicationStartTrigger = (function (_super) {
                __extends(ApplicationStartTrigger, _super);
                function ApplicationStartTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                ApplicationStartTrigger.prototype.execute = function (options) {
                    this.context.logger.logInformational("Executing ApplicationStartTrigger at " + new Date().getTime() + ".");
                    knockout_1.default.bindingHandlers.__posStopExtensionBinding = {
                        init: function () {
                            return { controlsDescendantBindings: true };
                        }
                    };
                    return Promise.resolve();
                };
                return ApplicationStartTrigger;
            }(Triggers.ApplicationStartTrigger));
            exports_1("default", ApplicationStartTrigger);
        }
    };
});
//# sourceMappingURL=C:/D/b/b1/ExternalApplicationAccessCSU/Pos/Triggers/ApplicationStartTrigger.js.map