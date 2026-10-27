process.env.NODE_ENV = 'test';
const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../src/server');

test('GET /api/refunds returns a paginated list', async () => {
  const res = await request(app).get('/api/refunds');
  assert.strictEqual(res.status, 200);
  assert.ok(Array.isArray(res.body.items));
});

test('GET /api/refunds/:id returns 404 for unknown id', async () => {
  const res = await request(app).get('/api/refunds/does-not-exist');
  assert.strictEqual(res.status, 404);
});

test('POST /api/refunds requires login', async () => {
  const res = await request(app).post('/api/refunds').send({});
  assert.strictEqual(res.status, 401);
});
