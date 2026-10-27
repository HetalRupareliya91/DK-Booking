import { formatINR, formatDate, show } from './format';

const MONEY = ['price'];
const DATES = ['date'];

export const comedyShowTitle = item => (item ? show(item.title) : '');

export const comedyShowValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const comedyShowSummary = item =>
  ['comedian', 'venue', 'date', 'price'].map(k => comedyShowValue(item, k)).filter(v => v && v !== '-').join(' • ');
