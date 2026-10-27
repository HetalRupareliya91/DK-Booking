const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/cities');

module.exports = makeValidator(FIELDS, ['name']);
