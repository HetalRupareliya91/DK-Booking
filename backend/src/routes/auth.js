const express = require('express');
const store = require('../db/store');
const { hashPassword, verifyPassword } = require('../utils/password');
const { sign, requireAuth } = require('../middleware/auth');

const router = express.Router();
const COLLECTION = 'accounts';

function ensureDemoAccounts() {
  if (store.load(COLLECTION).length) return;
  [
    ['Admin', 'admin@dkbooking.in', 'Admin@123', 'admin'],
    ['Agent', 'agent@dkbooking.in', 'Agent@123', 'agent'],
    ['Demo User', 'user@dkbooking.in', 'User@123', 'user']
  ].forEach(([name, email, password, role]) => store.create(COLLECTION, { name, email, role, password: hashPassword(password) }));
}

const publicUser = u => ({ id: u.id, name: u.name, email: u.email, role: u.role });

router.post('/register', (req, res) => {
  ensureDemoAccounts();
  const { name, email, password } = req.body || {};
  if (!name || !email || !password) return res.status(400).json({ error: 'Name, email and password are required' });
  if (store.load(COLLECTION).some(a => a.email === email)) return res.status(409).json({ error: 'Email already registered' });
  const user = store.create(COLLECTION, { name, email, role: 'user', password: hashPassword(password) });
  res.status(201).json({ token: sign(user), user: publicUser(user) });
});

router.post('/login', (req, res) => {
  ensureDemoAccounts();
  const { email, password } = req.body || {};
  const user = store.load(COLLECTION).find(a => a.email === email);
  if (!user || !verifyPassword(password || '', user.password)) return res.status(401).json({ error: 'Invalid email or password' });
  res.json({ token: sign(user), user: publicUser(user) });
});

router.get('/me', requireAuth, (req, res) => {
  const user = store.get(COLLECTION, req.user.id);
  if (!user) return res.status(404).json({ error: 'Account not found' });
  res.json(publicUser(user));
});

module.exports = { path: '/api/auth', router };
