const store = require('../db/store');

const COLLECTION = 'users';
const FIELDS = { name: 'string', email: 'string', phone: 'string', city: 'string', role: 'string' };

module.exports = {
  COLLECTION,
  FIELDS,
  list: query => store.list(COLLECTION, query),
  get: id => store.get(COLLECTION, id),
  create: data => store.create(COLLECTION, data),
  update: (id, data) => store.update(COLLECTION, id, data),
  remove: id => store.remove(COLLECTION, id)
};
