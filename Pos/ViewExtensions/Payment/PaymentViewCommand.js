System.register(["PosApi/Extend/Views/PaymentView", "PosApi/TypeExtensions"], function (exports_1, context_1) {
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
    var PaymentView, TypeExtensions_1, PaymentViewCommand;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (PaymentView_1) {
                PaymentView = PaymentView_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            PaymentViewCommand = (function (_super) {
                __extends(PaymentViewCommand, _super);
                function PaymentViewCommand(context) {
                    var _this = _super.call(this, context) || this;
                    _this.label = "Payment Command";
                    _this.id = "PaymentCommand";
                    _this.extraClass = "iconLightningBolt";
                    return _this;
                }
                PaymentViewCommand.prototype.init = function (state) {
                    if (state.tenderType.OperationId === Commerce.Proxy.Entities.RetailOperation.PayCard) {
                        this.isVisible = true;
                        this.canExecute = true;
                        this.context.logger.logInformational("Payment View Command - Payment card changed");
                        var cardTypePanel = document.querySelector('#CardTypePanel');
                        if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(cardTypePanel)) {
                            cardTypePanel.style.visibility = "visible";
                        }
                        var billingAddressPanel = document.querySelector('#BillingAddressPanel');
                        if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(billingAddressPanel)) {
                            billingAddressPanel.style.visibility = "hidden";
                        }
                    }
                    ;
                };
                PaymentViewCommand.prototype.execute = function () {
                };
                return PaymentViewCommand;
            }(PaymentView.PaymentViewExtensionCommandBase));
            exports_1("default", PaymentViewCommand);
        }
    };
});
//# sourceMappingURL=C:/D/b/b1/ExternalApplicationAccessCSU/Pos/ViewExtensions/Payment/PaymentViewCommand.js.map