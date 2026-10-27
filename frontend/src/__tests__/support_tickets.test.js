import { describe, it, expect } from 'vitest';
import { supportTicketTitle, supportTicketValue } from '../utils/support_tickets';

const sample = {"id":"support-tickets-1","subject":"Payment failed","customer":"Aarav Shah","priority":"high","status":"confirmed","createdAt":"2026-10-01T10:00:00.000Z"};

describe('support_tickets utils', () => {
  it('returns the display title', () => {
    expect(supportTicketTitle(sample)).toBe(String(sample.subject));
  });

  it('handles missing items', () => {
    expect(supportTicketTitle(null)).toBe('');
    expect(supportTicketValue(null, 'subject')).toBe('');
  });
});
