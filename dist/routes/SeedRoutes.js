'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSeedRoutes = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _SeedController = require('../seed/SeedController');

var SeedController = _interopRequireWildcard(_SeedController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
function getSeedRoutes() {
    console.log('seed route');
    router.get('/seed', SeedController.seedUsers);
    return router;
}
exports.getSeedRoutes = getSeedRoutes;
//# sourceMappingURL=SeedRoutes.js.map
//# sourceMappingURL=SeedRoutes.js.map