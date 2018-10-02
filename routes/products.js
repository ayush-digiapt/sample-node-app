var express = require('express');
var router = express.Router();
var productsController = require("../controllers/products")

/* GET products listing. */
router.get('/', productsController.getProducts);

/* POST create product. */
router.post('/', productsController.createProduct);

module.exports = router;
