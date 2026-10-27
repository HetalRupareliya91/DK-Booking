const Payment = require('../models/payments');

exports.list = (req, res) => res.json(Payment.list(req.query));

exports.get = (req, res) => {
  const item = Payment.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Payment not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Payment.create(req.body));

exports.update = (req, res) => {
  const item = Payment.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Payment not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Payment.remove(req.params.id)) return res.status(404).json({ error: 'Payment not found' });
  res.status(204).end();
};
