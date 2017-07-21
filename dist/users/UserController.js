'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyToken = exports.authenticateUser = exports.createUser = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// import { log } from '../index';
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
// tslint:disable-next-line:max-line-length
var verifyToken = _ramda2.default.curry(function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(verifyAuthToken, req, res, next) {
        var token, authedUser, verifyArgs, toAuth;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        token = req.body.token || req.query.token || req.headers['x-access-token'];

                        if (token) {
                            _context.next = 3;
                            break;
                        }

                        return _context.abrupt('return', res.status(403).send({ success: false, message: 'No token provided.' }));

                    case 3:
                        authedUser = getAuthedBy(req.originalUrl);
                        verifyArgs = { token: token, authedUser: authedUser };
                        _context.next = 7;
                        return verifyAuthToken(verifyArgs);

                    case 7:
                        toAuth = _context.sent;

                        if (toAuth) {
                            _context.next = 10;
                            break;
                        }

                        return _context.abrupt('return', res.json({ success: false, message: 'Failed to authenticate token.' }));

                    case 10:
                        req.decoded = toAuth;
                        next();

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
    };
}());
// tslint:disable-next-line:max-line-length
var authenticateUser = _ramda2.default.curry(function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(getAuthToken, req, res) {
        var authedUser, form, userArgs, token;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        authedUser = getAuthedBy(req.originalUrl);
                        form = {
                            userNameOrEmail: req.body.userNameOrEmail,
                            password: req.body.password.toString()
                        };
                        userArgs = {
                            form: form,
                            authedUser: authedUser
                        };
                        _context2.next = 6;
                        return getAuthToken(userArgs);

                    case 6:
                        token = _context2.sent;

                        if (token.user) {
                            _context2.next = 9;
                            break;
                        }

                        return _context2.abrupt('return', res.json({ success: false, message: 'Authentication failed. User not found.' }));

                    case 9:
                        res.json({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token.authToken,
                            expiresIn: expiresIn
                        });
                        _context2.next = 15;
                        break;

                    case 12:
                        _context2.prev = 12;
                        _context2.t0 = _context2['catch'](0);

                        res.send({ message: _context2.t0 });

                    case 15:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[0, 12]]);
    }));

    return function (_x5, _x6, _x7) {
        return _ref2.apply(this, arguments);
    };
}());
var createUser = _ramda2.default.curry(function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(saveUser, req, res) {
        var user, authedUser, userArgs, result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        user = req.body;
                        authedUser = getAuthedBy(req.originalUrl);
                        userArgs = {
                            userArgs: user,
                            authedUser: authedUser
                        };
                        _context3.next = 6;
                        return saveUser(userArgs);

                    case 6:
                        result = _context3.sent;

                        res.json({ success: true, message: result });
                        _context3.next = 14;
                        break;

                    case 10:
                        _context3.prev = 10;
                        _context3.t0 = _context3['catch'](0);

                        console.log(_context3.t0);
                        res.send({ message: _context3.t0 });

                    case 14:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined, [[0, 10]]);
    }));

    return function (_x8, _x9, _x10) {
        return _ref3.apply(this, arguments);
    };
}());
exports.createUser = createUser;
exports.authenticateUser = authenticateUser;
exports.verifyToken = verifyToken;
//# sourceMappingURL=UserController.js.map
//# sourceMappingURL=UserController.js.map