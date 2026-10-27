import { formatINR, formatDate, show } from './format';

const MONEY = [];
const DATES = [];

export const screenTitle = item => (item ? show(item.name) : '');

export const screenValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const screenSummary = item =>
  ['theatre', 'format', 'capacity'].map(k => screenValue(item, k)).filter(v => v && v !== '-').join(' • ');
