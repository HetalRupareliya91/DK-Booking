import { formatINR, formatDate, show } from './format';

const MONEY = [];
const DATES = [];

export const venueTitle = item => (item ? show(item.name) : '');

export const venueValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const venueSummary = item =>
  ['city', 'type', 'capacity'].map(k => venueValue(item, k)).filter(v => v && v !== '-').join(' • ');
