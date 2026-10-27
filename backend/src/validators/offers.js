const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/offers');

module.exports = makeValidator(FIELDS, ['title']);
