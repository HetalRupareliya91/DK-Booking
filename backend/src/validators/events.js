const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/events');

module.exports = makeValidator(FIELDS, ['title']);
