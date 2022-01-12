const express = require('express');
const router = express.Router();
const http = require('http');

const searchService = require('../services/search');
const productsDb = require('../models/products');

const debug = require('debug')('e3retail:products');

const ELASTICSEARCH_INDEX = process.env.ELASTICSEARCH_INDEX || 'products';

const MAX_HITS = 10;

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
    const searchParams = searchService.sanitizeRequestQueryForSearch(searchRequest);
    searchParams.size = MAX_HITS;

    const searchResult = await productsDb.getProducts(ELASTICSEARCH_INDEX, searchParams);

    const productsInfo = {
        total: searchResult.hits.total,
        products: searchResult.hits.hits,
        aggregations: searchResult.aggregations,
        currentPage: searchParams.page || 1,
        totalPages: Math.ceil(searchResult.hits.total.value / MAX_HITS),
    }

    res.render('products', {
        productsInfo,
        searchParams: {
            ...searchParams,
            categories: searchService.parseCategoryFilters(searchParams.categories),
            brands: searchService.parseBrandFilters(searchResult.aggregations, searchParams.brands),
            delivery: searchService.parseDeliveryOptionFilters(searchRequest.delivery),
            ratings: searchService.parseRatingFilters(Number(searchRequest.ratings)),
            sort: searchService.parseSortFilters(searchRequest.sort),
        },
        pagination: searchService.generatePagination(searchParams.page || 1, Math.ceil(searchResult.hits.total.value / MAX_HITS))
    });
}

/**
 * Returns search term suggestions for a given string
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
async function suggestSearchTerms(req, res, next) {
    const suggestions = await productsDb.getSuggestionsForTerm(
        ELASTICSEARCH_INDEX,
        req.query.searchString,
    );

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
    });
}

router.get('/search', renderProductsPage);
router.get('/suggest', suggestSearchTerms);
router.get('/image/*', getProductImage);

module.exports = router;
