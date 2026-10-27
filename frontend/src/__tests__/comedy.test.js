import { describe, it, expect } from 'vitest';
import { comedyShowTitle, comedyShowValue } from '../utils/comedy';

const sample = {"id":"comedy-1","title":"Monsoon Express Comedy Show","comedian":"Ravi K","venue":"NSCI Dome","date":"2026-11-05","price":199,"createdAt":"2026-10-01T10:00:00.000Z"};

describe('comedy utils', () => {
  it('returns the display title', () => {
    expect(comedyShowTitle(sample)).toBe(String(sample.title));
  });

  it('handles missing items', () => {
    expect(comedyShowTitle(null)).toBe('');
    expect(comedyShowValue(null, 'title')).toBe('');
  });
});
