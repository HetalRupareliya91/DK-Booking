const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/refunds');

module.exports = makeValidator(FIELDS, ['reference']);
