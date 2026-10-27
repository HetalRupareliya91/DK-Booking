import { formatINR, formatDate, show } from './format';

const MONEY = ['price'];
const DATES = ['date'];

export const showtimeTitle = item => (item ? show(item.movie) : '');

export const showtimeValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const showtimeSummary = item =>
  ['theatre', 'screen', 'date', 'price'].map(k => showtimeValue(item, k)).filter(v => v && v !== '-').join(' • ');
