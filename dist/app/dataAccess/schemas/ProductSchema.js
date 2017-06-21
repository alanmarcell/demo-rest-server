'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DataAccess = require('../DataAccess');

var _DataAccess2 = _interopRequireDefault(_DataAccess);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mongoose = _DataAccess2.default.mongooseInstance;
var mongooseConnection = _DataAccess2.default.mongooseConnection;

var ProductSchema = function () {
    function ProductSchema() {
        _classCallCheck(this, ProductSchema);
    }

    _createClass(ProductSchema, null, [{
        key: 'schema',
        get: function get() {
            var schema = mongoose.Schema({
                name: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                category: {
                    type: String,
                    required: true
                }
            });
            return schema;
        }
    }]);

    return ProductSchema;
}();

var schema = mongooseConnection.model('Products', ProductSchema.schema);
exports.default = schema;
//# sourceMappingURL=ProductSchema.js.map
//# sourceMappingURL=ProductSchema.js.map