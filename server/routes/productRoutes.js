const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

router.get("/products", ProductController.products);
router.get("/products/:id", ProductController.productDetail);
router.post("/products", ProductController.productAdd);

module.exports = router;
