const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/movies');

module.exports = makeValidator(FIELDS, ['title']);
