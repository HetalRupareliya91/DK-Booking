import { describe, it, expect } from 'vitest';
import { refundTitle, refundValue } from '../utils/refunds';

const sample = {"id":"refunds-1","reference":"DKRE-1001","booking":"DKB-1001","amount":199,"reason":"Show cancelled","status":"confirmed","createdAt":"2026-10-01T10:00:00.000Z"};

describe('refunds utils', () => {
  it('returns the display title', () => {
    expect(refundTitle(sample)).toBe(String(sample.reference));
  });

  it('handles missing items', () => {
    expect(refundTitle(null)).toBe('');
    expect(refundValue(null, 'reference')).toBe('');
  });
});
