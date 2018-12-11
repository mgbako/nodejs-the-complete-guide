const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const productsController = require('../contollers/products');

const admin = require('./admin');

router.get('/', productsController.getShop);

module.exports = router;