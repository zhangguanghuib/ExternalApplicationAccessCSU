System.register(["PosApi/Extend/Views/SearchView"], function (exports_1, context_1) {
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
    var SearchView, NavigateToExampleViewCommand;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (SearchView_1) {
                SearchView = SearchView_1;
            }
        ],
        execute: function () {
            NavigateToExampleViewCommand = (function (_super) {
                __extends(NavigateToExampleViewCommand, _super);
                function NavigateToExampleViewCommand(context) {
                    var _this = _super.call(this, context) || this;
                    _this.id = "navigateToExampleViewCommand";
                    _this.label = "Navigate to Full System Example View";
                    _this.extraClass = "iconGo";
                    return _this;
                }
                NavigateToExampleViewCommand.prototype.init = function (state) {
                    this.canExecute = true;
                    this.isVisible = true;
                };
                NavigateToExampleViewCommand.prototype.execute = function () {
                    this.context.navigator.navigate("ExampleView");
                };
                return NavigateToExampleViewCommand;
            }(SearchView.ProductSearchExtensionCommandBase));
            exports_1("default", NavigateToExampleViewCommand);
        }
    };
});
//# sourceMappingURL=C:/D/b/b1/ExternalApplicationAccessCSU/Pos/ViewExtensions/Search/NavigateToExampleViewCommand.js.map