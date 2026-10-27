const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/reports');

module.exports = makeValidator(FIELDS, ['title']);
