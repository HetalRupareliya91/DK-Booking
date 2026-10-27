const Coupon = require('../models/coupons');

exports.list = (req, res) => res.json(Coupon.list(req.query));

exports.get = (req, res) => {
  const item = Coupon.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Coupon not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Coupon.create(req.body));

exports.update = (req, res) => {
  const item = Coupon.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Coupon not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Coupon.remove(req.params.id)) return res.status(404).json({ error: 'Coupon not found' });
  res.status(204).end();
};
