import Mongoose from 'mongoose';
import { DB_CONNECTION_STRING } from '../config/constants';
import { log } from '../index';

class DataAccess {
  static mongooseInstance: any;
  static mongooseConnection: Mongoose.Connection;
  static connect(): Mongoose.Connection {
    if (this.mongooseInstance) return this.mongooseInstance;

    this.mongooseConnection = Mongoose.connection;
    this.mongooseConnection.once('open', () => {
      log('Connected to mongodb url:', DB_CONNECTION_STRING);
    });

    this.mongooseInstance = Mongoose.connect(DB_CONNECTION_STRING);
    return this.mongooseInstance;
  }

  constructor() {
    DataAccess.connect();
  }
}

DataAccess.connect();
export default DataAccess;
