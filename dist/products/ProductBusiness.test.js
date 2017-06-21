'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _ProductBusiness = require('./ProductBusiness');

var _ProductBusiness2 = _interopRequireDefault(_ProductBusiness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const should = require('chai').should();
_chai2.default.should();
var productBusiness = new _ProductBusiness2.default();
var productCreatedID = void 0;
var createRes = void 0;
var newProduct = {
    category: 'newCategory',
    name: 'newName',
    price: 10
};
var updateProduct = {
    category: 'updatedCategoryToDEl',
    name: 'updatedNameToDel',
    price: 10
};
before('should create product', function () {
    return new Promise(function (resolve, reject) {
        productBusiness.create(newProduct, function (error, result) {
            createRes = result || error;
            resolve(productCreatedID = result._id);
        });
    });
});
describe('ProductBusiness', function () {
    describe('Create', function () {
        it('should create products', function () {
            createRes.category.should.be.equal(newProduct.category);
        });
    });
    var retrieveRes = void 0;
    before('retrieve prod', function () {
        productBusiness.retrieve(function (error, result) {
            return retrieveRes = result || error;
        });
    });
    describe('Retrieve', function () {
        it('should retrieve products ', function () {
            retrieveRes.should.be.an('array');
        });
        it('should have created product ', function () {
            var createdProd = retrieveRes.find(function (prod) {
                return _ramda2.default.equals(prod._id, productCreatedID);
            });
            createdProd._id.should.be.deep.equal(productCreatedID);
        });
    });
    var findRes = void 0;
    before('find prods', function () {
        productBusiness.findById(productCreatedID, function (error, result) {
            findRes = result || error;
        });
    });
    describe('FindById', function () {
        it('should find products By Id', function () {
            findRes._id.should.be.deep.equal(productCreatedID);
            findRes.should.be.an('object');
        });
    });
    describe('Update', function () {
        it('should update product', function () {
            productBusiness.update(productCreatedID, updateProduct, function (error, result) {
                result.ok.should.not.be.equal('0');
                result.should.be.an('object');
            });
        });
    });
    describe('Delete', function () {
        it('should delete product', function () {
            productBusiness.delete(productCreatedID.toString(), function (error, result) {
                result.should.be.an('object');
                result.result.ok.should.not.be.equal('1');
            });
        });
    });
});
//# sourceMappingURL=ProductBusiness.test.js.map
//# sourceMappingURL=ProductBusiness.test.js.map