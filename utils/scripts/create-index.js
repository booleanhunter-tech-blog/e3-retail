require('dotenv').config();
const debug = require('debug')('e3retail:create-index');

const createIndex = require('../../models/products').createIndex;

const INDEX_NAME = process.argv.slice(2)[0] || 'products';

createIndex(INDEX_NAME);