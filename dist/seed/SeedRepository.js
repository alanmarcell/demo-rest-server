'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.authenticateUserPtz = exports.getDb = exports.getUserApp = exports.createUser = undefined;

var createUser = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(user) {
        var db, userApp, authedUser, userArgs, createdPrd;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return getDb(_constants.DB_CONNECTION_STRING);

                    case 3:
                        db = _context2.sent;
                        userApp = getUserApp(db);
                        authedUser = {
                            ip: '',
                            dtCreated: new Date(),
                            user: {
                                displayName: 'teste',
                                id: 'teste',
                                email: 'teste',
                                userName: 'teste'
                            }
                        };
                        userArgs = {
                            userArgs: user,
                            authedUser: authedUser
                        };
                        _context2.next = 9;
                        return userApp.saveUser(userArgs);

                    case 9:
                        createdPrd = _context2.sent;
                        return _context2.abrupt('return', createdPrd);

                    case 13:
                        _context2.prev = 13;
                        _context2.t0 = _context2['catch'](0);

                        console.log('Seed Repository', _context2.t0);

                    case 16:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 13]]);
    }));

    return function createUser(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var authenticateUserPtz = function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(user) {
        var db, userApp, authedUser, form, userArgs, createdPrd;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return getDb(_constants.DB_CONNECTION_STRING);

                    case 3:
                        db = _context3.sent;
                        userApp = getUserApp(db);
                        authedUser = {
                            ip: '',
                            dtCreated: new Date(),
                            user: {
                                displayName: 'teste',
                                id: 'teste',
                                email: 'teste',
                                userName: 'teste'
                            }
                        };
                        form = {
                            userNameOrEmail: user.userNameOrEmail,
                            password: user.password.toString()
                        };
                        userArgs = {
                            form: form,
                            authedUser: authedUser
                        };
                        _context3.next = 10;
                        return userApp.authUser(userArgs);

                    case 10:
                        createdPrd = _context3.sent;
                        return _context3.abrupt('return', createdPrd);

                    case 14:
                        _context3.prev = 14;
                        _context3.t0 = _context3['catch'](0);

                        console.log('authUser', _context3.t0);

                    case 17:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 14]]);
    }));

    return function authenticateUserPtz(_x3) {
        return _ref3.apply(this, arguments);
    };
}();

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _mongodb = require('mongodb');

var _ptzUserApp = require('ptz-user-app');

var _ptzUserRepository = require('ptz-user-repository');

var _constants = require('../config/constants');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_dotenv2.default.config();

var getDb = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dbConnectionString) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _mongodb.MongoClient.connect(_constants.DB_CONNECTION_STRING);

                    case 2:
                        return _context.abrupt('return', _context.sent);

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getDb(_x) {
        return _ref.apply(this, arguments);
    };
}();
var getUserApp = function getUserApp(db) {
    return new _ptzUserApp.UserApp({ userRepository: new _ptzUserRepository.UserRepository(db), log: _index.log });
};
exports.createUser = createUser;
exports.getUserApp = getUserApp;
exports.getDb = getDb;
exports.authenticateUserPtz = authenticateUserPtz;
//# sourceMappingURL=SeedRepository.js.map
//# sourceMappingURL=SeedRepository.js.map