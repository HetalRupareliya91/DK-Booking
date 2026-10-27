import { formatINR, formatDate, show } from './format';

const MONEY = ['price'];
const DATES = ['date'];

export const playTitle = item => (item ? show(item.title) : '');

export const playValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const playSummary = item =>
  ['language', 'venue', 'date', 'price'].map(k => playValue(item, k)).filter(v => v && v !== '-').join(' • ');
