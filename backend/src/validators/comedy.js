const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/comedy');

module.exports = makeValidator(FIELDS, ['title']);
