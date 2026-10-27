const Theatre = require('../models/theatres');

exports.list = (req, res) => res.json(Theatre.list(req.query));

exports.get = (req, res) => {
  const item = Theatre.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Theatre not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Theatre.create(req.body));

exports.update = (req, res) => {
  const item = Theatre.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Theatre not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Theatre.remove(req.params.id)) return res.status(404).json({ error: 'Theatre not found' });
  res.status(204).end();
};
