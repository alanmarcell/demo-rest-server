'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.authenticateUserPtz = exports.createUser = undefined;

// const getDb = async (dbConnectionString: string) => await MongoClient.connect(DB_CONNECTION_STRING);
// const getUserApp = (db: Db) => new UserApp({ userRepository: new UserRepository(db), log });
var createUser = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(user) {
        var userRepository, userApp, authedUser, userArgs, createdPrd;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _ptzUserRepository.createUserRepository)(_constants.DB_CONNECTION_STRING, 'users');

                    case 2:
                        userRepository = _context.sent;
                        userApp = (0, _ptzUserApp.createApp)({ userRepository: userRepository, log: _index.log });
                        _context.prev = 4;

                        // const db = await getDb(DB_CONNECTION_STRING);
                        // const userApp = getUserApp(db);
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
                        _context.next = 9;
                        return userApp.saveUser(userArgs);

                    case 9:
                        createdPrd = _context.sent;
                        return _context.abrupt('return', createdPrd);

                    case 13:
                        _context.prev = 13;
                        _context.t0 = _context['catch'](4);

                        console.log('Seed Repository', _context.t0);

                    case 16:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[4, 13]]);
    }));

    return function createUser(_x) {
        return _ref.apply(this, arguments);
    };
}();

var authenticateUserPtz = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(user) {
        var userRepository, userApp, authedUser, form, userArgs, createdPrd;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return (0, _ptzUserRepository.createUserRepository)(_constants.DB_CONNECTION_STRING, 'users');

                    case 3:
                        userRepository = _context2.sent;
                        userApp = (0, _ptzUserApp.createApp)({ userRepository: userRepository });
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
                        _context2.next = 10;
                        return userApp.authUser(userArgs);

                    case 10:
                        createdPrd = _context2.sent;
                        return _context2.abrupt('return', createdPrd);

                    case 14:
                        _context2.prev = 14;
                        _context2.t0 = _context2['catch'](0);

                        console.log('authUser', _context2.t0);

                    case 17:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 14]]);
    }));

    return function authenticateUserPtz(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _ptzUserApp = require('@alanmarcell/ptz-user-app');

var _ptzUserRepository = require('@alanmarcell/ptz-user-repository');

var _constants = require('../config/constants');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_dotenv2.default.config();
exports.createUser = createUser;
exports.authenticateUserPtz = authenticateUserPtz;
//# sourceMappingURL=UserApp.js.map
//# sourceMappingURL=UserApp.js.map