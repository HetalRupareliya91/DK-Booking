import { describe, it, expect } from 'vitest';
import { cityTitle, cityValue } from '../utils/cities';

const sample = {"id":"cities-1","name":"Mumbai","state":"Maharashtra","active":true,"createdAt":"2026-10-01T10:00:00.000Z"};

describe('cities utils', () => {
  it('returns the display title', () => {
    expect(cityTitle(sample)).toBe(String(sample.name));
  });

  it('handles missing items', () => {
    expect(cityTitle(null)).toBe('');
    expect(cityValue(null, 'name')).toBe('');
  });
});
