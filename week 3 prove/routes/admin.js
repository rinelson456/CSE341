const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/addProduct', productsController.getAddProduct);

router.post('/addProduct', productsController.postAddProduct);

module.exports = router;