const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/users');

module.exports = makeValidator(FIELDS, ['name']);
