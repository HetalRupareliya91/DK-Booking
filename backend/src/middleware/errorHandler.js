function notFound(req, res) {
  res.status(404).json({ error: 'Route not found: ' + req.method + ' ' + req.originalUrl });
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Something went wrong' });
}

module.exports = { notFound, errorHandler };
