const client = require('./db').client;

const debug = require('debug')('e3retail:products-db');

/**
 * Search Parameters
 * @typedef {Object} SearchParams
 * @property {string} [search_text]
 * @property {string[]} [brands]
 * @property {string[]} [categories]
 * @property {{}} [delivery]
 * @property {{}} [price]
 * @property {{}} [ratings]
 * @property {string} [sort]
 * @property {number} [page]
 * @property {number} [size]
 */

/**
 * Search Hits
 * @typedef {Object} SearchHits
 * @property {{}} total
 * @property {number} max_score
 * @property {[]} hits
 */

/**
 * Aggregation Data
 * @typedef {Object} Aggregation
 * @property {string} key
 * @property {number} doc_count
 */

/**
 * Search Result
 * @typedef {Object} SearchResult
 * @property {SearchHits} hits
 * @property {Aggregation[]} aggregations
 */

/**
 * Get the number of products in each category for the given index
 * @param {string} indexName
 * @return {Promise<Aggregation[]>} Participant
 */
async function getProductAggregatesByCategory(indexName) {
    try {
        const query = {
            "aggs": {
                "aggregationByCategories": {
                    "terms": {
                        "field": "category",
                        "size": 20
                    }
                }
            }
        };
    
        const response = await client.search({
            index: indexName,
            body: query
        });

        return response.body?.aggregations?.aggregationByCategories?.buckets;

    } catch(err) {
        debug(err.stack);
    }
}

/**
 * Search and get products based on given search parameters
 * @param {string} indexName
 * @param {SearchParams} searchParams
 * @return {Promise<SearchResult>} SearchResult
 */
async function getProducts(indexName, searchParams) {
    try {

        const query = {
            "size": searchParams.size,
            "query": {
                "bool": {
                    "must": [],
                }
            },
            "aggs": {
                "aggregationByBrands": {
                    "terms": {
                        "field": "brand"
                    }
                }
            }
        };

        if (searchParams.page && searchParams.size) {
            query.from = (searchParams.page -1) * searchParams.size;
        }
    
        if (searchParams.search_text) {
            query.query.bool.must.push({
                "multi_match": {
                    "query": searchParams.search_text,
                    "fields": [
                        "product_name",
                        "description",
                    ],
                    "fuzziness": "AUTO"
                }
            });
        }
    
        if (searchParams.categories && searchParams.categories.length > 0) {
            query.query.bool.must.push({
                "terms": {
                    "category": searchParams.categories,
                }
            });
        }

        if (searchParams.brands && searchParams.brands.length > 0) {
            query.query.bool.must.push({
                "terms": {
                    "brand": searchParams.brands,
                }
            });
        }
    
        if (searchParams.delivery?.['next-day']) {
            query.query.bool.must.push({
                "term": {
                    "has_next_day_delivery": searchParams.delivery['next-day'],
                }
            });
        }
    
        if (searchParams.price && Object.keys(searchParams.price).length > 0) {
            query.query.bool.must.push({
                "range": {
                    "retail_price": searchParams.price,
                }
            });
        }
    
        if (searchParams.ratings) {
            query.query.bool.must.push({
                "range": {
                    "product_rating": searchParams.ratings,
                }
            });
        }
    
        if (searchParams.sort) {
    
            if (searchParams.sort === 'price_asc') {
                query.sort = [
                    {
                        "retail_price": {
                            "order": "asc"
                        }
                    }
                ]
            } else if (searchParams.sort === 'price_desc') {
                query.sort = [
                    {
                        "retail_price": {
                            "order": "desc"
                        }
                    }
                ]
            } else if (searchParams.sort === 'ratings_desc') {
                query.sort = [
                    {
                        "product_rating": {
                            "order": "desc"
                        }
                    }
                ]
            }
        }

        const response = await client.search({
            index: indexName,
            body: query
        });

        return {
            hits: response.body.hits,
            aggregations: response.body.aggregations?.aggregationByBrands?.buckets,
        }

    } catch(err) {
        debug(err.stack);
    }
}

/**
 * Gets search suggestions for a given string
 * @param {string} indexName
 * @param {string} searchString
 */
async function getSuggestionsForTerm(indexName, searchString) {
    try {
        const query = {
            "suggest": {
                "product-suggestions": {
                    "text": searchString,
                    "term": {
                        "field": "product_name",
                        "min_word_length": 3,
                    }
                }
            }
        };
    
        const response = await client.search({
            index: indexName,
            body: query
        });
        
        return response.body?.suggest?.["product-suggestions"]?.[0].options;

    } catch(err) {
        debug(err.stack);
    }
}

/**
 * Creates an index for storing product information
 * @param {string} indexName
 */
async function createIndex(indexName) {
    const settings = {
        'settings': {
            'index': {
                'number_of_shards': 1,
                'number_of_replicas': 1
            }
        },
        "mappings": {
            "properties": {
                "brand": {
                    "type": "keyword",
                    "fields": {
                        "raw": {
                            "type": "text"
                        }
                    }
                },
                "category": {
                    "type": "keyword"
                },
                "description": {
                    "type": "text"
                },
                "discounted_price": {
                    "type": "float"
                },
                "has_next_day_delivery": {
                    "type": "boolean"
                },
                "id": {
                    "type": "long"
                },
                "overall_rating": {
                    "type": "half_float"
                },
                "pid": {
                    "type": "keyword"
                },
                "product_name": {
                    "type": "search_as_you_type"
                },
                "product_rating": {
                    "type": "half_float"
                },
                "product_url": {
                    "type": "keyword"
                },
                "retail_price": {
                    "type": "float"
                },
                "uniq_id": {
                    "type": "keyword"
                }
            }
        } 
    };

    debug(`Creating index "${indexName}" ...`);

    const response = await client.indices.create({
        index: indexName,
        body: settings
    });

    debug(response.body);
    return response;
}

module.exports = {
    getProductAggregatesByCategory,
    getProducts,
    getSuggestionsForTerm,
    createIndex,
}
