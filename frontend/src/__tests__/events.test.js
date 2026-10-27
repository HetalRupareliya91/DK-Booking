import { describe, it, expect } from 'vitest';
import { eventTitle, eventValue } from '../utils/events';

const sample = {"id":"events-1","title":"Monsoon Express Event","category":"Music","city":"Mumbai","date":"2026-11-05","price":199,"createdAt":"2026-10-01T10:00:00.000Z"};

describe('events utils', () => {
  it('returns the display title', () => {
    expect(eventTitle(sample)).toBe(String(sample.title));
  });

  it('handles missing items', () => {
    expect(eventTitle(null)).toBe('');
    expect(eventValue(null, 'title')).toBe('');
  });
});
