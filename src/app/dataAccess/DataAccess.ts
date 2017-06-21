import Mongoose from 'mongoose';
import Constants from './../../config/constants/constants';

class DataAccess {
  static mongooseInstance: any;
  static mongooseConnection: Mongoose.Connection;
  static connect(): Mongoose.Connection {
    if (this.mongooseInstance) return this.mongooseInstance;

    this.mongooseConnection = Mongoose.connection;
    this.mongooseConnection.once('open', () => {
      console.log('Connected to mongodb.');
    });

    this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING);
    return this.mongooseInstance;
  }

  constructor() {
    DataAccess.connect();
  }
}

DataAccess.connect();
export default DataAccess;
