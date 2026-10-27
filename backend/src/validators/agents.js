const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/agents');

module.exports = makeValidator(FIELDS, ['name']);
