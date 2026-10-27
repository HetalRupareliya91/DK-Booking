process.env.NODE_ENV = 'test';
const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../src/server');

test('GET /api/languages returns a paginated list', async () => {
  const res = await request(app).get('/api/languages');
  assert.strictEqual(res.status, 200);
  assert.ok(Array.isArray(res.body.items));
});

test('GET /api/languages/:id returns 404 for unknown id', async () => {
  const res = await request(app).get('/api/languages/does-not-exist');
  assert.strictEqual(res.status, 404);
});

test('POST /api/languages requires login', async () => {
  const res = await request(app).post('/api/languages').send({});
  assert.strictEqual(res.status, 401);
});
