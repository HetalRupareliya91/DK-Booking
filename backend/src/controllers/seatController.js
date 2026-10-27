const Seat = require('../models/seats');

exports.list = (req, res) => res.json(Seat.list(req.query));

exports.get = (req, res) => {
  const item = Seat.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Seat not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Seat.create(req.body));

exports.update = (req, res) => {
  const item = Seat.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Seat not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Seat.remove(req.params.id)) return res.status(404).json({ error: 'Seat not found' });
  res.status(204).end();
};
