const express = require("express");
const router = express.Router();
const productController = require("./controller/products");

router.post("/", productController.createProduct);
router.get("/", productController.getProducts);
module.exports = router;
