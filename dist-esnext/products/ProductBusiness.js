import ProductRepository from './ProductRepository';
class ProductBusiness {
    constructor() {
        this.productRepository = new ProductRepository();
    }
    create(item, callback) {
        this.productRepository.create(item, callback);
    }
    retrieve(callback, start, items) {
        this.productRepository.retrieve(callback, start, items);
    }
    // tslint:disable-next-line:variable-name
    update(_id, item, callback) {
        this.productRepository.findById(_id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this.productRepository.update(res._id, item, callback);
        });
    }
    // tslint:disable-next-line:variable-name
    delete(_id, callback) {
        this.productRepository.delete(_id, callback);
    }
    // tslint:disable-next-line:variable-name
    findById(_id, callback) {
        this.productRepository.findById(_id, callback);
    }
}
Object.seal(ProductBusiness);
export default ProductBusiness;
//# sourceMappingURL=ProductBusiness.js.map