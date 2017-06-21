import { IUserModel } from './IUser';
import UserRepository from './UserRepository';

const userRepository: UserRepository = new UserRepository();

function createUser(user: IUserModel, callback: (error: any, result: any) => void) {
  userRepository.create(user, callback);
}

function retrieveUsers(callback: (error: any, result: any) => void) {
  userRepository.retrieve(callback);
}

// tslint:disable-next-line:variable-name
function updateUser(_id: string, item: IUserModel, callback: (error: any, result: any) => void) {

  userRepository.findById(_id, (err, res) => {
    if (err) callback(err, res);
    else userRepository.update(res._id, item, callback);
  });
}

// tslint:disable-next-line:variable-name
function deleteUser(_id: string, callback: (error: any, result: any) => void) {
  userRepository.delete(_id, callback);
}

// tslint:disable-next-line:variable-name
function findUserById(_id: string, callback: (error: any, result: IUserModel) => void) {
  userRepository.findById(_id, callback);
}

function findUser(name: string, callback: (error: any, result: IUserModel) => void) {
  userRepository.findOne({ name }, callback);
}

export { createUser, findUser, findUserById, deleteUser, updateUser, retrieveUsers };
