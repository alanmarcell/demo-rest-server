'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ProductRoutes = require('../routes/ProductRoutes');

var _ProductRoutes2 = _interopRequireDefault(_ProductRoutes);

var _UserRoutes = require('../routes/UserRoutes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var app = (0, _express2.default)();
var routes = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.t0 = app;
                        _context.next = 3;
                        return (0, _UserRoutes.getUserRoutes)();

                    case 3:
                        _context.t1 = _context.sent;

                        _context.t0.use.call(_context.t0, '/', _context.t1);

                        app.use('/', new _ProductRoutes2.default().routes);
                        return _context.abrupt('return', app);

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function routes() {
        return _ref.apply(this, arguments);
    };
}();
exports.default = routes;
//# sourceMappingURL=Routes.js.map
//# sourceMappingURL=Routes.js.map