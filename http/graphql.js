const { ApolloServer, gql } = require('apollo-server-express');

const productTypeDefs = require('../services/products/api/graphql/types').typeDefs;
const productResolvers = require('../services/products/api/graphql/resolvers').resolvers;

async function startGraphqlServer(app) {
    const typeDefs = gql`
        type Query
        ${productTypeDefs.productCategoryTypeDefs}
        ${productTypeDefs.productSearchTypeDefs}
        ${productTypeDefs.productSearchSuggestionsTypeDefs}
    `;

    const resolvers = {
        Query: {
            ...productResolvers.queries,
        }
    }

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}

module.exports = {
    startGraphqlServer,
}