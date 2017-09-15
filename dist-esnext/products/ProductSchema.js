import DataAccess from '../core/DataAccess';
const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;
class ProductSchema {
    static get schema() {
        const prodSchema = mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            category: {
                type: String,
                required: true
            }
        });
        return prodSchema;
    }
}
const schema = mongooseConnection.model('Products', ProductSchema.schema);
export default schema;
//# sourceMappingURL=ProductSchema.js.map