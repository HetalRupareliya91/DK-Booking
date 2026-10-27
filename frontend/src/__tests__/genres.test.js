import { describe, it, expect } from 'vitest';
import { genreTitle, genreValue } from '../utils/genres';

const sample = {"id":"genres-1","name":"Action","description":"High energy stories","createdAt":"2026-10-01T10:00:00.000Z"};

describe('genres utils', () => {
  it('returns the display title', () => {
    expect(genreTitle(sample)).toBe(String(sample.name));
  });

  it('handles missing items', () => {
    expect(genreTitle(null)).toBe('');
    expect(genreValue(null, 'name')).toBe('');
  });
});
