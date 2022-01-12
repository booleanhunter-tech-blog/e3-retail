export const REST_API_URL = '/products';
export const GRAPHQL_BASE_URL = '/graphql';

/**
 * Fetch search suggestions for a given string
 * @param {string} searchText
 * @return {Promise<[]>} Array of search suggestions
 */
export async function fetchSearchTermSuggestions(searchText) {
    const query = `
        query($searchText: String!) {
            productSuggestions(searchText: $searchText) {
                text,
            }
        }
    `;

    const variables = {
        searchText,
    };

    const response = await fetch(GRAPHQL_BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        })
    });

    if (response.ok) {
        const result = await response.json();
        return result?.data.productSuggestions;
    } else {
        return Promise.reject(Error(response.statusText));
    }


}


/**
 * Fetch products for the given search Parameters
 * - Type: GraphQL API
 * @param {{}} searchParams
 * @return {Promise<{}>} Search results
 */
export async function fetchProducts(searchParams) {
    const query = `
        query($searchParams: SearchParams) {
            products(searchParams: $searchParams) {
                productsInfo {
                    products {
                        name,
                        description,
                        retailPrice,
                        discountedPrice,
                        rating,
                        images,
                        url,
                    },
                    total {
                        value,
                    }
                },
                filters {
                    searchText,
                    categories {
                        id,
                        name,
                        value,
                        active
                    },
                    brands {
                        id,
                        name,
                        value,
                        active
                    },
                    ratings {
                        id,
                        name,
                        value,
                        active
                    },
                    delivery {
                        id,
                        name,
                        value,
                        active
                    },
                    sort {
                        name,
                        value,
                        active
                    }
                },
                paginationInfo {
                    currentPage,
                    totalPages,
                    pagination {
                        name,
                        value,
                        disabled,
                        class,
                        active
                    }
                }
            }
        }
    `;

    const variables = {
        searchParams,
    }

    const response = await fetch(GRAPHQL_BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        })
    });

    if (response.ok) {
        const result = await response.json();
        return result?.data;
    } else {
        return Promise.reject(Error(response.statusText));
    }

}