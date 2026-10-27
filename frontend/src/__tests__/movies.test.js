import { describe, it, expect } from 'vitest';
import { movieTitle, movieValue } from '../utils/movies';

const sample = {"id":"movies-1","title":"Monsoon Express","language":"Hindi","genre":"Action","durationMins":142,"certificate":"U","price":199,"createdAt":"2026-10-01T10:00:00.000Z"};

describe('movies utils', () => {
  it('returns the display title', () => {
    expect(movieTitle(sample)).toBe(String(sample.title));
  });

  it('handles missing items', () => {
    expect(movieTitle(null)).toBe('');
    expect(movieValue(null, 'title')).toBe('');
  });
});
