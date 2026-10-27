const SupportTicket = require('../models/support_tickets');

exports.list = (req, res) => res.json(SupportTicket.list(req.query));

exports.get = (req, res) => {
  const item = SupportTicket.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'SupportTicket not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(SupportTicket.create(req.body));

exports.update = (req, res) => {
  const item = SupportTicket.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'SupportTicket not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!SupportTicket.remove(req.params.id)) return res.status(404).json({ error: 'SupportTicket not found' });
  res.status(204).end();
};
