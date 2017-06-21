"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductModel = function () {
    function ProductModel(productModel) {
        _classCallCheck(this, ProductModel);

        this.productModel = productModel;
    }

    _createClass(ProductModel, [{
        key: "name",
        get: function get() {
            return this.productModel.name;
        }
    }, {
        key: "price",
        get: function get() {
            return this.productModel.price;
        }
    }, {
        key: "category",
        get: function get() {
            return this.productModel.category;
        }
    }]);

    return ProductModel;
}();

Object.seal(ProductModel);
exports.default = ProductModel;
//# sourceMappingURL=ProductModel.js.map
//# sourceMappingURL=ProductModel.js.map