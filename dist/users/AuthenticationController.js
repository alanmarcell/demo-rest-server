'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyToken = exports.authenticateUser = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _index = require('../index');

var _constants = require('./../config/constants');

var _UserBusiness = require('./../users/UserBusiness');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
exports.verifyToken = verifyToken;
//# sourceMappingURL=AuthenticationController.js.map
//# sourceMappingURL=AuthenticationController.js.map