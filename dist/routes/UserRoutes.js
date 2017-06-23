'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserRoutes = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _UserController = require('../users/UserController');

var UserController = _interopRequireWildcard(_UserController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
function getUserRoutes() {
    router.post('/users', UserController.createUser);
    router.post('/authenticateUser', UserController.authenticateUser);
    router.use(UserController.verifyToken);
    return router;
}
exports.getUserRoutes = getUserRoutes;
//# sourceMappingURL=UserRoutes.js.map
//# sourceMappingURL=UserRoutes.js.map