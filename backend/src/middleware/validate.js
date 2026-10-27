function makeValidator(fields, required = []) {
  return (req, res, next) => {
    const errors = [];
    const body = req.body || {};
    required.forEach(k => {
      if (body[k] === undefined || body[k] === '') errors.push(k + ' is required');
    });
    Object.entries(fields).forEach(([k, type]) => {
      const v = body[k];
      if (v === undefined || v === '') return;
      if (type === 'number' && isNaN(Number(v))) errors.push(k + ' must be a number');
      if (type === 'boolean' && typeof v !== 'boolean') errors.push(k + ' must be true or false');
      if (type === 'date' && isNaN(Date.parse(v))) errors.push(k + ' must be a valid date');
    });
    if (errors.length) return res.status(400).json({ error: 'Validation failed', details: errors });
    next();
  };
}

module.exports = { makeValidator };
