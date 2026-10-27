const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/coupons');

module.exports = makeValidator(FIELDS, ['code']);
