import Mongoose from 'mongoose';
import { DB_CONNECTION_STRING } from '../config/constants';
import { log } from '../index';

let mongooseInstance: any;
let mongooseConnection: Mongoose.Connection;

const connect = () => {
  if (mongooseInstance) return mongooseInstance;

  mongooseConnection = Mongoose.connection;
  mongooseConnection.once('open', () => {
    log('Connected to mongodb url:', DB_CONNECTION_STRING);
  });

  mongooseInstance = Mongoose.connect(DB_CONNECTION_STRING);
  return mongooseInstance;
};

export default connect();

export {
  mongooseInstance,
  mongooseConnection
};
