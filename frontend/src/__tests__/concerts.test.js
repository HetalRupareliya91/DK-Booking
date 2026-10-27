import { describe, it, expect } from 'vitest';
import { concertTitle, concertValue } from '../utils/concerts';

const sample = {"id":"concerts-1","title":"Golden Hour Concert","artist":"The Raga Band","city":"Mumbai","date":"2026-11-05","price":199,"createdAt":"2026-10-01T10:00:00.000Z"};

describe('concerts utils', () => {
  it('returns the display title', () => {
    expect(concertTitle(sample)).toBe(String(sample.title));
  });

  it('handles missing items', () => {
    expect(concertTitle(null)).toBe('');
    expect(concertValue(null, 'title')).toBe('');
  });
});
