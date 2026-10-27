const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/venues');

module.exports = makeValidator(FIELDS, ['name']);
