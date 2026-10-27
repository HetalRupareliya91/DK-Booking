import { describe, it, expect } from 'vitest';
import { agentTitle, agentValue } from '../utils/agents';

const sample = {"id":"agents-1","name":"Aarav Shah","email":"aarav@example.com","agency":"Surat Tickets","commissionPct":10,"active":true,"createdAt":"2026-10-01T10:00:00.000Z"};

describe('agents utils', () => {
  it('returns the display title', () => {
    expect(agentTitle(sample)).toBe(String(sample.name));
  });

  it('handles missing items', () => {
    expect(agentTitle(null)).toBe('');
    expect(agentValue(null, 'name')).toBe('');
  });
});
