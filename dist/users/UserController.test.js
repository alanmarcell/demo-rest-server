'use strict';

var _ptzUserApp = require('@alanmarcell/ptz-user-app');

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _ptzAssert = require('ptz-assert');

var _sinon = require('sinon');

var _UserController = require('./UserController');

var UserController = _interopRequireWildcard(_UserController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_dotenv2.default.config();
// tslint:disable-next-line:prefer-const
var req = void 0;
// tslint:disable-next-line:prefer-const
var res = void 0;
var userRepository = (0, _ptzUserApp.createUserRepoFake)();
beforeEach(function () {
    res = { json: (0, _sinon.spy)(), send: (0, _sinon.spy)() };
});
var getAuthToken = function getAuthToken(func) {
    return function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return {
                                authToken: 'authToken',
                                user: { userName: 'user', email: 'alanmarcell@live.com', displayName: 'Alan Marcell' },
                                errors: []
                            };

                        case 2:
                            return _context.abrupt('return', _context.sent);

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }();
};
var decode = function decode(u) {
    return u;
};
describe('User Controller', function () {
    it('authenticateUser', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        var body, authUser;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        authUser = function authUser() {
                            return { user: { username: 'testName' }, token: 'testToken' };
                        };

                        body = { userNameOrEmail: 'userNameOrEmail', password: 'password' };

                        req = { body: body };
                        // tslint:disable-next-line:max-line-length
                        _context2.next = 5;
                        return UserController.authenticateUser(getAuthToken({
                            authUserForm: decode,
                            authUser: authUser,
                            encode: decode
                        }), req, res);

                    case 5:
                        // console.log(response);
                        (0, _ptzAssert.ok)(res.json.calledOnce);
                        (0, _ptzAssert.ok)(res.json.lastCall.args[0].success);

                    case 7:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    })));
    it('createUser', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        var body, hashPass, createUser, isValid, updateUser, otherUsersWithSameUserNameOrEmail, saveUser;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        body = {
                            userName: 'alanMarcell',
                            email: 'angeloocana@gmail.com',
                            displayName: 'Angelo Ocana'
                        };

                        req = { body: body };
                        hashPass = function hashPass(u) {
                            return Promise.resolve(u);
                        }, createUser = function createUser(u) {
                            return u;
                        }, isValid = function isValid(u) {
                            return true;
                        }, updateUser = function updateUser(d, u) {
                            return u;
                        }, otherUsersWithSameUserNameOrEmail = function otherUsersWithSameUserNameOrEmail(d, u) {
                            return d;
                        };
                        saveUser = (0, _ptzUserApp.saveUser)({
                            userRepository: userRepository,
                            hashPass: hashPass,
                            createUser: createUser,
                            isValid: isValid,
                            updateUser: updateUser, otherUsersWithSameUserNameOrEmail: otherUsersWithSameUserNameOrEmail
                        });
                        _context3.next = 6;
                        return UserController.createUser(saveUser, req, res);

                    case 6:
                        (0, _ptzAssert.ok)(res.json.calledOnce);
                        (0, _ptzAssert.equal)(res.json.lastCall.args[0].message.userName, body.userName);
                        (0, _ptzAssert.equal)(res.json.lastCall.args[0].message.email, body.email);
                        (0, _ptzAssert.equal)(res.json.lastCall.args[0].message.displayName, body.displayName);

                    case 10:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    })));
    it('verifyToken', _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
        var body, next;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        // tslint:disable-next-line:max-line-length
                        body = { token: 'faketoken' };

                        req = { body: body };
                        next = (0, _sinon.spy)();
                        _context4.next = 5;
                        return UserController.verifyToken(decode, req, res, next);

                    case 5:
                        (0, _ptzAssert.ok)(next.calledOnce);

                    case 6:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    })));
});
//# sourceMappingURL=UserController.test.js.map
//# sourceMappingURL=UserController.test.js.map