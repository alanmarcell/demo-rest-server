import mongoose from 'mongoose';
import IBaseBusiness from '../core/IBaseBusiness';

type IUserBusiness = IBaseBusiness<IUserModel>;


interface IUserModel extends mongoose.Document {
  name: string;
  password: string;
  admin: boolean;
}

export {
  IUserBusiness,
  IUserModel
}
