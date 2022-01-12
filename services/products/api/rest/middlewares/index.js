const utils = require('../../../../../utils');

/**
 * Cleans search request query params into a appropriate format for Elasticsearch querying
 * @typedef {import('../../../data').SearchParams} SearchParams
 * @typedef {import('../routes/products').SearchRequest} SearchRequest
 * @param {SearchRequest} searchRequest Category info from query params
 * @return {SearchParams} searchParams
 */
function formatRequestQueryForSearch(searchRequest) {
    const searchParams = {
        searchText: searchRequest.search_text,
        brands: utils.collapseToArray(searchRequest.brands),
        categories: utils.collapseToArray(searchRequest.categories),
        price: {
            ...(searchRequest.price_min && {
                gte: Number(searchRequest.price_min)
            }),
            ...(searchRequest.price_max && {
                lte: Number(searchRequest.price_max)
            }),
        },
        ratings: {
            ...(searchRequest.ratings && {
                gte: Number(searchRequest.ratings)
            }),
        },
        ...(searchRequest.sort && {
            sort: searchRequest.sort
        }),
        ...(searchRequest.page && {
            page: Number(searchRequest.page)
        }),
        ...(searchRequest.delivery && {
            delivery: searchRequest.delivery
        })
    };

    return searchParams;
}

module.exports = {
    formatRequestQueryForSearch,
}