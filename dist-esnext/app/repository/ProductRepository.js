import ProductSchema from './../dataAccess/schemas/ProductSchema';
import RepositoryBase from './BaseRepository';
class ProductRepository extends RepositoryBase {
    constructor() {
        super(ProductSchema);
    }
}
Object.seal(ProductRepository);
export default ProductRepository;
//# sourceMappingURL=ProductRepository.js.map