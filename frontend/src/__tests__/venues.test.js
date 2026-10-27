import { describe, it, expect } from 'vitest';
import { venueTitle, venueValue } from '../utils/venues';

const sample = {"id":"venues-1","name":"Aurora Arena","city":"Mumbai","type":"Stadium","capacity":120,"createdAt":"2026-10-01T10:00:00.000Z"};

describe('venues utils', () => {
  it('returns the display title', () => {
    expect(venueTitle(sample)).toBe(String(sample.name));
  });

  it('handles missing items', () => {
    expect(venueTitle(null)).toBe('');
    expect(venueValue(null, 'name')).toBe('');
  });
});
