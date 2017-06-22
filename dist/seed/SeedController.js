'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.seedUsers = undefined;

var seedUsers = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
        var _res;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;

                        console.log('SEED_CONTROLLER');
                        // const param: string = req.params.param;
                        _context.next = 4;
                        return (0, _BaseRepositoryPtz.createConnection)();

                    case 4:
                        _res = _context.sent;

                        console.log(_res);
                        // UserBusiness.findUser(param, (error, result) => {
                        //   if (error) res.send({ error });
                        //   else res.send(result);
                        // });
                        _context.next = 12;
                        break;

                    case 8:
                        _context.prev = 8;
                        _context.t0 = _context['catch'](0);

                        (0, _index.log)(_context.t0);
                        res.send({ error: 'error in your request' });

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 8]]);
    }));

    return function seedUsers(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var _BaseRepositoryPtz = require('../core/BaseRepositoryPtz');

var _index = require('../index');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
// import { DB_CONNECTION_STRING } from '../config/constants';
// import { getDb, getUserApp } from '../core/BaseRepositoryPtz';


exports.seedUsers = seedUsers;
//# sourceMappingURL=SeedController.js.map
//# sourceMappingURL=SeedController.js.map