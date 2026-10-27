const Wallet = require('../models/wallets');

exports.list = (req, res) => res.json(Wallet.list(req.query));

exports.get = (req, res) => {
  const item = Wallet.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Wallet not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Wallet.create(req.body));

exports.update = (req, res) => {
  const item = Wallet.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Wallet not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Wallet.remove(req.params.id)) return res.status(404).json({ error: 'Wallet not found' });
  res.status(204).end();
};
