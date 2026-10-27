process.env.NODE_ENV = 'test';
const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../src/server');

test('GET /api/screens returns a paginated list', async () => {
  const res = await request(app).get('/api/screens');
  assert.strictEqual(res.status, 200);
  assert.ok(Array.isArray(res.body.items));
});

test('GET /api/screens/:id returns 404 for unknown id', async () => {
  const res = await request(app).get('/api/screens/does-not-exist');
  assert.strictEqual(res.status, 404);
});

test('POST /api/screens requires login', async () => {
  const res = await request(app).post('/api/screens').send({});
  assert.strictEqual(res.status, 401);
});
