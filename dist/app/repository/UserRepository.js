'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UserSchema = require('./../dataAccess/schemas/UserSchema');

var _UserSchema2 = _interopRequireDefault(_UserSchema);

var _BaseRepository = require('./BaseRepository');

var _BaseRepository2 = _interopRequireDefault(_BaseRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserRepository = function (_RepositoryBase) {
    _inherits(UserRepository, _RepositoryBase);

    function UserRepository() {
        _classCallCheck(this, UserRepository);

        return _possibleConstructorReturn(this, (UserRepository.__proto__ || Object.getPrototypeOf(UserRepository)).call(this, _UserSchema2.default));
    }

    return UserRepository;
}(_BaseRepository2.default);

Object.seal(UserRepository);
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map
//# sourceMappingURL=UserRepository.js.map