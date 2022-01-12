const express = require('express');
const router = express.Router();

const productsDb = require('../models/products');
const PRODUCT_CATEGORIES = require('../services/search/constants').PRODUCT_CATEGORIES;
const convertArrayToObject = require('../utils').convertArrayToObject;

const debug = require('debug')('e3retail:home');

const ELASTICSEARCH_INDEX = process.env.ELASTICSEARCH_INDEX || 'products';

/**
 * Renders the product categories page
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
async function renderProductCategoriesPage(req, res, next) {
    debug(req.query);
    const aggregates = await productsDb.getProductAggregatesByCategory(ELASTICSEARCH_INDEX);

    const aggregatesObject = convertArrayToObject(aggregates, 'key');

    const aggregatesToDisplay = [];

    // For displaying product category name, image & URL
    for (const [key, value] of Object.entries(PRODUCT_CATEGORIES)) {
        aggregatesToDisplay.push({
            name: aggregatesObject[key].key,
            doc_count: aggregatesObject[key].doc_count,
            ...value,
            url: `/products/search?categories=${encodeURIComponent(key)}`,
        })
    }
    
    res.render('index', {
        productCategories: aggregatesToDisplay,
    });
}

/* GET home page. */
router.get('/', renderProductCategoriesPage);

module.exports = router;
