const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/concerts');

module.exports = makeValidator(FIELDS, ['title']);
