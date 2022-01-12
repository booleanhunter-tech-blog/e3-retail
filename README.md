![](/public/images/index.png)
## E³Retail

> An E-commerce products-list website that demonstrates the application of Elasticsearch in retail & online shopping.

### App Screenshots

#### Home Page

![Screenshot of home page](/public/images/e3-retail_home.png)

#### Products filter page

![Screenshot of products filter page](/public/images/e3-retail_search.png)

### Features

- Responsive on web and mobile.
- Built using [Progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement) philosophy.

#### Search features

- Search for a product by typing in the search input.
- Search within a category.
- Search across multiple categories.
- Filter by brand, pricing and ratings.
- Sort by relevance, ratings or price.
- Paginate through search results.
- Search input autocomplete suggestions (requires JavaScript to be enabled).

### Requirements

- A laptop or a desktop computer.
- Chrome browser.
- Internet connectivity.

### Instructions to run

1. Requires **[AWS OpenSearch](https://aws.amazon.com/opensearch-service/)**
2. Initialize environment variables. If you're running the app locally, create a `.env` file:

```shell
    NODE_ENV=development
    ELASTICSEARCH_HOST=your-elasticsearch-domain
    ELASTICSEARCH_PORT=443
    ELASTICSEARCH_USER=your-elasticsearch-master-user
    ELASTICSEARCH_PASSWORD=your-elasticsearch-master-password
    ELASTICSEARCH_INDEX=index-to-search-on
```

3. Install [Node.js](https://nodejs.org/)
4. Clone or fork this repo
5. Run `npm install` in your project root
6. Run `npm start` to start the app server

### Common commands

#### Creating an index

`npm run create-index your-index-name`

#### Bulk uploading Data

Syntax for uploading data in `.ndjson` format:

```
curl -XPOST -u 'username:password' 'your-elasticsearch-url/_bulk' --data-binary @datasets/flipkart-products-bulk.ndjson -H 'Content-Type: application/json'
```

#### Working on templates

Templates inside the `views` directory can be used for both server-side as well as client-side rendering, with the help of Handlebars. Once you make changes to the templates inside the `views` directory, run `npm run create-templates` to compile them for client-side usage.

### Known issues

- Images may not load if they have been removed at the source.