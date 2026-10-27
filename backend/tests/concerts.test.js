process.env.NODE_ENV = 'test';
const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../src/server');

test('GET /api/concerts returns a paginated list', async () => {
  const res = await request(app).get('/api/concerts');
  assert.strictEqual(res.status, 200);
  assert.ok(Array.isArray(res.body.items));
});

test('GET /api/concerts/:id returns 404 for unknown id', async () => {
  const res = await request(app).get('/api/concerts/does-not-exist');
  assert.strictEqual(res.status, 404);
});

test('POST /api/concerts requires login', async () => {
  const res = await request(app).post('/api/concerts').send({});
  assert.strictEqual(res.status, 401);
});
