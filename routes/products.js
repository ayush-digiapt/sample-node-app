var express = require('express');
var router = express.Router();
var usersController = require("../controllers/products")

/* GET products listing. */
router.get('/', usersController.getProducts);

module.exports = router;
