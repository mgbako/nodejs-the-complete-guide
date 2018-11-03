const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path')
const product = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product'
    });
});

router.post('/add-product', (req, res, next) => {
    product.push({ title: req.body.title});
    res.redirect('/');
})

module.exports = {
    router,
    product
}