const productController = require('../../controller/products');
const productModel = require('../../models/Product');
const httpMock = require('node-mocks-http');
const newProduct = require('../data/new-product.json');

productModel.create = jest.fn();
let req, res, next;

beforeEach(() => {
  req = httpMock.createRequest();
  res = httpMock.createResponse();
  next = null;
})

describe("product controller create", () => {
  beforeEach(() => {
    req.body = newProduct;
  })
  it("should have a createProduct function", () => {
    expect(typeof productController.createProduct).toBe("function")
  })
  it("should call productModel.create", () => {
    productController.createProduct(req, res, next);
    expect(productModel.create).toBeCalledWith(newProduct);
  })
  it("should return 201 response code", () => {
    productController.createProduct(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  })
  it("should return json body in response", () => {
    productModel.create.mockReturnValue(newProduct);
    productController.createProduct(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newProduct);
  })
})