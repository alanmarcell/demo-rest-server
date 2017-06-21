'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findUserById = exports.retrieveUsers = exports.updateUser = exports.deleteUser = exports.findUser = exports.createUser = undefined;

var _index = require('../index');

var _UserBusiness = require('./UserBusiness');

var UserBusiness = _interopRequireWildcard(_UserBusiness);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createUser(req, res) {
    try {
        var user = req.body;
        UserBusiness.createUser(user, function (error) {
            if (error) res.send({ error: 'error' });else res.send({ success: 'success' });
        });
    } catch (e) {
        (0, _index.log)(e);
        res.send({ error: 'error in your request' });
    }
}
function updateUser(req, res) {
    try {
        var user = req.body;
        var id = req.params._id;
        UserBusiness.updateUser(id, user, function (error) {
            if (error) res.send({ error: 'error' });else res.send({ success: 'success' });
        });
    } catch (e) {
        (0, _index.log)(e);
        res.send({ error: 'error in your request' });
    }
}
function deleteUser(req, res) {
    try {
        var id = req.params._id;
        UserBusiness.deleteUser(id, function (error) {
            if (error) res.send({ error: 'error' });else res.send({ success: 'success' });
        });
    } catch (e) {
        (0, _index.log)(e);
        res.send({ error: 'error in your request' });
    }
}
function retrieveUsers(req, res) {
    try {
        UserBusiness.retrieveUsers(function (error, result) {
            if (error) res.send({ error: 'error' + req });else res.send(result);
        });
    } catch (e) {
        (0, _index.log)(e);
        res.send({ error: 'error in your request' });
    }
}
function findUserById(req, res) {
    try {
        var id = req.params._id;
        UserBusiness.findUserById(id, function (error, result) {
            if (error) res.send({ error: 'error' });else res.send(result);
        });
    } catch (e) {
        (0, _index.log)(e);
        res.send({ error: 'error in your request' });
    }
}
function findUser(req, res) {
    try {
        var param = req.params.param;
        UserBusiness.findUser(param, function (error, result) {
            if (error) res.send({ error: error });else res.send(result);
        });
    } catch (e) {
        (0, _index.log)(e);
        res.send({ error: 'error in your request' });
    }
}
exports.createUser = createUser;
exports.findUser = findUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
exports.retrieveUsers = retrieveUsers;
exports.findUserById = findUserById;
//# sourceMappingURL=UserController.js.map
//# sourceMappingURL=UserController.js.map