import { describe, it, expect } from 'vitest';
import { couponTitle, couponValue } from '../utils/coupons';

const sample = {"id":"coupons-1","code":"DK100","discountPct":10,"maxDiscount":199,"active":true,"createdAt":"2026-10-01T10:00:00.000Z"};

describe('coupons utils', () => {
  it('returns the display title', () => {
    expect(couponTitle(sample)).toBe(String(sample.code));
  });

  it('handles missing items', () => {
    expect(couponTitle(null)).toBe('');
    expect(couponValue(null, 'code')).toBe('');
  });
});
