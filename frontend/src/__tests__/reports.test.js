import { describe, it, expect } from 'vitest';
import { reportTitle, reportValue } from '../utils/reports';

const sample = {"id":"reports-1","title":"The Last Ticket Report","period":"Jan 2026","revenue":199000,"tickets":120,"createdAt":"2026-10-01T10:00:00.000Z"};

describe('reports utils', () => {
  it('returns the display title', () => {
    expect(reportTitle(sample)).toBe(String(sample.title));
  });

  it('handles missing items', () => {
    expect(reportTitle(null)).toBe('');
    expect(reportValue(null, 'title')).toBe('');
  });
});
