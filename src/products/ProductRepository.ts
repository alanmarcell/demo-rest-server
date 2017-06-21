import BaseRepository from '../core/BaseRepository';
import { IProductModel } from './IProduct';
import ProductSchema from './ProductSchema';

class ProductRepository extends BaseRepository<IProductModel> {
  constructor() {
    super(ProductSchema);
  }
}

Object.seal(ProductRepository);

export default ProductRepository;
