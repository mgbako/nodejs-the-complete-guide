const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');

const admin = require('./admin');

router.get('/', (req, res, next) => {
    const products = admin.product;
    res.render('shop', {
        products: products,
        pageTitle: 'shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    })
});

module.exports = router;