process.env.NODE_ENV = 'test';
const test = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../src/server');

test('GET /api/workshops returns a paginated list', async () => {
  const res = await request(app).get('/api/workshops');
  assert.strictEqual(res.status, 200);
  assert.ok(Array.isArray(res.body.items));
});

test('GET /api/workshops/:id returns 404 for unknown id', async () => {
  const res = await request(app).get('/api/workshops/does-not-exist');
  assert.strictEqual(res.status, 404);
});

test('POST /api/workshops requires login', async () => {
  const res = await request(app).post('/api/workshops').send({});
  assert.strictEqual(res.status, 401);
});
