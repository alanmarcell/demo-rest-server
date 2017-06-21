// import chai from 'chai';
// import R from 'ramda';
// import IProductModel from './../model/interfaces/ProductModel';
// import ProductBusiness from './ProductBusiness';
// const should = require('chai').should();
// chai.should();
// const productBusiness = new ProductBusiness();
// let productCreatedID;
// let createRes;
// const product: IProductModel = {
//   category: 'newCategory',
//   name: 'newName',
//   price: 10
// };
// before('should create product', () => {
//   return new Promise((resolve, reject) => {
//     productBusiness.create(product, (error, result) => {
//       createRes = result || error;
//       resolve(productCreatedID = result._id)
//     });
//   });
// });
// describe('ProductBusiness', () => {
//   describe('Create', () => {
//     it('should create products', () => {
//       createRes.category.should.be.equal(product.category);
//     });
//   });
//   let retrieveRes;
//   before('retrieve prod', () => {
//     productBusiness.retrieve((error, result) =>
//       retrieveRes = result || error
//     );
//   });
//   describe('Retrieve', () => {
//     it('should retrieve products ', () => {
//       retrieveRes.should.be.an('array');
//     });
//     it('should have created product ', () => {
//       const createdProd = retrieveRes.find((prod) =>
//         R.equals(prod._id, productCreatedID)
//       );
//       createdProd._id.should.be.deep.equal(productCreatedID);
//     });
//   });
//   let findRes;
//   before('find prods', () => {
//     productBusiness.findById(productCreatedID, (error, result) => {
//       findRes = result || error;
//       console.log('--------------------', findRes);
//     });
//   });
//   describe('FindById', () => {
//     it('should find products By Id', () => {
//       findRes._id.should.be.deep.equal(productCreatedID);
//       findRes.should.be.an('object');
//     });
//   });
//   describe('Update', () => {
//     it('should update product', () => {
//       let res;
//       // tslint:disable-next-line:no-shadowed-variable
//       const product: IProductModel = {
//         category: 'updatedCategoryToDEl',
//         name: 'updatedNameToDel',
//         price: 10
//       };
//       productBusiness.update(productCreatedID, product, (error, result) => {
//         if (error) res = { error: 'error create controller' };
//         else res = { success: 'success' };
//         console.log('update', result);
//         // result.ok.should.not.be.equal('0');
//         // result.should.be.an('object');
//       });
//     });
//   });
//   describe('Delete', () => {
//     it('should delete product', () => {
//       let res;
//       productBusiness.delete(productCreatedID.toString(), (error, result) => {
//         if (error) res = { error: 'error create controller' };
//         else res = { success: 'success' };
//         console.log('delete', result.result);
//         // result.should.be.an('object');
//         // result.result.ok.should.not.be.equal('1');
//       });
//     });
//   });
// });
//# sourceMappingURL=ProductBusiness.test.js.map