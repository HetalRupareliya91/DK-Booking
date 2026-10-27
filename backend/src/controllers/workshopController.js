const Workshop = require('../models/workshops');

exports.list = (req, res) => res.json(Workshop.list(req.query));

exports.get = (req, res) => {
  const item = Workshop.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Workshop not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Workshop.create(req.body));

exports.update = (req, res) => {
  const item = Workshop.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Workshop not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Workshop.remove(req.params.id)) return res.status(404).json({ error: 'Workshop not found' });
  res.status(204).end();
};
