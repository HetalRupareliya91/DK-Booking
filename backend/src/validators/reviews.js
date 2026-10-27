const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/reviews');

module.exports = makeValidator(FIELDS, ['author']);
