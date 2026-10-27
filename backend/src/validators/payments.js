const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/payments');

module.exports = makeValidator(FIELDS, ['reference']);
