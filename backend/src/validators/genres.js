const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/genres');

module.exports = makeValidator(FIELDS, ['name']);
