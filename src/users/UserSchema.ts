import DataAccess from '../core/DataAccess';
import {IUserModel} from './IUser';

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

  static get schema() {
    const schema = mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      admin: {
        type: Boolean,
        required: true
      }
    });
    return schema;
  }
}

const schema = mongooseConnection.model<IUserModel>('Users', UserSchema.schema);

export default schema;
