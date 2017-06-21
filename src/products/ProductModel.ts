import { IProductModel } from './IProduct';

class ProductModel {

  private productModel: IProductModel;

  constructor(productModel: IProductModel) {
    this.productModel = productModel;
  }
  get name(): string {
    return this.productModel.name;
  }

  get price(): number {
    return this.productModel.price;
  }

  get category(): string {
    return this.productModel.category;
  }

}
Object.seal(ProductModel);

export default ProductModel;
