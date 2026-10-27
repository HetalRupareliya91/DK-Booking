const Agent = require('../models/agents');

exports.list = (req, res) => res.json(Agent.list(req.query));

exports.get = (req, res) => {
  const item = Agent.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Agent not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Agent.create(req.body));

exports.update = (req, res) => {
  const item = Agent.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Agent not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Agent.remove(req.params.id)) return res.status(404).json({ error: 'Agent not found' });
  res.status(204).end();
};
