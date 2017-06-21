'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../index');

var _ProductBusiness = require('./ProductBusiness');

var _ProductBusiness2 = _interopRequireDefault(_ProductBusiness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductController = function () {
    function ProductController() {
        _classCallCheck(this, ProductController);
    }

    _createClass(ProductController, [{
        key: 'create',
        value: function create(req, res) {
            try {
                var product = req.body;
                var productBusiness = new _ProductBusiness2.default();
                productBusiness.create(product, function (error) {
                    if (error) res.send({ error: 'error create controller' });else res.send({ success: 'success' });
                });
            } catch (e) {
                (0, _index.log)(e);
                res.send({ error: 'error in your request' });
            }
        }
    }, {
        key: 'update',
        value: function update(req, res) {
            try {
                var product = req.body;
                var id = req.params._id;
                var productBusiness = new _ProductBusiness2.default();
                productBusiness.update(id, product, function (error) {
                    if (error) res.send({ error: 'error update controller' });else res.send({ success: 'success' });
                });
            } catch (e) {
                (0, _index.log)(e);
                res.send({ error: 'error in your request' });
            }
        }
    }, {
        key: 'delete',
        value: function _delete(req, res) {
            try {
                var id = req.params._id;
                var productBusiness = new _ProductBusiness2.default();
                productBusiness.delete(id, function (error) {
                    if (error) res.send({ error: 'error delete controller' });else res.send({ success: 'success' });
                });
            } catch (e) {
                (0, _index.log)(e);
                res.send({ error: 'error in your request' });
            }
        }
    }, {
        key: 'retrieve',
        value: function retrieve(req, res) {
            var pagConfig = req.body;
            try {
                var productBusiness = new _ProductBusiness2.default();
                productBusiness.retrieve(function (error, result) {
                    if (error) res.send({ error: 'error retrieve' });else res.send(result);
                }, pagConfig.start, pagConfig.items);
            } catch (e) {
                (0, _index.log)(e);
                res.send({ error: 'error in your request' });
            }
        }
    }, {
        key: 'findById',
        value: function findById(req, res) {
            try {
                var id = req.params._id;
                var productBusiness = new _ProductBusiness2.default();
                productBusiness.findById(id, function (error, result) {
                    if (error) res.send({ error: 'error findById' });else res.send(result);
                });
            } catch (e) {
                (0, _index.log)(e);
                res.send({ error: 'error in your request' });
            }
        }
    }]);

    return ProductController;
}();

exports.default = ProductController;
//# sourceMappingURL=ProductController.js.map
//# sourceMappingURL=ProductController.js.map