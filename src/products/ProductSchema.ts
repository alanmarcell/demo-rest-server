import { mongooseConnection, mongooseInstance } from '../core/DataAccess';
import { IProductModel } from './IProduct';

const mongoose = mongooseInstance;
// const mongooseConnection = mongooseConnection;

class ProductSchema {

  static get schema() {
    const schema = mongoose.Schema({
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
    return schema;
  }
}

const schema = mongooseConnection.model<IProductModel>('Products', ProductSchema.schema);
export default schema;
