const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/screens');

module.exports = makeValidator(FIELDS, ['name']);
