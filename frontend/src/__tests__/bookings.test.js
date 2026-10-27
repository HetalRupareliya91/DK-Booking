import { describe, it, expect } from 'vitest';
import { bookingTitle, bookingValue } from '../utils/bookings';

const sample = {"id":"bookings-1","reference":"DKBO-1001","customer":"Aarav Shah","show":"Monsoon Express 7PM","tickets":120,"amount":199,"status":"confirmed","createdAt":"2026-10-01T10:00:00.000Z"};

describe('bookings utils', () => {
  it('returns the display title', () => {
    expect(bookingTitle(sample)).toBe(String(sample.reference));
  });

  it('handles missing items', () => {
    expect(bookingTitle(null)).toBe('');
    expect(bookingValue(null, 'reference')).toBe('');
  });
});
