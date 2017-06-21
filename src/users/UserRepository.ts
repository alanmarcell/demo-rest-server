import BaseRepository from '../core/BaseRepository';
import { IUserModel } from './IUser';
import UserSchema from './UserSchema';

class UserRepository extends BaseRepository<IUserModel> {
  constructor() {
    super(UserSchema);
  }
}

Object.seal(UserRepository);

export default UserRepository;
