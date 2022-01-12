const indexRouter = require('../services/products/api/rest/routes');
const productsRouter = require('../services/products/api/rest/routes/products');

function initializeRoutes(app) {
    app.use('/', indexRouter);
    app.use('/products', productsRouter);
}

module.exports = {
    initializeRoutes,
}