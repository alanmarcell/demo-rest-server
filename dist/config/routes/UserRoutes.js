'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _AuthenticationController = require('./../../controllers/AuthenticationController');

var _AuthenticationController2 = _interopRequireDefault(_AuthenticationController);

var _UserController = require('./../../controllers/UserController');

var _UserController2 = _interopRequireDefault(_UserController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var router = _express2.default.Router();

var UserRoutes = function () {
    function UserRoutes() {
        _classCallCheck(this, UserRoutes);

        this.userController = new _UserController2.default();
        this.authenticationController = new _AuthenticationController2.default();
    }

    _createClass(UserRoutes, [{
        key: 'routes',
        get: function get() {
            var userController = this.userController;
            var authenticationController = this.authenticationController;
            router.post('/users', userController.create);
            router.use(authenticationController.verifyToken);
            router.get('/users', userController.retrieve);
            router.put('/users/:_id', userController.update);
            router.get('/users/:param', userController.findOne);
            router.delete('/users/:_id', userController.delete);
            return router;
        }
    }]);

    return UserRoutes;
}();

Object.seal(UserRoutes);
exports.default = UserRoutes;
//# sourceMappingURL=UserRoutes.js.map
//# sourceMappingURL=UserRoutes.js.map