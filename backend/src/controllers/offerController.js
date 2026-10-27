const Offer = require('../models/offers');

exports.list = (req, res) => res.json(Offer.list(req.query));

exports.get = (req, res) => {
  const item = Offer.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Offer not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Offer.create(req.body));

exports.update = (req, res) => {
  const item = Offer.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Offer not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Offer.remove(req.params.id)) return res.status(404).json({ error: 'Offer not found' });
  res.status(204).end();
};
