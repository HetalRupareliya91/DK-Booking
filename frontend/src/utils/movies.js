import { formatINR, formatDate, show } from './format';

const MONEY = ['price'];
const DATES = [];

export const movieTitle = item => (item ? show(item.title) : '');

export const movieValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const movieSummary = item =>
  ['language', 'genre', 'durationMins', 'certificate', 'price'].map(k => movieValue(item, k)).filter(v => v && v !== '-').join(' • ');
