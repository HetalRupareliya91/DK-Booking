const Screen = require('../models/screens');

exports.list = (req, res) => res.json(Screen.list(req.query));

exports.get = (req, res) => {
  const item = Screen.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Screen not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Screen.create(req.body));

exports.update = (req, res) => {
  const item = Screen.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Screen not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Screen.remove(req.params.id)) return res.status(404).json({ error: 'Screen not found' });
  res.status(204).end();
};
