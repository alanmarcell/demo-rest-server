'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.retrieveUsers = exports.updateUser = exports.deleteUser = exports.findUserById = exports.findUser = exports.createUser = undefined;

var _UserRepository = require('./UserRepository');

var _UserRepository2 = _interopRequireDefault(_UserRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRepository = new _UserRepository2.default();
function createUser(user, callback) {
    userRepository.create(user, callback);
}
function retrieveUsers(callback) {
    userRepository.retrieve(callback);
}
// tslint:disable-next-line:variable-name
function updateUser(_id, item, callback) {
    userRepository.findById(_id, function (err, res) {
        if (err) callback(err, res);else userRepository.update(res._id, item, callback);
    });
}
// tslint:disable-next-line:variable-name
function deleteUser(_id, callback) {
    userRepository.delete(_id, callback);
}
// tslint:disable-next-line:variable-name
function findUserById(_id, callback) {
    userRepository.findById(_id, callback);
}
function findUser(name, callback) {
    userRepository.findOne({ name: name }, callback);
}
exports.createUser = createUser;
exports.findUser = findUser;
exports.findUserById = findUserById;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
exports.retrieveUsers = retrieveUsers;
//# sourceMappingURL=UserBusiness.js.map
//# sourceMappingURL=UserBusiness.js.map