import { describe, it, expect } from 'vitest';
import { languageTitle, languageValue } from '../utils/languages';

const sample = {"id":"languages-1","name":"Hindi","code":"hi","createdAt":"2026-10-01T10:00:00.000Z"};

describe('languages utils', () => {
  it('returns the display title', () => {
    expect(languageTitle(sample)).toBe(String(sample.name));
  });

  it('handles missing items', () => {
    expect(languageTitle(null)).toBe('');
    expect(languageValue(null, 'name')).toBe('');
  });
});
