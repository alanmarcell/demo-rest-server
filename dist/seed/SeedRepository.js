'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDb = exports.getUserApp = exports.createUser = undefined;

var createUser = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(user) {
        var db, userApp, authedUser, newUser, userArgs, createdPrd;
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

                        (0, _index.log)('Repository user ', user);
                        authedUser = {
                            ip: '',
                            dtCreated: new Date(),
                            user: {
                                displayName: 'CREATE TEST',
                                id: 'ptz-user-app UserApp.seed()',
                                email: '',
                                userName: ''
                            }
                        };
                        newUser = {
                            userName: 'TESTE LALALA',
                            email: 'teste@live.com',
                            displayName: 'DYSPLAY LALALA'
                        };
                        userArgs = {
                            userArgs: newUser,
                            authedUser: authedUser
                        };
                        _context2.next = 11;
                        return userApp.saveUser(userArgs);

                    case 11:
                        createdPrd = _context2.sent;

                        (0, _index.log)('createdPrd', createdPrd);
                        _context2.next = 18;
                        break;

                    case 15:
                        _context2.prev = 15;
                        _context2.t0 = _context2['catch'](0);

                        console.log('Seed REpository', _context2.t0);

                    case 18:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 15]]);
    }));

    return function createUser(_x2) {
        return _ref2.apply(this, arguments);
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
//# sourceMappingURL=SeedRepository.js.map
//# sourceMappingURL=SeedRepository.js.map