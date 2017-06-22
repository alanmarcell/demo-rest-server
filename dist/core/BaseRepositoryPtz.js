'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDb = exports.getUserApp = exports.createConnection = undefined;

var createConnection = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        var db, userApp;
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
                        _context2.next = 7;
                        return userApp.seed();

                    case 7:
                        getRunningUrl(userApp);
                        _context2.next = 13;
                        break;

                    case 10:
                        _context2.prev = 10;
                        _context2.t0 = _context2['catch'](0);

                        console.log(_context2.t0);

                    case 13:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 10]]);
    }));

    return function createConnection() {
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

// log('Base REpository');
var PORT = 3011;
var getRunningUrl = function getRunningUrl(path) {
    return 'http://localhost:' + PORT + path;
};
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

createConnection();
exports.createConnection = createConnection;
exports.getUserApp = getUserApp;
exports.getDb = getDb;
//# sourceMappingURL=BaseRepositoryPtz.js.map
//# sourceMappingURL=BaseRepositoryPtz.js.map