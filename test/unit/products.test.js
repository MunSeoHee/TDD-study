const productController = require('../../controller/products');
const productModel = require('../../models/Product');
const httpMock = require('node-mocks-http');
const newProduct = require('../data/new-product.json');
productModel.create = jest.fn();

describe("product controller create", () => {
  it("should have a createProduct function", () => {
      expect(typeof productController.createProduct).toBe("function")
  })
  it("should call productModel.create", () => {
    let req = httpMock.createRequest();
    let res = httpMock.createResponse();
    let next = null;
    req.body = newProduct;
    productController.createProduct(req, res, next);
    expect(productModel.create).toBeCalledWith(newProduct);
  })
})