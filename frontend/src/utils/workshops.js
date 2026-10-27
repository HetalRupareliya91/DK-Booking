import { formatINR, formatDate, show } from './format';

const MONEY = ['price'];
const DATES = ['date'];

export const workshopTitle = item => (item ? show(item.title) : '');

export const workshopValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const workshopSummary = item =>
  ['host', 'mode', 'date', 'price'].map(k => workshopValue(item, k)).filter(v => v && v !== '-').join(' • ');
