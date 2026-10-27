const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/seats');

module.exports = makeValidator(FIELDS, ['row']);
