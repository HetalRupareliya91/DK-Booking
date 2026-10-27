import { describe, it, expect } from 'vitest';
import { playTitle, playValue } from '../utils/plays';

const sample = {"id":"plays-1","title":"Desert Run Play","language":"Hindi","venue":"NSCI Dome","date":"2026-11-05","price":199,"createdAt":"2026-10-01T10:00:00.000Z"};

describe('plays utils', () => {
  it('returns the display title', () => {
    expect(playTitle(sample)).toBe(String(sample.title));
  });

  it('handles missing items', () => {
    expect(playTitle(null)).toBe('');
    expect(playValue(null, 'title')).toBe('');
  });
});
