const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/plays');

module.exports = makeValidator(FIELDS, ['title']);
