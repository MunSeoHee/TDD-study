const productController = require('../../controller/products');

describe("product controller create", () => {
  it("should have a createProduct function", () => {
      expect(typeof productController.createProduct).toBe("function")
  })
})