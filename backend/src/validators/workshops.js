const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/workshops');

module.exports = makeValidator(FIELDS, ['title']);
