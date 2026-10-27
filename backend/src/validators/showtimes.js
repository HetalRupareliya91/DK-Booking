const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/showtimes');

module.exports = makeValidator(FIELDS, ['movie']);
