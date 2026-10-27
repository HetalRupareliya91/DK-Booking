const Report = require('../models/reports');

exports.list = (req, res) => res.json(Report.list(req.query));

exports.get = (req, res) => {
  const item = Report.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Report not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Report.create(req.body));

exports.update = (req, res) => {
  const item = Report.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Report not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Report.remove(req.params.id)) return res.status(404).json({ error: 'Report not found' });
  res.status(204).end();
};
