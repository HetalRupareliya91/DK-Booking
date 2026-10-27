import { describe, it, expect } from 'vitest';
import { sportTitle, sportValue } from '../utils/sports';

const sample = {"id":"sports-1","title":"Monsoon Express Sport","sport":"Cricket","venue":"NSCI Dome","date":"2026-11-05","price":199,"createdAt":"2026-10-01T10:00:00.000Z"};

describe('sports utils', () => {
  it('returns the display title', () => {
    expect(sportTitle(sample)).toBe(String(sample.title));
  });

  it('handles missing items', () => {
    expect(sportTitle(null)).toBe('');
    expect(sportValue(null, 'title')).toBe('');
  });
});
