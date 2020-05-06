const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('addProduct', {
        pageTitle: 'Add Product',
        path: '/admin/addProduct',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
};

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    products.push({ summary: req.body.summary });
    res.redirect('/')
};

exports.getProducts = (req, res, next) => {
    res.render('shop', {
        product: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0
    });
};