const Product = require('../models/product');

module.exports.getAddProducts = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/add-product'
    });
}

module.exports.getShop = (req, res, next) => {
    Product.fetchAll( (products) => {
        res.render('shop', {
            products: products,
            pageTitle: 'shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        })
    });
    
};

module.exports.postAddProducts = (req, res, next) => {
    if(req.body.title.length > 0){
        const product = new Product(req.body.title);
    
        product.save();
        res.redirect('/');
    }

}