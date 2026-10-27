const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/notifications');

module.exports = makeValidator(FIELDS, ['title']);
