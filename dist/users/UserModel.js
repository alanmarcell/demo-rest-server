"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserModel = function () {
    function UserModel(userModel) {
        _classCallCheck(this, UserModel);

        this.userModel = userModel;
    }

    _createClass(UserModel, [{
        key: "name",
        get: function get() {
            return this.userModel.name;
        }
    }, {
        key: "password",
        get: function get() {
            return this.userModel.password;
        }
    }, {
        key: "admin",
        get: function get() {
            return this.userModel.admin;
        }
    }]);

    return UserModel;
}();

Object.seal(UserModel);
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map
//# sourceMappingURL=UserModel.js.map