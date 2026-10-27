const Showtime = require('../models/showtimes');

exports.list = (req, res) => res.json(Showtime.list(req.query));

exports.get = (req, res) => {
  const item = Showtime.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Showtime not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Showtime.create(req.body));

exports.update = (req, res) => {
  const item = Showtime.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Showtime not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Showtime.remove(req.params.id)) return res.status(404).json({ error: 'Showtime not found' });
  res.status(204).end();
};
