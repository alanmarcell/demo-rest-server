'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyToken = exports.authenticateUser = exports.createUser = exports.seedUsers = undefined;

var authenticateUser = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
        var user, authUser, token;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        user = req.body;
                        _context.next = 4;
                        return UserApp.authenticateUserPtz(user);

                    case 4:
                        authUser = _context.sent;

                        if (authUser) {
                            _context.next = 7;
                            break;
                        }

                        return _context.abrupt('return', res.json({ success: false, message: 'Authentication failed. User not found.' }));

                    case 7:
                        token = _jsonwebtoken2.default.sign(user, _constants.TOKEN_SECRET, {
                            expiresIn: expiresIn // expires in 60 seconds
                        });

                        res.json({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token,
                            expiresIn: expiresIn
                        });
                        _context.next = 15;
                        break;

                    case 11:
                        _context.prev = 11;
                        _context.t0 = _context['catch'](0);

                        (0, _index.log)(_context.t0);
                        res.send({ message: 'AUTH_CONTROLLER _|_' });

                    case 15:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 11]]);
    }));

    return function authenticateUser(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var seedUsers = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        try {
                            // const result = await createConnection();
                            res.send({ message: 'Sedado' });
                        } catch (e) {
                            (0, _index.log)(e);
                            res.send({ error: 'error in your request' });
                        }

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function seedUsers(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var createUser = function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(req, res) {
        var user, result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        user = req.body;
                        _context3.next = 4;
                        return UserApp.createUser(user);

                    case 4:
                        result = _context3.sent;

                        res.send({ message: result });
                        _context3.next = 12;
                        break;

                    case 8:
                        _context3.prev = 8;
                        _context3.t0 = _context3['catch'](0);

                        (0, _index.log)(_context3.t0);
                        res.send({ message: _context3.t0 });

                    case 12:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 8]]);
    }));

    return function createUser(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _index = require('../index');

var _UserApp = require('../users/UserApp');

var UserApp = _interopRequireWildcard(_UserApp);

var _constants = require('./../config/constants');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
// import { createConnection } from '../core/BaseRepositoryPtz';


var expiresIn = 1000; // seconds
function verifyToken(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        _jsonwebtoken2.default.verify(token, _constants.TOKEN_SECRET, function (err, decoded) {
            if (err) {
                res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
}
exports.seedUsers = seedUsers;
exports.createUser = createUser;
exports.authenticateUser = authenticateUser;
exports.verifyToken = verifyToken;
//# sourceMappingURL=UserController.js.map
//# sourceMappingURL=UserController.js.map