const City = require('../models/cities');

exports.list = (req, res) => res.json(City.list(req.query));

exports.get = (req, res) => {
  const item = City.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'City not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(City.create(req.body));

exports.update = (req, res) => {
  const item = City.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'City not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!City.remove(req.params.id)) return res.status(404).json({ error: 'City not found' });
  res.status(204).end();
};
