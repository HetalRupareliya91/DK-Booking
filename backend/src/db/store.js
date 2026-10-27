const fs = require('fs');
const path = require('path');
const { newId } = require('../utils/id');

const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, '..', '..', 'data');
const cache = {};

const file = name => path.join(DATA_DIR, name + '.json');

function load(name) {
  if (!cache[name]) {
    try { cache[name] = JSON.parse(fs.readFileSync(file(name), 'utf8')); }
    catch (e) { cache[name] = []; }
  }
  return cache[name];
}

function save(name) {
  if (process.env.NODE_ENV === 'test') return;
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(file(name), JSON.stringify(cache[name], null, 2));
}

function list(name, query = {}) {
  const { q, page = 1, limit = 20, ...filters } = query;
  let rows = load(name);
  Object.entries(filters).forEach(([k, v]) => { rows = rows.filter(r => String(r[k]) === String(v)); });
  if (q) {
    const s = String(q).toLowerCase();
    rows = rows.filter(r => JSON.stringify(r).toLowerCase().includes(s));
  }
  const p = Math.max(1, Number(page) || 1);
  const l = Math.min(100, Math.max(1, Number(limit) || 20));
  return { total: rows.length, page: p, limit: l, items: rows.slice((p - 1) * l, p * l) };
}

const get = (name, id) => load(name).find(r => r.id === id) || null;

function create(name, data) {
  const row = { id: newId(name), ...data, createdAt: new Date().toISOString() };
  load(name).push(row);
  save(name);
  return row;
}

function update(name, id, data) {
  const row = get(name, id);
  if (!row) return null;
  Object.assign(row, data, { id, updatedAt: new Date().toISOString() });
  save(name);
  return row;
}

function remove(name, id) {
  const rows = load(name);
  const idx = rows.findIndex(r => r.id === id);
  if (idx === -1) return false;
  rows.splice(idx, 1);
  save(name);
  return true;
}

module.exports = { list, get, create, update, remove, load };
