const utils = require('../../../../utils');
const searchFilters = require('./constants');

const PRODUCT_CATEGORIES = searchFilters.PRODUCT_CATEGORIES;
const DELIVERY_OPTIONS = searchFilters.DELIVERY_OPTIONS;
const SORT_OPTIONS = searchFilters.SORT_OPTIONS;
const RATING_OPTIONS = searchFilters.RATING_OPTIONS;

/**
 * Get available categories to display in filters along with the applied/active ones
 * @param {string[]} categories Category info from query params
 */
function parseCategoryFilters(categories = []) {
    const categoriesToDisplay = [];

    for (const [key, value] of Object.entries(PRODUCT_CATEGORIES)) {
        categoriesToDisplay.push({
            ...value,
            name: key,
            value: key,
            active: categories.includes(key),
        })
    }

    return categoriesToDisplay;
}

/**
 * Get available brands to display in filters along with applied/active ones
 * @typedef {import('../../data').Aggregation} Aggregation
 * @param {Aggregation[]} aggregateByBrands Aggregation info by brands
 * @param {string[]} brands Brand info from query params
 */
function parseBrandFilters(aggregateByBrands, brands=[]) {
    return aggregateByBrands.map((aggregation) => {
        return {
            id: utils.convertToId(aggregation.key),
            name: aggregation.key,
            value: aggregation.key,
            active: brands.includes(aggregation.key),
        }
    });
}

/**
 * Get available delivery options to display in filters along with the active/applied ones
 * @param {string} deliveryOption Delivery option from query params
 */
function parseDeliveryOptionFilters(deliveryOption) {
    return DELIVERY_OPTIONS.map(option => {
        return {
            ...option,
            active: option.value === deliveryOption
        }
    });
}

/**
 * Get available ratings to display in filters along with the active/applied ones
 * @param {number} rating Category info from query params
 */
function parseRatingFilters(rating) {
    return RATING_OPTIONS.map(option => {
        return {
            ...option,
            active: option.value === rating
        }
    });
}

/**
 * Get available sort options to display in filters along with the active/applied ones
 * @param {string} sortOption Sort option from query params
 */
function parseSortFilters(sortOption) {
    return SORT_OPTIONS.map(option => {
        return {
            ...option,
            active: option.value === sortOption
        }
    });
}

/**
 * Get page numbers to display before & after current page for pagination
 * @param {number} currentPage Current page number
 * @param {number} totalPages Total number of pages
 */
 function generatePagination(currentPage, totalPages) {
    /**
    * How many page numbers towards the left & right of the current page
    */
    const pageWindow = 2;

    // If there are no results, just return
    if (totalPages === 0) {
        return [];
    }

    const pageNumberOptions = [
        {
            name: "Previous",
            disabled:  currentPage === 1,
            value: currentPage - 1,
            class: "previous"
        },
        {
            name: 1,
            active: currentPage === 1,
            disabled: currentPage === 1,
            value: 1
        },
    ];

    // If there's only a single page, add a "next" button and return
    if (totalPages === 1) {
        pageNumberOptions.push(
            {
                name: "Next",
                value: currentPage + 1,
                disabled: true,
                class: "next",
            }
        );
    
        return pageNumberOptions;
    }

    let from = 2, to = currentPage;

    // If there are 5 pages or lesser, then just show all the numbers
    if (totalPages < 5) {
        to = totalPages - 1;
    } else {
        // If current page is less than 5, start from 2 until the currentPage + pageWindow
        if (currentPage < 5) {
            from = 2;
        } else {
            // Add a "..." for presentation purposes
            pageNumberOptions.push({
                name: "...",
                disabled:  true,
                value: currentPage - 1,
                class: "presentation",
            });

            from = currentPage - pageWindow;
        }

        if (currentPage + pageWindow < totalPages) {
            to = currentPage + pageWindow;
        } else {
            to = totalPages - 1;
        }
    }

    for (let i=from; i <= to; i++ ) {
        pageNumberOptions.push({
            name: i,
            value: i,
            active: i === currentPage,
            disabled: i === currentPage,
        });
    }

    // If current page number + page window is less than the penultimate page, show a "..."
    if (currentPage + pageWindow < totalPages - 1) {
        pageNumberOptions.push({
            name: "...",
            disabled:  true,
            value: currentPage + 1,
            class: "presentation",
        });
    }

    // Display the last page
    pageNumberOptions.push(
        {
            name: totalPages,
            value: totalPages,
            active: currentPage === totalPages,
            disabled: currentPage === totalPages,
        }
    );

    pageNumberOptions.push(
        {
            name: "Next",
            value: currentPage + 1,
            disabled: currentPage >= totalPages,
            class: "next",
        }
    );

    return pageNumberOptions;
    
}

module.exports = {
    parseCategoryFilters,
    parseBrandFilters,
    parseDeliveryOptionFilters,
    parseRatingFilters,
    parseSortFilters,
    generatePagination,
}
