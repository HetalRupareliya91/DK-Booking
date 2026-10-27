import { formatINR, formatDate, show } from './format';

const MONEY = ['price'];
const DATES = [];

export const seatTitle = item => (item ? show(item.row) : '');

export const seatValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const seatSummary = item =>
  ['number', 'category', 'price', 'status'].map(k => seatValue(item, k)).filter(v => v && v !== '-').join(' • ');
