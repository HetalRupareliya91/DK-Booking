import { describe, it, expect } from 'vitest';
import { walletTitle, walletValue } from '../utils/wallets';

const sample = {"id":"wallets-1","owner":"Aarav Shah","balance":199,"currency":"INR","createdAt":"2026-10-01T10:00:00.000Z"};

describe('wallets utils', () => {
  it('returns the display title', () => {
    expect(walletTitle(sample)).toBe(String(sample.owner));
  });

  it('handles missing items', () => {
    expect(walletTitle(null)).toBe('');
    expect(walletValue(null, 'owner')).toBe('');
  });
});
