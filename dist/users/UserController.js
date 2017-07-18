'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserApp = exports.verifyToken = exports.authenticateUser = exports.createUser = undefined;

// tslint:disable-next-line:max-line-length
var verifyToken = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res, next) {
        var token, authedUser, userApp, verifyArgs, toAuth;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        token = req.body.token || req.query.token || req.headers['x-access-token'];

                        if (token) {
                            _context2.next = 3;
                            break;
                        }

                        return _context2.abrupt('return', res.status(403).send({ success: false, message: 'No token provided.' }));

                    case 3:
                        authedUser = getAuthedBy(req.originalUrl);
                        _context2.next = 6;
                        return getUserApp();

                    case 6:
                        userApp = _context2.sent;
                        verifyArgs = { token: token, authedUser: authedUser };
                        _context2.next = 10;
                        return userApp.verifyAuthToken(verifyArgs);

                    case 10:
                        toAuth = _context2.sent;

                        if (toAuth) {
                            _context2.next = 13;
                            break;
                        }

                        return _context2.abrupt('return', res.json({ success: false, message: 'Failed to authenticate token.' }));

                    case 13:
                        req.decoded = toAuth;
                        next();

                    case 15:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function verifyToken(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
    };
}();

var authenticateUser = function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(req, res) {
        var userApp, authedUser, form, userArgs, token;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return getUserApp();

                    case 3:
                        userApp = _context3.sent;
                        authedUser = getAuthedBy(req.originalUrl);
                        form = {
                            userNameOrEmail: req.body.userNameOrEmail,
                            password: req.body.password.toString()
                        };
                        userArgs = {
                            form: form,
                            authedUser: authedUser
                        };
                        _context3.next = 9;
                        return userApp.getAuthToken(userArgs);

                    case 9:
                        token = _context3.sent;

                        if (token.user) {
                            _context3.next = 12;
                            break;
                        }

                        return _context3.abrupt('return', res.json({ success: false, message: 'Authentication failed. User not found.' }));

                    case 12:
                        res.json({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token.authToken,
                            expiresIn: expiresIn
                        });
                        _context3.next = 18;
                        break;

                    case 15:
                        _context3.prev = 15;
                        _context3.t0 = _context3['catch'](0);

                        res.send({ message: _context3.t0 });

                    case 18:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 15]]);
    }));

    return function authenticateUser(_x4, _x5) {
        return _ref3.apply(this, arguments);
    };
}();

var _ptzUserApp = require('@alanmarcell/ptz-user-app');

var _ptzUserRepository = require('@alanmarcell/ptz-user-repository');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _constants = require('../config/constants');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var expiresIn = 1000; // seconds
var getAuthedBy = function getAuthedBy(ip, user) {
    return {
        ip: ip,
        dtCreated: new Date(),
        user: user || {
            displayName: 'Unknown User',
            id: '0',
            email: 'Unknown User',
            userName: 'Unknown User'
        }
    };
};
var getUserApp = function () {
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
                        return _context.abrupt('return', (0, _ptzUserApp.createApp)({ userRepository: userRepository, log: _index.log }));

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getUserApp() {
        return _ref.apply(this, arguments);
    };
}();
var createUser = _ramda2.default.curry(function () {
    var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(req, res) {
        var user, userApp, authedUser, userArgs, result;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        _context4.prev = 0;
                        user = req.body;
                        _context4.next = 4;
                        return getUserApp();

                    case 4:
                        userApp = _context4.sent;
                        authedUser = getAuthedBy(req.originalUrl);
                        userArgs = {
                            userArgs: user,
                            authedUser: authedUser
                        };
                        _context4.next = 9;
                        return userApp.saveUser(userArgs);

                    case 9:
                        result = _context4.sent;

                        res.json({ success: true, message: result });
                        _context4.next = 16;
                        break;

                    case 13:
                        _context4.prev = 13;
                        _context4.t0 = _context4['catch'](0);

                        res.send({ message: _context4.t0 });

                    case 16:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined, [[0, 13]]);
    }));

    return function (_x6, _x7) {
        return _ref4.apply(this, arguments);
    };
}());
exports.createUser = createUser;
exports.authenticateUser = authenticateUser;
exports.verifyToken = verifyToken;
exports.getUserApp = getUserApp;
//# sourceMappingURL=UserController.js.map
//# sourceMappingURL=UserController.js.map