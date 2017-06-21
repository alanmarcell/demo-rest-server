import {IUserModel} from './IUser';

class UserModel {

  private userModel: IUserModel;

  constructor(userModel: IUserModel) {
    this.userModel = userModel;
  }
  get name(): string {
    return this.userModel.name;
  }

  get password(): string {
    return this.userModel.password;
  }

  get admin(): boolean {
    return this.userModel.admin;
  }

}
Object.seal(UserModel);

export default UserModel;
