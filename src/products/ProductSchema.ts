import { mongooseConnection, mongooseInstance } from '../core/DataAccess';
import { IProductModel } from './IProduct';

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

const schema = mongooseConnection.model<IProductModel>('Products', ProductSchema.schema);
export default schema;
