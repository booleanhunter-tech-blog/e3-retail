const {
    getProductCategories,
    getSearchResults,
    getSearchSuggestions,
} = require('../../domain');

const debug = require('debug')('e3retail:products/graphql');

const resolvers = {
    queries: {
        productCategories: async (parent, args, context, info) => {
            return getProductCategories();
        },
        products: async (parent, args, context, info) => {
            debug(args);

            /**
            * @typedef {import('../../data').SearchParams} SearchParams
            * @type {SearchParams}
            */
            const searchParams = args.searchParams;

            return getSearchResults(searchParams);
        },
        productSuggestions: async (parent, args, context, info) => {
            debug(args);
            return getSearchSuggestions(args.searchText);
        }
    }
    
};

module.exports = {
    resolvers,
};