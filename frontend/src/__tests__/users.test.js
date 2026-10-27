import { describe, it, expect } from 'vitest';
import { userTitle, userValue } from '../utils/users';

const sample = {"id":"users-1","name":"Aarav Shah","email":"aarav@example.com","phone":"9800000001","city":"Mumbai","role":"user","createdAt":"2026-10-01T10:00:00.000Z"};

describe('users utils', () => {
  it('returns the display title', () => {
    expect(userTitle(sample)).toBe(String(sample.name));
  });

  it('handles missing items', () => {
    expect(userTitle(null)).toBe('');
    expect(userValue(null, 'name')).toBe('');
  });
});
