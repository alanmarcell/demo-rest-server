import ProductSchema from './../dataAccess/schemas/ProductSchema';
import IProductModel from './../model/interfaces/ProductModel';
import RepositoryBase from './BaseRepository';

class ProductRepository extends RepositoryBase<IProductModel> {
  constructor() {
    super(ProductSchema);
  }
}

Object.seal(ProductRepository);

export default ProductRepository;
