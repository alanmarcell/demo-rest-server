import { mongooseConnection, mongooseInstance } from '../core/DataAccess';
const mongoose = mongooseInstance;
class ProductSchema {
    static get schema() {
        return mongoose.Schema({
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
    }
}
const schema = mongooseConnection.model('Products', ProductSchema.schema);
export default schema;
//# sourceMappingURL=ProductSchema.js.map