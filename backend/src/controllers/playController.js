const Play = require('../models/plays');

exports.list = (req, res) => res.json(Play.list(req.query));

exports.get = (req, res) => {
  const item = Play.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Play not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Play.create(req.body));

exports.update = (req, res) => {
  const item = Play.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Play not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Play.remove(req.params.id)) return res.status(404).json({ error: 'Play not found' });
  res.status(204).end();
};
