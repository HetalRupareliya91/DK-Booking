import { formatINR, formatDate, show } from './format';

const MONEY = ['revenue'];
const DATES = [];

export const reportTitle = item => (item ? show(item.title) : '');

export const reportValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const reportSummary = item =>
  ['period', 'revenue', 'tickets'].map(k => reportValue(item, k)).filter(v => v && v !== '-').join(' • ');
