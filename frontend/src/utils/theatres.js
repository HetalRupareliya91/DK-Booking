import { formatINR, formatDate, show } from './format';

const MONEY = [];
const DATES = [];

export const theatreTitle = item => (item ? show(item.name) : '');

export const theatreValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const theatreSummary = item =>
  ['city', 'address', 'screens'].map(k => theatreValue(item, k)).filter(v => v && v !== '-').join(' • ');
