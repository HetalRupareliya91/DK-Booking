import { describe, it, expect } from 'vitest';
import { theatreTitle, theatreValue } from '../utils/theatres';

const sample = {"id":"theatres-1","name":"Aurora Cinemas","city":"Mumbai","address":"Ring Road","screens":120,"createdAt":"2026-10-01T10:00:00.000Z"};

describe('theatres utils', () => {
  it('returns the display title', () => {
    expect(theatreTitle(sample)).toBe(String(sample.name));
  });

  it('handles missing items', () => {
    expect(theatreTitle(null)).toBe('');
    expect(theatreValue(null, 'name')).toBe('');
  });
});
