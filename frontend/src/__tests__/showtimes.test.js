import { describe, it, expect } from 'vitest';
import { showtimeTitle, showtimeValue } from '../utils/showtimes';

const sample = {"id":"showtimes-1","movie":"Monsoon Express","theatre":"Aurora Cinemas","screen":"Screen 1","date":"2026-11-05","price":199,"createdAt":"2026-10-01T10:00:00.000Z"};

describe('showtimes utils', () => {
  it('returns the display title', () => {
    expect(showtimeTitle(sample)).toBe(String(sample.movie));
  });

  it('handles missing items', () => {
    expect(showtimeTitle(null)).toBe('');
    expect(showtimeValue(null, 'movie')).toBe('');
  });
});
