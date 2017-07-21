'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserRoutes = undefined;

var _ptzUserApp = require('@alanmarcell/ptz-user-app');

var _ptzUserDomain = require('@alanmarcell/ptz-user-domain');

var _ptzUserRepository = require('@alanmarcell/ptz-user-repository');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _constants = require('../config/constants');

var _UserController = require('../users/UserController');

var UserController = _interopRequireWildcard(_UserController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
// import { log } from '../index';


var router = _express2.default.Router();
var getUserRoutes = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var userRepository;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _ptzUserRepository.createUserRepository)(_constants.DB_CONNECTION_STRING, 'users');

                    case 2:
                        userRepository = _context.sent;
                        _context.t0 = router;
                        _context.t1 = UserController;
                        _context.next = 7;
                        return (0, _ptzUserApp.saveUser)({ userRepository: userRepository });

                    case 7:
                        _context.t2 = _context.sent;
                        _context.t3 = _context.t1.createUser.call(_context.t1, _context.t2);

                        _context.t0.post.call(_context.t0, '/users', _context.t3);

                        _context.t4 = router;
                        _context.t5 = UserController;
                        _context.next = 14;
                        return (0, _ptzUserApp.getAuthToken)({ authUserForm: _ptzUserDomain.authUserForm,
                            authUser: (0, _ptzUserApp.authUser)(userRepository.getByUserNameOrEmail),
                            encode: (0, _ptzUserApp.cEncode)(_ptzUserApp.tokenSecret) });

                    case 14:
                        _context.t6 = _context.sent;
                        _context.t7 = _context.t5.authenticateUser.call(_context.t5, _context.t6);

                        _context.t4.post.call(_context.t4, '/authenticateUser', _context.t7);

                        _context.t8 = router;
                        _context.t9 = UserController;
                        _context.next = 21;
                        return (0, _ptzUserApp.verifyAuthToken)(_ptzUserApp.cDecode);

                    case 21:
                        _context.t10 = _context.sent;
                        _context.t11 = _context.t9.verifyToken.call(_context.t9, _context.t10);

                        _context.t8.use.call(_context.t8, _context.t11);

                        return _context.abrupt('return', router);

                    case 25:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getUserRoutes() {
        return _ref.apply(this, arguments);
    };
}();
exports.getUserRoutes = getUserRoutes;
//# sourceMappingURL=UserRoutes.js.map
//# sourceMappingURL=UserRoutes.js.map