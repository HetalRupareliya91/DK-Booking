import { describe, it, expect } from 'vitest';
import { workshopTitle, workshopValue } from '../utils/workshops';

const sample = {"id":"workshops-1","title":"Silent Waves Workshop","host":"Studio Craft","mode":"Online","date":"2026-11-05","price":199,"createdAt":"2026-10-01T10:00:00.000Z"};

describe('workshops utils', () => {
  it('returns the display title', () => {
    expect(workshopTitle(sample)).toBe(String(sample.title));
  });

  it('handles missing items', () => {
    expect(workshopTitle(null)).toBe('');
    expect(workshopValue(null, 'title')).toBe('');
  });
});
