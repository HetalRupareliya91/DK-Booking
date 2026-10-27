const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/bookings');

module.exports = makeValidator(FIELDS, ['reference']);
