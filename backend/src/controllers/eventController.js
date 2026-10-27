const Event = require('../models/events');

exports.list = (req, res) => res.json(Event.list(req.query));

exports.get = (req, res) => {
  const item = Event.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Event not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Event.create(req.body));

exports.update = (req, res) => {
  const item = Event.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Event not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Event.remove(req.params.id)) return res.status(404).json({ error: 'Event not found' });
  res.status(204).end();
};
