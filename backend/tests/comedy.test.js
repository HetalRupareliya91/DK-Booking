process.env.NODE_ENV = 'test';
const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../src/server');

test('GET /api/comedy returns a paginated list', async () => {
  const res = await request(app).get('/api/comedy');
  assert.strictEqual(res.status, 200);
  assert.ok(Array.isArray(res.body.items));
});

test('GET /api/comedy/:id returns 404 for unknown id', async () => {
  const res = await request(app).get('/api/comedy/does-not-exist');
  assert.strictEqual(res.status, 404);
});

test('POST /api/comedy requires login', async () => {
  const res = await request(app).post('/api/comedy').send({});
  assert.strictEqual(res.status, 401);
});
