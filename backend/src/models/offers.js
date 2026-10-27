const store = require('../db/store');

const COLLECTION = 'offers';
const FIELDS = { title: 'string', bank: 'string', discountPct: 'number', validTill: 'date' };

module.exports = {
  COLLECTION,
  FIELDS,
  list: query => store.list(COLLECTION, query),
  get: id => store.get(COLLECTION, id),
  create: data => store.create(COLLECTION, data),
  update: (id, data) => store.update(COLLECTION, id, data),
  remove: id => store.remove(COLLECTION, id)
};
