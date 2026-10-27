const crypto = require('crypto');

function newId(prefix) {
  const id = crypto.randomUUID().split('-')[0];
  return prefix ? prefix + '-' + id : id;
}

module.exports = { newId };
