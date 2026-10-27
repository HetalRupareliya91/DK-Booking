const Review = require('../models/reviews');

exports.list = (req, res) => res.json(Review.list(req.query));

exports.get = (req, res) => {
  const item = Review.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Review not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Review.create(req.body));

exports.update = (req, res) => {
  const item = Review.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Review not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Review.remove(req.params.id)) return res.status(404).json({ error: 'Review not found' });
  res.status(204).end();
};
