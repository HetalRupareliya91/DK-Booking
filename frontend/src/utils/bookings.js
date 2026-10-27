import { formatINR, formatDate, show } from './format';

const MONEY = ['amount'];
const DATES = [];

export const bookingTitle = item => (item ? show(item.reference) : '');

export const bookingValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const bookingSummary = item =>
  ['customer', 'show', 'tickets', 'amount', 'status'].map(k => bookingValue(item, k)).filter(v => v && v !== '-').join(' • ');
