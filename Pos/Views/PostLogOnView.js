System.register(["PosApi/Create/Views", "PosApi/TypeExtensions", "knockout"], function (exports_1, context_1) {
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
    var Views, TypeExtensions_1, knockout_1, PostLogOnView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Views_1) {
                Views = Views_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (knockout_1_1) {
                knockout_1 = knockout_1_1;
            }
        ],
        execute: function () {
            PostLogOnView = (function (_super) {
                __extends(PostLogOnView, _super);
                function PostLogOnView(context, options) {
                    var _this = _super.call(this, context) || this;
                    _this.state.title = "PostLogOnView sample";
                    _this._options = options;
                    return _this;
                }
                PostLogOnView.prototype.onReady = function (element) {
                    var _this = this;
                    knockout_1.default.applyBindings(this, element);
                    var btn = document.getElementById("confirmBtn");
                    btn.addEventListener('click', function () {
                        _this._confirmLogin();
                    });
                };
                PostLogOnView.prototype.dispose = function () {
                    TypeExtensions_1.ObjectExtensions.disposeAllProperties(this);
                };
                PostLogOnView.prototype._confirmLogin = function () {
                    this._options.resolveCallback();
                };
                return PostLogOnView;
            }(Views.CustomViewControllerBase));
            exports_1("default", PostLogOnView);
        }
    };
});
//# sourceMappingURL=C:/D/b/b1/ExternalApplicationAccessCSU/Pos/Views/PostLogOnView.js.map