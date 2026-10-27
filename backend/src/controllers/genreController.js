const Genre = require('../models/genres');

exports.list = (req, res) => res.json(Genre.list(req.query));

exports.get = (req, res) => {
  const item = Genre.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Genre not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Genre.create(req.body));

exports.update = (req, res) => {
  const item = Genre.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Genre not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Genre.remove(req.params.id)) return res.status(404).json({ error: 'Genre not found' });
  res.status(204).end();
};
