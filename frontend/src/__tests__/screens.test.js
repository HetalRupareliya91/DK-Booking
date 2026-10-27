import { describe, it, expect } from 'vitest';
import { screenTitle, screenValue } from '../utils/screens';

const sample = {"id":"screens-1","name":"Screen 1","theatre":"Aurora Cinemas","format":"2D","capacity":120,"createdAt":"2026-10-01T10:00:00.000Z"};

describe('screens utils', () => {
  it('returns the display title', () => {
    expect(screenTitle(sample)).toBe(String(sample.name));
  });

  it('handles missing items', () => {
    expect(screenTitle(null)).toBe('');
    expect(screenValue(null, 'name')).toBe('');
  });
});
