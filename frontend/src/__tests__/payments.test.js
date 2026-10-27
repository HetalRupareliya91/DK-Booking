import { describe, it, expect } from 'vitest';
import { paymentTitle, paymentValue } from '../utils/payments';

const sample = {"id":"payments-1","reference":"DKPA-1001","booking":"DKB-1001","method":"UPI","amount":199,"status":"confirmed","createdAt":"2026-10-01T10:00:00.000Z"};

describe('payments utils', () => {
  it('returns the display title', () => {
    expect(paymentTitle(sample)).toBe(String(sample.reference));
  });

  it('handles missing items', () => {
    expect(paymentTitle(null)).toBe('');
    expect(paymentValue(null, 'reference')).toBe('');
  });
});
