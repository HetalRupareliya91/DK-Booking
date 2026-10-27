const User = require('../models/users');

exports.list = (req, res) => res.json(User.list(req.query));

exports.get = (req, res) => {
  const item = User.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'User not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(User.create(req.body));

exports.update = (req, res) => {
  const item = User.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'User not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!User.remove(req.params.id)) return res.status(404).json({ error: 'User not found' });
  res.status(204).end();
};
