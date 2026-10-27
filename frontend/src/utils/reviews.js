import { formatINR, formatDate, show } from './format';

const MONEY = [];
const DATES = [];

export const reviewTitle = item => (item ? show(item.author) : '');

export const reviewValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const reviewSummary = item =>
  ['target', 'stars', 'comment'].map(k => reviewValue(item, k)).filter(v => v && v !== '-').join(' • ');
