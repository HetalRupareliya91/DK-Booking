import { formatINR, formatDate, show } from './format';

const MONEY = [];
const DATES = [];

export const genreTitle = item => (item ? show(item.name) : '');

export const genreValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const genreSummary = item =>
  ['description'].map(k => genreValue(item, k)).filter(v => v && v !== '-').join(' • ');
