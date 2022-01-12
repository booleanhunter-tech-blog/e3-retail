const ELASTICSEARCH_INDEX = process.env.ELASTICSEARCH_INDEX || 'products';
const MAX_HITS = 10;

const productsDb = require('../data');
const searchService = require('./search');
const PRODUCT_CATEGORIES = require('./search/constants').PRODUCT_CATEGORIES;
const { convertArrayToObject } = require('../../../utils/index');

async function getProductCategories () {
    const aggregates = await productsDb.getProductAggregatesByCategory(ELASTICSEARCH_INDEX);

    const aggregatesObject = convertArrayToObject(aggregates, 'key');

    const aggregatesToDisplay = [];

    // For displaying product category name, image & URL
    for (const [key, value] of Object.entries(PRODUCT_CATEGORIES)) {
        aggregatesToDisplay.push({
            name: aggregatesObject[key].key,
            productCount: aggregatesObject[key].doc_count,
            ...value,
            url: `/products/search?categories=${encodeURIComponent(key)}`,
        })
    }

    return aggregatesToDisplay;
    
}

/**
 * Search and get products based on given search parameters
 * @typedef {import('../data').SearchParams} SearchParams
 * @typedef {import('../api/rest/routes/products').SearchRequest} SearchRequest
 * @param {SearchParams} searchParams
 */
async function getSearchResults (searchParams) {
    searchParams.size = MAX_HITS;
 
    const searchResult = await productsDb.getProducts(ELASTICSEARCH_INDEX, searchParams);

    return {
        productsInfo: {
            total: searchResult?.hits?.total || 0,
            products: transformSearchHitsToProducts(searchResult?.hits?.hits),
        },
        filters: {
            ...searchParams,
            searchText: searchParams.searchText,
            categories: searchService.parseCategoryFilters(searchParams.categories),
            brands: searchService.parseBrandFilters(searchResult.aggregations, searchParams.brands),
            delivery: searchService.parseDeliveryOptionFilters(searchParams?.delivery),
            ratings: searchService.parseRatingFilters(Number(searchParams.ratings?.gte)),
            sort: searchService.parseSortFilters(searchParams.sort),
        },
        paginationInfo: {
            pagination: searchService.generatePagination(
                searchParams.page || 1,
                Math.ceil((searchResult?.hits?.total?.value || 0) / MAX_HITS)
            ),
            currentPage: searchParams.page || 1,
            totalPages: Math.ceil(searchResult?.hits?.total?.value / MAX_HITS),
        }
    }
}

/**
 * Returns search term suggestions for a given string
 * @param {string} searchText
 */
async function getSearchSuggestions(searchText) {
    return productsDb.getSuggestionsForTerm(
        ELASTICSEARCH_INDEX,
        searchText,
    );
}

/**
 * Transforms hits from Elasticsearch into the correct format
 * 1. Convert field names to camelCase
 * 2. Apply image proxy URLs
 * @typedef {import('../data').SearchHits} SearchHits
 * @param {SearchHits["hits"]} hits
 */
function transformSearchHitsToProducts(hits) {
    const products = [];

    for (const hit of hits) {
        products.push({
            id: hit["_source"].uniq_id,
            name: hit["_source"].product_name,
            description: hit["_source"].description,
            category: hit["_source"].category,
            brand: hit["_source"].brand,
            url: hit["_source"].product_url,
            images: applyProxyToImages(hit["_source"].images),
            hasNextDayDelivery: hit["_source"].has_next_day_delivery,
            rating: hit["_source"].product_rating,
            retailPrice: hit["_source"].retail_price,
            discountedPrice: hit["_source"].discounted_price,
        });
    }

    return products;
}

/**
 * Transforms hits from Elasticsearch into the correct format
 * 1. Convert field names to camelCase
 * 2. Apply image proxy URLs
 * @param {string[]} imageUrls
 * @return {string[]} imageUrls
 */
function applyProxyToImages(imageUrls) {
    return imageUrls.map(image => `/products${new URL(image).pathname}`);
}

module.exports = {
    getProductCategories,
    getSearchResults,
    getSearchSuggestions,
}