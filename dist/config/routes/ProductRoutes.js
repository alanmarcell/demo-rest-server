'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ProductController = require('./../../controllers/ProductController');

var _ProductController2 = _interopRequireDefault(_ProductController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var router = _express2.default.Router();

var ProductRoutes = function () {
    function ProductRoutes() {
        _classCallCheck(this, ProductRoutes);

        this.productController = new _ProductController2.default();
    }

    _createClass(ProductRoutes, [{
        key: 'routes',
        get: function get() {
            var controller = this.productController;
            console.log('routes');
            router.get('/products', controller.retrieve);
            router.post('/products/', controller.retrieve);
            router.post('/product', controller.create);
            router.put('/product/:_id', controller.update);
            router.get('/product/:_id', controller.findById);
            router.delete('/product/:_id', controller.delete);
            return router;
        }
    }]);

    return ProductRoutes;
}();

Object.seal(ProductRoutes);
exports.default = ProductRoutes;
//# sourceMappingURL=ProductRoutes.js.map
//# sourceMappingURL=ProductRoutes.js.map