import { formatINR, formatDate, show } from './format';

const MONEY = ['price'];
const DATES = ['date'];

export const sportTitle = item => (item ? show(item.title) : '');

export const sportValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const sportSummary = item =>
  ['sport', 'venue', 'date', 'price'].map(k => sportValue(item, k)).filter(v => v && v !== '-').join(' • ');
