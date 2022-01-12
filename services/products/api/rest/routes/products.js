const express = require('express');
const http = require('http');

const {
    getSearchResults,
    getSearchSuggestions,
} = require('../../../domain');

const { formatRequestQueryForSearch } = require('../middlewares');

const debug = require('debug')('e3retail:routes/products');

const router = express.Router();

/**
 * Request object containing search params
 * @typedef {Object} SearchRequest
 * @property {string} [search_text]
 * @property {string | string[]} [brands]
 * @property {string | string[]} [categories]
 * @property {string} [delivery]
 * @property {number} [price_min]
 * @property {number} [price_max]
 * @property {number} [ratings]
 * @property {string} [sort]
 * @property {number} [page]
 */

/**
 * Renders a page with products based on the request query params
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
async function renderProductsPage(req, res, next) {
    debug(req.query);

    /**
    * @type {SearchRequest}
    */
    const searchRequest = req.query;
    debug(searchRequest);

    const searchParams = formatRequestQueryForSearch(searchRequest);

    const searchResults = await getSearchResults(searchParams);

    res.render('products', searchResults);
}

/**
 * Returns search term suggestions for a given string
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
async function suggestSearchTerms(req, res, next) {
    const suggestions = await getSearchSuggestions(req.query.searchString);

    res.json({
        suggestions,
    });
}

/**
 * Get image for product
 * 
 * Since the product image may begin with http, we'll use this function to act as a image proxy
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
async function getProductImage(req, res, next) {

    const imageDomain = 'http://img6a.flixcart.com';

    /** Original image URL is of the format http://img6a.flixcart.com/image/*  */
    const imageUrl = `${imageDomain}${req.url.replace('/products', '')}`;

        http.get(imageUrl, function(response) {
            const imageSize = parseInt(response.headers['content-length']);
            const imageBuffer = Buffer.alloc(imageSize);
            let bytes = 0;
    
            response.setEncoding("binary");
    
            response.on("data", function(chunk) {
                imageBuffer.write(chunk, bytes, "binary");
                bytes += chunk.length;
            });
    
            response.on("end", function() {
                debug("Download complete, sending image.");
                res.send(imageBuffer);
            });
        }).on('error', (err) => {
            debug(err);
            res.sendStatus(404);
        });
}

router.get('/search', renderProductsPage);
router.get('/suggest', suggestSearchTerms);
router.get('/image/*', getProductImage);

module.exports = router;
