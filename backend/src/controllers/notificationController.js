const Notification = require('../models/notifications');

exports.list = (req, res) => res.json(Notification.list(req.query));

exports.get = (req, res) => {
  const item = Notification.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Notification not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Notification.create(req.body));

exports.update = (req, res) => {
  const item = Notification.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Notification not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Notification.remove(req.params.id)) return res.status(404).json({ error: 'Notification not found' });
  res.status(204).end();
};
