import { describe, it, expect } from 'vitest';
import { seatTitle, seatValue } from '../utils/seats';

const sample = {"id":"seats-1","row":"A","number":1,"category":"Classic","price":180,"status":"available","createdAt":"2026-10-01T10:00:00.000Z"};

describe('seats utils', () => {
  it('returns the display title', () => {
    expect(seatTitle(sample)).toBe(String(sample.row));
  });

  it('handles missing items', () => {
    expect(seatTitle(null)).toBe('');
    expect(seatValue(null, 'row')).toBe('');
  });
});
