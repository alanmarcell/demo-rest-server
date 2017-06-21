'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UserRepository = require('./../repository/UserRepository');

var _UserRepository2 = _interopRequireDefault(_UserRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserBusiness = function () {
    function UserBusiness() {
        _classCallCheck(this, UserBusiness);

        this.userRepository = new _UserRepository2.default();
    }

    _createClass(UserBusiness, [{
        key: 'create',
        value: function create(user, callback) {
            this.userRepository.create(user, callback);
        }
    }, {
        key: 'retrieve',
        value: function retrieve(callback) {
            this.userRepository.retrieve(callback);
        }
        // tslint:disable-next-line:variable-name

    }, {
        key: 'update',
        value: function update(_id, item, callback) {
            var _this = this;

            this.userRepository.findById(_id, function (err, res) {
                if (err) callback(err, res);else _this.userRepository.update(res._id, item, callback);
            });
        }
        // tslint:disable-next-line:variable-name

    }, {
        key: 'delete',
        value: function _delete(_id, callback) {
            this.userRepository.delete(_id, callback);
        }
        // tslint:disable-next-line:variable-name

    }, {
        key: 'findById',
        value: function findById(_id, callback) {
            this.userRepository.findById(_id, callback);
        }
    }, {
        key: 'findOne',
        value: function findOne(name, callback) {
            this.userRepository.findOne({ name: name }, callback);
        }
    }]);

    return UserBusiness;
}();

Object.seal(UserBusiness);
exports.default = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map
//# sourceMappingURL=UserBusiness.js.map