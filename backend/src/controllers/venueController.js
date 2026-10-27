const Venue = require('../models/venues');

exports.list = (req, res) => res.json(Venue.list(req.query));

exports.get = (req, res) => {
  const item = Venue.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Venue not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Venue.create(req.body));

exports.update = (req, res) => {
  const item = Venue.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Venue not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Venue.remove(req.params.id)) return res.status(404).json({ error: 'Venue not found' });
  res.status(204).end();
};
