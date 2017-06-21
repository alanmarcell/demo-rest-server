import UserRepository from './UserRepository';
const userRepository = new UserRepository();
function createUser(user, callback) {
    userRepository.create(user, callback);
}
function retrieveUsers(callback) {
    userRepository.retrieve(callback);
}
// tslint:disable-next-line:variable-name
function updateUser(_id, item, callback) {
    userRepository.findById(_id, (err, res) => {
        if (err)
            callback(err, res);
        else
            userRepository.update(res._id, item, callback);
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
    userRepository.findOne({ name }, callback);
}
export { createUser, findUser, findUserById, deleteUser, updateUser, retrieveUsers };
//# sourceMappingURL=UserBusiness.js.map