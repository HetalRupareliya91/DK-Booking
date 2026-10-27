const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/sports');

module.exports = makeValidator(FIELDS, ['title']);
