import chai from 'chai';
import R from 'ramda';
import IProductModel from './../model/interfaces/ProductModel';
import ProductBusiness from './ProductBusiness';

// const should = require('chai').should();
chai.should();

const productBusiness = new ProductBusiness();
let productCreatedID;
let createRes;

const newProduct: IProductModel = {
  category: 'newCategory',
  name: 'newName',
  price: 10
} as IProductModel;

const updateProduct = {
  category: 'updatedCategoryToDEl',
  name: 'updatedNameToDel',
  price: 10
}as IProductModel;

before('should create product', () => {
  return new Promise((resolve, reject) => {

    productBusiness.create(newProduct, (error, result) => {
      createRes = result || error;
      resolve(productCreatedID = result._id);
    });
  });
});

describe('ProductBusiness', () => {
  describe('Create', () => {
    it('should create products', () => {
      createRes.category.should.be.equal(newProduct.category);
    });
  });

  let retrieveRes;
  before('retrieve prod', () => {
    productBusiness.retrieve((error, result) =>
      retrieveRes = result || error
    );
  });
  describe('Retrieve', () => {
    it('should retrieve products ', () => {
      retrieveRes.should.be.an('array');
    });

    it('should have created product ', () => {
      const createdProd = retrieveRes.find((prod) =>
        R.equals(prod._id, productCreatedID)
      );
      createdProd._id.should.be.deep.equal(productCreatedID);
    });
  });

  let findRes;
  before('find prods', () => {
    productBusiness.findById(productCreatedID, (error, result) => {
      findRes = result || error;
    });
  });
  describe('FindById', () => {
    it('should find products By Id', () => {
      findRes._id.should.be.deep.equal(productCreatedID);
      findRes.should.be.an('object');
    });
  });

  describe('Update', () => {
    it('should update product', () => {
     productBusiness.update(productCreatedID, updateProduct, (error, result) => {
        result.ok.should.not.be.equal('0');
        result.should.be.an('object');
      });
    });
  });

  describe('Delete', () => {
    it('should delete product', () => {
      productBusiness.delete(productCreatedID.toString(), (error, result) => {
        result.should.be.an('object');
        result.result.ok.should.not.be.equal('1');
      });
    });
  });
});
