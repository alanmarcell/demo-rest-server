'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = undefined;

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _Routes = require('./routes/Routes');

var _Routes2 = _interopRequireDefault(_Routes);

var _ptzLogFile = require('ptz-log-file');

var _ptzLogFile2 = _interopRequireDefault(_ptzLogFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var log = exports.log = (0, _ptzLogFile2.default)({ dir: './logs' });
var env = process.env.NODE_ENV || 'developement';
_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    var app, PORT, renderIndex, server;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.prev = 0;
                    app = (0, _express2.default)();

                    log('Starting New server...');
                    PORT = process.env.PORT || 3010;

                    app.use((0, _cors2.default)());
                    app.use(_bodyParser2.default.urlencoded({ extended: false }));
                    app.use(_bodyParser2.default.json());
                    app.use((0, _morgan2.default)('dev'));
                    _context2.t0 = app;
                    _context2.next = 11;
                    return (0, _Routes2.default)();

                case 11:
                    _context2.t1 = _context2.sent;

                    _context2.t0.use.call(_context2.t0, '/api', _context2.t1);

                    renderIndex = function renderIndex(req, res) {
                        res.json({
                            error: req.url,
                            message: '404'
                        });
                    };

                    app.get('/*', renderIndex);
                    if (env === 'developement') {
                        app.use(function (error, req, res, next) {
                            res.status(error.status || 500);
                            res.json({
                                error: error,
                                message: req
                            });
                            next(res);
                        });
                    }
                    app.use(function (req, res, next) {
                        var error = new Error('Not Found' + req + res);
                        next(error);
                    });
                    app.use(function (error, res) {
                        res.status(error.status || 500);
                        res.json({
                            error: {},
                            message: error.message
                        });
                    });
                    _context2.next = 20;
                    return _http2.default.createServer(app);

                case 20:
                    server = _context2.sent;

                    app.listen(PORT, _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        _context.next = 2;
                                        return server.address();

                                    case 2:
                                        log('This express server is listening on port:' + PORT);

                                    case 3:
                                    case 'end':
                                        return _context.stop();
                                }
                            }
                        }, _callee, undefined);
                    })));
                    _context2.next = 27;
                    break;

                case 24:
                    _context2.prev = 24;
                    _context2.t2 = _context2['catch'](0);

                    log(_context2.t2);

                case 27:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee2, undefined, [[0, 24]]);
}))();
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map