'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../index');

var _UserBusiness = require('./UserBusiness');

var _UserBusiness2 = _interopRequireDefault(_UserBusiness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserController = function () {
    function UserController() {
        _classCallCheck(this, UserController);
    }

    _createClass(UserController, [{
        key: 'create',
        value: function create(req, res) {
            try {
                var user = req.body;
                console.log('\n\n--- user  ---', user);
                var userBusiness = new _UserBusiness2.default();
                userBusiness.create(user, function (error) {
                    if (error) res.send({ error: 'error' });else res.send({ success: 'success' });
                });
            } catch (e) {
                (0, _index.log)(e);
                res.send({ error: 'error in your request' });
            }
        }
    }, {
        key: 'update',
        value: function update(req, res) {
            try {
                var user = req.body;
                var id = req.params._id;
                var userBusiness = new _UserBusiness2.default();
                userBusiness.update(id, user, function (error) {
                    if (error) res.send({ error: 'error' });else res.send({ success: 'success' });
                });
            } catch (e) {
                (0, _index.log)(e);
                res.send({ error: 'error in your request' });
            }
        }
    }, {
        key: 'delete',
        value: function _delete(req, res) {
            try {
                var id = req.params._id;
                var userBusiness = new _UserBusiness2.default();
                userBusiness.delete(id, function (error) {
                    if (error) res.send({ error: 'error' });else res.send({ success: 'success' });
                });
            } catch (e) {
                (0, _index.log)(e);
                res.send({ error: 'error in your request' });
            }
        }
    }, {
        key: 'retrieve',
        value: function retrieve(req, res) {
            try {
                var userBusiness = new _UserBusiness2.default();
                userBusiness.retrieve(function (error, result) {
                    if (error) res.send({ error: 'error' + req });else res.send(result);
                });
            } catch (e) {
                (0, _index.log)(e);
                res.send({ error: 'error in your request' });
            }
        }
    }, {
        key: 'findById',
        value: function findById(req, res) {
            try {
                var id = req.params._id;
                var userBusiness = new _UserBusiness2.default();
                userBusiness.findById(id, function (error, result) {
                    if (error) res.send({ error: 'error' });else res.send(result);
                });
            } catch (e) {
                (0, _index.log)(e);
                res.send({ error: 'error in your request' });
            }
        }
    }, {
        key: 'findOne',
        value: function findOne(req, res) {
            try {
                var param = req.params.param;
                var userBusiness = new _UserBusiness2.default();
                userBusiness.findOne(param, function (error, result) {
                    if (error) res.send({ error: 'error' });else res.send(result);
                });
            } catch (e) {
                (0, _index.log)(e);
                res.send({ error: 'error in your request' });
            }
        }
    }]);

    return UserController;
}();

exports.default = UserController;
//# sourceMappingURL=UserController.js.map
//# sourceMappingURL=UserController.js.map