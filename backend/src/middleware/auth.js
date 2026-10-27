const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'dk-booking-dev-secret';

const sign = user => jwt.sign({ id: user.id, role: user.role, name: user.name }, SECRET, { expiresIn: '7d' });

function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Login required' });
  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch (e) {
    res.status(401).json({ error: 'Session expired, please login again' });
  }
}

const requireRole = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) return res.status(403).json({ error: 'Not allowed' });
  next();
};

module.exports = { sign, requireAuth, requireRole };
