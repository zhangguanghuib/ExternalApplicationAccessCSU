System.register(["PosApi/Consume/Formatters", "PosApi/TypeExtensions"], function (exports_1, context_1) {
    "use strict";
    var Formatters_1, TypeExtensions_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Formatters_1_1) {
                Formatters_1 = Formatters_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            exports_1("default", (function (context) {
                return [
                    {
                        title: "Item ID",
                        computeValue: function (row) { return row.ItemId; },
                        ratio: 20,
                        collapseOrder: 3,
                        minWidth: 120
                    },
                    {
                        title: "Name",
                        computeValue: function (row) { return row.Name; },
                        ratio: 40,
                        collapseOrder: 2,
                        minWidth: 200
                    },
                    {
                        title: "Price",
                        computeValue: function (row) { return Formatters_1.CurrencyFormatter.toCurrency(row.Price); },
                        ratio: 20,
                        collapseOrder: 1,
                        minWidth: 100,
                        isRightAligned: true
                    },
                    {
                        title: "Version",
                        computeValue: function (row) {
                            var DEFAULT_VALUE = "n/a";
                            var commerceProperty = TypeExtensions_1.ArrayExtensions.firstOrUndefined(row.ExtensionProperties, function (prop) {
                                return prop.Key === "CONTOSO_PRODUCT_VERSION";
                            });
                            if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(commerceProperty)
                                || TypeExtensions_1.ObjectExtensions.isNullOrUndefined(commerceProperty.Value)
                                || TypeExtensions_1.StringExtensions.isNullOrWhitespace(commerceProperty.Value.StringValue)) {
                                return DEFAULT_VALUE;
                            }
                            else {
                                return commerceProperty.Value.StringValue;
                            }
                        },
                        ratio: 20,
                        collapseOrder: 4,
                        minWidth: 200,
                        isRightAligned: true
                    }
                ];
            }));
        }
    };
});
//# sourceMappingURL=C:/D/b/b1/ExternalApplicationAccessCSU/Pos/ViewExtensions/CustomProductSearchColumns.js.map