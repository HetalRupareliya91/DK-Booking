const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/theatres');

module.exports = makeValidator(FIELDS, ['name']);
