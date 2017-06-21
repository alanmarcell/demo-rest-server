class ProductModel {
    constructor(productModel) {
        this.productModel = productModel;
    }
    get name() {
        return this.productModel.name;
    }
    get price() {
        return this.productModel.price;
    }
    get category() {
        return this.productModel.category;
    }
}
Object.seal(ProductModel);
export default ProductModel;
//# sourceMappingURL=ProductModel.js.map