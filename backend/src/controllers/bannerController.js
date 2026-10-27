const Banner = require('../models/banners');

exports.list = (req, res) => res.json(Banner.list(req.query));

exports.get = (req, res) => {
  const item = Banner.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Banner not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Banner.create(req.body));

exports.update = (req, res) => {
  const item = Banner.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Banner not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Banner.remove(req.params.id)) return res.status(404).json({ error: 'Banner not found' });
  res.status(204).end();
};
