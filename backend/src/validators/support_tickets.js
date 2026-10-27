const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/support_tickets');

module.exports = makeValidator(FIELDS, ['subject']);
