'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ProductRepository = require('./../repository/ProductRepository');

var _ProductRepository2 = _interopRequireDefault(_ProductRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductBusiness = function () {
    function ProductBusiness() {
        _classCallCheck(this, ProductBusiness);

        this.productRepository = new _ProductRepository2.default();
    }

    _createClass(ProductBusiness, [{
        key: 'create',
        value: function create(item, callback) {
            this.productRepository.create(item, callback);
        }
    }, {
        key: 'retrieve',
        value: function retrieve(callback, start, items) {
            this.productRepository.retrieve(callback, start, items);
        }
        // tslint:disable-next-line:variable-name

    }, {
        key: 'update',
        value: function update(_id, item, callback) {
            var _this = this;

            this.productRepository.findById(_id, function (err, res) {
                if (err) callback(err, res);else _this.productRepository.update(res._id, item, callback);
            });
        }
        // tslint:disable-next-line:variable-name

    }, {
        key: 'delete',
        value: function _delete(_id, callback) {
            this.productRepository.delete(_id, callback);
        }
        // tslint:disable-next-line:variable-name

    }, {
        key: 'findById',
        value: function findById(_id, callback) {
            this.productRepository.findById(_id, callback);
        }
    }]);

    return ProductBusiness;
}();

Object.seal(ProductBusiness);
exports.default = ProductBusiness;
//# sourceMappingURL=ProductBusiness.js.map
//# sourceMappingURL=ProductBusiness.js.map