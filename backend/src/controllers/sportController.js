const Sport = require('../models/sports');

exports.list = (req, res) => res.json(Sport.list(req.query));

exports.get = (req, res) => {
  const item = Sport.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Sport not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Sport.create(req.body));

exports.update = (req, res) => {
  const item = Sport.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Sport not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Sport.remove(req.params.id)) return res.status(404).json({ error: 'Sport not found' });
  res.status(204).end();
};
