const Refund = require('../models/refunds');

exports.list = (req, res) => res.json(Refund.list(req.query));

exports.get = (req, res) => {
  const item = Refund.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Refund not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Refund.create(req.body));

exports.update = (req, res) => {
  const item = Refund.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Refund not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Refund.remove(req.params.id)) return res.status(404).json({ error: 'Refund not found' });
  res.status(204).end();
};
