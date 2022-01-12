const typeDefs = {
    productCategoryTypeDefs: `
        type ProductCategory {
            name: String
            productCount: Int
            imageUrl: String
            id: String
            url: String
        }

        extend type Query {
            productCategories: [ProductCategory]
        }
    `,
    productSearchTypeDefs: `
        input RatingsInput {
            gte: Int
        }

        input PriceInput {
            gte: Int
            lte: Int
        }

        enum SortInput {
            RELEVANCE
            PRICE_ASC
            PRICE_DESC
            RATINGS_DESC
        }

        enum DeliveryOptionsInput {
            NEXT_DAY
        }

        input SearchParams {
            searchText: String
            categories: [String]
            brands: [String]
            ratings: RatingsInput
            price: PriceInput
            sort: SortInput
            delivery: DeliveryOptionsInput
            page: Int
        }

        type Product {
            id: String
            name: String
            description: String
            category: String
            brand: String
            url: String
            retailPrice: String
            discountedPrice: String
            hasNextDayDelivery: String
            rating: String
            images: [String]
        }

        type Total {
            value: Int
            relation: String
        }

        type ProductsInfo {
            products: [Product]
            total: Total
        }


        type SortFilter {
            name: String
            value: String
            active: Boolean
        }
    
        type DeliveryFilter {
            id: String
            name: String
            value: String
            active: Boolean
        }
    
        type RatingsFilter {
            id: String
            name: String
            value: Int
            active: Boolean
        }
    
        type CategoriesFilter {
            id: String
            imageUrl: String
            name: String
            value: String
            active: Boolean
        }
    
        type BrandsFilter {
            id: String
            name: String
            value: String
            active: Boolean
        }
    
        type Filters {
            searchText: String
            categories: [CategoriesFilter]
            brands: [BrandsFilter]
            ratings: [RatingsFilter]
            delivery: [DeliveryFilter]
            sort: [SortFilter]
        }

        type Pagination {
            name: String
            value: Int
            disabled: Boolean
            class: String
            active: Boolean
        }

        type PaginationInfo {
            currentPage: Int
            totalPages: Int
            pagination: [Pagination]
        }

        type SearchResults {
            productsInfo: ProductsInfo
            filters: Filters
            paginationInfo: PaginationInfo
        }

        extend type Query {
            products(searchParams: SearchParams): SearchResults
        }
    `,
    productSearchSuggestionsTypeDefs: `
        type Suggestions {
            text: String
            score: Float
            freq: Int
        }

        extend type Query {
            productSuggestions(searchText: String!): [Suggestions]
        }

    `,
};

module.exports = {
    typeDefs,
};