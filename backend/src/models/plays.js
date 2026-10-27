const store = require('../db/store');

const COLLECTION = 'plays';
const FIELDS = { title: 'string', language: 'string', venue: 'string', date: 'date', price: 'number' };

module.exports = {
  COLLECTION,
  FIELDS,
  list: query => store.list(COLLECTION, query),
  get: id => store.get(COLLECTION, id),
  create: data => store.create(COLLECTION, data),
  update: (id, data) => store.update(COLLECTION, id, data),
  remove: id => store.remove(COLLECTION, id)
};
