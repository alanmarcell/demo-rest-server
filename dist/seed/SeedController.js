'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createUser = exports.seedUsers = undefined;

var seedUsers = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;

                        console.log('SEED_CONTROLLER ___\\|/____');
                        // const param: string = req.params.param;
                        _context.next = 4;
                        return (0, _BaseRepositoryPtz.createConnection)();

                    case 4:
                        result = _context.sent;

                        res.send({ message: 'Sedado' });
                        console.log(result);
                        _context.next = 13;
                        break;

                    case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](0);

                        (0, _index.log)(_context.t0);
                        res.send({ error: 'error in your request' });

                    case 13:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 9]]);
    }));

    return function seedUsers(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var createUser = function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res) {
        var user, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;

                        console.log('CREATE_CONTROLLER ___\\|/____');
                        user = req.body;
                        _context2.next = 5;
                        return SeedRepository.createUser(user);

                    case 5:
                        result = _context2.sent;

                        console.log(result);
                        res.send({ message: 'result' + result });
                        _context2.next = 14;
                        break;

                    case 10:
                        _context2.prev = 10;
                        _context2.t0 = _context2['catch'](0);

                        (0, _index.log)(_context2.t0);
                        res.send({ message: '_|_' });

                    case 14:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[0, 10]]);
    }));

    return function createUser(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var _BaseRepositoryPtz = require('../core/BaseRepositoryPtz');

var _index = require('../index');

var _SeedRepository = require('../seed/SeedRepository');

var SeedRepository = _interopRequireWildcard(_SeedRepository);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
// import { DB_CONNECTION_STRING } from '../config/constants';
// import { getDb, getUserApp } from '../core/BaseRepositoryPtz';


exports.seedUsers = seedUsers;
exports.createUser = createUser;
//# sourceMappingURL=SeedController.js.map
//# sourceMappingURL=SeedController.js.map