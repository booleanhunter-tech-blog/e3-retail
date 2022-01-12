const express = require('express');

const{
    getProductCategories,
} = require('../../../domain/index');

const debug = require('debug')('e3retail:home');

const router = express.Router();

/**
 * Renders the product categories page
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
async function renderProductCategoriesPage(req, res, next) {
    debug(req.query);

    try {
        const productCategories = await getProductCategories();
        
        res.render('index', {
            productCategories,
        });
    } catch (error) {
        debug(error);
        res.render('index', {
            error,
        });
    }
}

/* GET home page. */
router.get('/', renderProductCategoriesPage);

module.exports = router;
