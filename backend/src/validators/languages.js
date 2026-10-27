const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/languages');

module.exports = makeValidator(FIELDS, ['name']);
