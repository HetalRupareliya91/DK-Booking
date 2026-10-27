const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/wallets');

module.exports = makeValidator(FIELDS, ['owner']);
