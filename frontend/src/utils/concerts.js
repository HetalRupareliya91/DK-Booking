import { formatINR, formatDate, show } from './format';

const MONEY = ['price'];
const DATES = ['date'];

export const concertTitle = item => (item ? show(item.title) : '');

export const concertValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const concertSummary = item =>
  ['artist', 'city', 'date', 'price'].map(k => concertValue(item, k)).filter(v => v && v !== '-').join(' • ');
