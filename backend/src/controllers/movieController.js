const Movie = require('../models/movies');

exports.list = (req, res) => res.json(Movie.list(req.query));

exports.get = (req, res) => {
  const item = Movie.get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Movie not found' });
  res.json(item);
};

exports.create = (req, res) => res.status(201).json(Movie.create(req.body));

exports.update = (req, res) => {
  const item = Movie.update(req.params.id, req.body);
  if (!item) return res.status(404).json({ error: 'Movie not found' });
  res.json(item);
};

exports.remove = (req, res) => {
  if (!Movie.remove(req.params.id)) return res.status(404).json({ error: 'Movie not found' });
  res.status(204).end();
};
