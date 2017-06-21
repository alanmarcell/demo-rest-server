import Mongoose from 'mongoose';
import Constants from './../../config/constants/constants';
class DataAccess {
    static connect() {
        if (this.mongooseInstance)
            return this.mongooseInstance;
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
//# sourceMappingURL=DataAccess.js.map