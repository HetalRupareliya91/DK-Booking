const Booking = require('../models/bookings');

exports.list = (req, res) => res.json(Booking.list(req.query));

exports.get = (req, res) => {
  const item = Booking.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Booking not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Booking.create(req.body));

exports.update = (req, res) => {
  const item = Booking.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Booking not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Booking.remove(req.params.id)) return res.status(404).json({ error: 'Booking not found' });
  res.status(204).end();
};
