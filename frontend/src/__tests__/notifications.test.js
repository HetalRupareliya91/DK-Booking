import { describe, it, expect } from 'vitest';
import { notificationTitle, notificationValue } from '../utils/notifications';

const sample = {"id":"notifications-1","title":"The Last Ticket Notification","channel":"Push","audience":"All users","date":"2026-11-05","createdAt":"2026-10-01T10:00:00.000Z"};

describe('notifications utils', () => {
  it('returns the display title', () => {
    expect(notificationTitle(sample)).toBe(String(sample.title));
  });

  it('handles missing items', () => {
    expect(notificationTitle(null)).toBe('');
    expect(notificationValue(null, 'title')).toBe('');
  });
});
