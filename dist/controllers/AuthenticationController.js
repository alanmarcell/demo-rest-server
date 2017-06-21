'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _UserBusiness = require('./../app/business/UserBusiness');

var _UserBusiness2 = _interopRequireDefault(_UserBusiness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthenticationController = function () {
    function AuthenticationController() {
        _classCallCheck(this, AuthenticationController);
    }

    _createClass(AuthenticationController, [{
        key: 'verifyToken',
        value: function verifyToken(req, res, next) {
            // check header or url parameters or post parameters for token
            var token = req.body.token || req.query.token || req.headers['x-access-token'];
            // decode token
            if (token) {
                // verifies secret and checks exp
                _jsonwebtoken2.default.verify(token, 'fcamara', function (err, decoded) {
                    if (err) {
                        res.json({ success: false, message: 'Failed to authenticate token.' });
                    } else {
                        // if everything is good, save to request for use in other routes
                        req.decoded = decoded;
                        next();
                    }
                });
            } else {
                // if there is no token
                // return an error
                res.status(403).send({
                    success: false,
                    message: 'No token provided.'
                });
            }
        }
    }, {
        key: 'authenticateUser',
        value: function authenticateUser(req, res) {
            try {
                var userName = req.body.name;
                var userBusiness = new _UserBusiness2.default();
                userBusiness.findOne(userName, function (error, user) {
                    if (error) return res.send({ error: 'error' });
                    if (!user) return res.json({ success: false, message: 'Authentication failed. User not found.' });
                    // check if password matches
                    if (user.password !== req.body.password) return res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                    // if user is found and password is right
                    // create a token
                    var token = _jsonwebtoken2.default.sign(user, 'fcamara', {
                        expiresIn: 1000 // expires in 60 seconds
                    });
                    // return the information including token as JSON
                    res.json({
                        success: true,
                        message: 'Enjoy your token!',
                        token: token,
                        expiresIn: 1000
                    });
                });
            } catch (e) {
                console.log(e);
                res.send({ error: 'error in your request' });
            }
        }
    }]);

    return AuthenticationController;
}();

exports.default = AuthenticationController;
//# sourceMappingURL=AuthenticationController.js.map
//# sourceMappingURL=AuthenticationController.js.map