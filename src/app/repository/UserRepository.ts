import UserSchema from './../dataAccess/schemas/UserSchema';
import IUserModel from './../model/interfaces/UserModel';
import RepositoryBase from './BaseRepository';

class UserRepository extends RepositoryBase<IUserModel> {
  constructor() {
    super(UserSchema);
  }
}

Object.seal(UserRepository);

export default UserRepository;
