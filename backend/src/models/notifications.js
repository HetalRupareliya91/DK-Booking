const store = require('../db/store');

const COLLECTION = 'notifications';
const FIELDS = { title: 'string', channel: 'string', audience: 'string', date: 'date' };

module.exports = {
  COLLECTION,
  FIELDS,
  list: query => store.list(COLLECTION, query),
  get: id => store.get(COLLECTION, id),
  create: data => store.create(COLLECTION, data),
  update: (id, data) => store.update(COLLECTION, id, data),
  remove: id => store.remove(COLLECTION, id)
};
