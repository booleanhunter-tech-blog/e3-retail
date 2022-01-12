const { Client } = require('@opensearch-project/opensearch');

const client = new Client({
    node: 'https://' + process.env.ELASTICSEARCH_USER
            + ':' + process.env.ELASTICSEARCH_PASSWORD
            + '@' + process.env.ELASTICSEARCH_HOST
            + ':' + process.env.ELASTICSEARCH_PORT,
});

module.exports = {
    client,
}
