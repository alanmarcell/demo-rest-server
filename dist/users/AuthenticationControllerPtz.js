'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyToken = exports.authenticateUserPtz = exports.authenticateUser = undefined;

var authenticateUserPtz = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
        var user, authUser, token;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        user = req.body;
                        _context.next = 4;
                        return SeedRepository.authenticateUserPtz(user);

                    case 4:
                        authUser = _context.sent;

                        if (authUser) {
                            _context.next = 7;
                            break;
                        }

                        return _context.abrupt('return', res.json({ success: false, message: 'Authentication failed. User not found.' }));

                    case 7:
                        token = _jsonwebtoken2.default.sign(user, _constants.TOKEN_SECRET, {
                            expiresIn: expiresIn // expires in 60 seconds
                        });

                        res.json({
                            success: true,
                            message: 'Enjoy your token!',
                            token: token,
                            expiresIn: expiresIn
                        });
                        _context.next = 15;
                        break;

                    case 11:
                        _context.prev = 11;
                        _context.t0 = _context['catch'](0);

                        (0, _index.log)(_context.t0);
                        res.send({ message: 'AUTH_CONTROLLER _|_' });

                    case 15:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 11]]);
    }));

    return function authenticateUserPtz(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _index = require('../index');

var _SeedRepository = require('../seed/SeedRepository');

var SeedRepository = _interopRequireWildcard(_SeedRepository);

var _constants = require('./../config/constants');

var _UserBusiness = require('./../users/UserBusiness');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var expiresIn = 1000; // seconds
function verifyToken(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        _jsonwebtoken2.default.verify(token, _constants.TOKEN_SECRET, function (err, decoded) {
            if (err) {
                res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
}

function authenticateUser(req, res) {
    try {
        var userName = req.body.name;
        (0, _UserBusiness.findUser)(userName, function (error, user) {
            if (error) return res.send({ error: 'error' });
            if (!user) return res.json({ success: false, message: 'Authentication failed. User not found.' });
            if (user.password !== req.body.password) return res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            var token = _jsonwebtoken2.default.sign(user, _constants.TOKEN_SECRET, {
                expiresIn: expiresIn // expires in 60 seconds
            });
            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token,
                expiresIn: expiresIn
            });
        });
    } catch (e) {
        (0, _index.log)(e);
        res.send({ error: 'error in your request' });
    }
}
exports.authenticateUser = authenticateUser;
exports.authenticateUserPtz = authenticateUserPtz;
exports.verifyToken = verifyToken;
//# sourceMappingURL=AuthenticationControllerPtz.js.map
//# sourceMappingURL=AuthenticationControllerPtz.js.map