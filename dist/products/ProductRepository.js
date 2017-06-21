'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BaseRepository2 = require('../core/BaseRepository');

var _BaseRepository3 = _interopRequireDefault(_BaseRepository2);

var _ProductSchema = require('./ProductSchema');

var _ProductSchema2 = _interopRequireDefault(_ProductSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductRepository = function (_BaseRepository) {
    _inherits(ProductRepository, _BaseRepository);

    function ProductRepository() {
        _classCallCheck(this, ProductRepository);

        return _possibleConstructorReturn(this, (ProductRepository.__proto__ || Object.getPrototypeOf(ProductRepository)).call(this, _ProductSchema2.default));
    }

    return ProductRepository;
}(_BaseRepository3.default);

Object.seal(ProductRepository);
exports.default = ProductRepository;
//# sourceMappingURL=ProductRepository.js.map
//# sourceMappingURL=ProductRepository.js.map