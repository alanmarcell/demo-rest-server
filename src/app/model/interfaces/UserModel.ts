import mongoose from 'mongoose';

interface IUserModel extends mongoose.Document {
  name: string;
  password: string;
  admin: boolean;
}

export default IUserModel;
