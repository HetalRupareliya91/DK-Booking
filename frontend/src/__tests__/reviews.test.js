import { describe, it, expect } from 'vitest';
import { reviewTitle, reviewValue } from '../utils/reviews';

const sample = {"id":"reviews-1","author":"Aarav","target":"Monsoon Express","stars":5,"comment":"Loved it!","createdAt":"2026-10-01T10:00:00.000Z"};

describe('reviews utils', () => {
  it('returns the display title', () => {
    expect(reviewTitle(sample)).toBe(String(sample.author));
  });

  it('handles missing items', () => {
    expect(reviewTitle(null)).toBe('');
    expect(reviewValue(null, 'author')).toBe('');
  });
});
