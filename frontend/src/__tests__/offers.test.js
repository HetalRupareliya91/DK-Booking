import { describe, it, expect } from 'vitest';
import { offerTitle, offerValue } from '../utils/offers';

const sample = {"id":"offers-1","title":"Monsoon Express Offer","bank":"HDFC","discountPct":10,"validTill":"2026-11-05","createdAt":"2026-10-01T10:00:00.000Z"};

describe('offers utils', () => {
  it('returns the display title', () => {
    expect(offerTitle(sample)).toBe(String(sample.title));
  });

  it('handles missing items', () => {
    expect(offerTitle(null)).toBe('');
    expect(offerValue(null, 'title')).toBe('');
  });
});
