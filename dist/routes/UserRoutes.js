'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserRoutes = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _UserApp = require('../users/UserApp');

var UserController = _interopRequireWildcard(_UserApp);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
function getUserRoutes() {
    router.post('/authenticateUser', UserController.authenticateUserPtz);
    router.use(UserController.verifyToken);
    router.post('/users', UserController.createUser);
    // router.get('/users', UserController.retrieveUsers);
    // router.put('/users/:_id', UserController.updateUser);
    // router.get('/users/:param', UserController.findUser);
    // router.delete('/users/:_id', UserController.deleteUser);
    return router;
}
exports.getUserRoutes = getUserRoutes;
//# sourceMappingURL=UserRoutes.js.map
//# sourceMappingURL=UserRoutes.js.map