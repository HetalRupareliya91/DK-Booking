process.env.NODE_ENV = 'test';
const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../src/server');

test('GET /api/sports returns a paginated list', async () => {
  const res = await request(app).get('/api/sports');
  assert.strictEqual(res.status, 200);
  assert.ok(Array.isArray(res.body.items));
});

test('GET /api/sports/:id returns 404 for unknown id', async () => {
  const res = await request(app).get('/api/sports/does-not-exist');
  assert.strictEqual(res.status, 404);
});

test('POST /api/sports requires login', async () => {
  const res = await request(app).post('/api/sports').send({});
  assert.strictEqual(res.status, 401);
});
