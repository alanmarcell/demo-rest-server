import Mongoose from 'mongoose';
import { DB_CONNECTION_STRING } from './../../config/constants';
class DataAccess {
    static connect() {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once('open', () => {
            console.log('Connected to mongodb url:', DB_CONNECTION_STRING);
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
//# sourceMappingURL=DataAccess.js.map