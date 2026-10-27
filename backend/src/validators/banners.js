const { makeValidator } = require('../middleware/validate');
const { FIELDS } = require('../models/banners');

module.exports = makeValidator(FIELDS, ['title']);
