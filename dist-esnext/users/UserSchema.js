import DataAccess from '../core/DataAccess';
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
            email: {
                type: String,
                required: true
            }
        });
        return schema;
    }
}
const schema = mongooseConnection.model('Users', UserSchema.schema);
export default schema;
//# sourceMappingURL=UserSchema.js.map