import { formatINR, formatDate, show } from './format';

const MONEY = [];
const DATES = [];

export const bannerTitle = item => (item ? show(item.title) : '');

export const bannerValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const bannerSummary = item =>
  ['placement', 'active'].map(k => bannerValue(item, k)).filter(v => v && v !== '-').join(' • ');
