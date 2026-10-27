import { describe, it, expect } from 'vitest';
import { bannerTitle, bannerValue } from '../utils/banners';

const sample = {"id":"banners-1","title":"The Last Ticket Banner","placement":"Home hero","active":true,"createdAt":"2026-10-01T10:00:00.000Z"};

describe('banners utils', () => {
  it('returns the display title', () => {
    expect(bannerTitle(sample)).toBe(String(sample.title));
  });

  it('handles missing items', () => {
    expect(bannerTitle(null)).toBe('');
    expect(bannerValue(null, 'title')).toBe('');
  });
});
