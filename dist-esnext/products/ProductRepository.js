import BaseRepository from '../core/BaseRepository';
import ProductSchema from './ProductSchema';
class ProductRepository extends BaseRepository {
    constructor() {
        super(ProductSchema);
    }
}
Object.seal(ProductRepository);
export default ProductRepository;
//# sourceMappingURL=ProductRepository.js.map