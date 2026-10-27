const ComedyShow = require('../models/comedy');

exports.list = (req, res) => res.json(ComedyShow.list(req.query));

exports.get = (req, res) => {
  const item = ComedyShow.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'ComedyShow not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(ComedyShow.create(req.body));

exports.update = (req, res) => {
  const item = ComedyShow.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'ComedyShow not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!ComedyShow.remove(req.params.id)) return res.status(404).json({ error: 'ComedyShow not found' });
  res.status(204).end();
};
