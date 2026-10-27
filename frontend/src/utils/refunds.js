import { formatINR, formatDate, show } from './format';

const MONEY = ['amount'];
const DATES = [];

export const refundTitle = item => (item ? show(item.reference) : '');

export const refundValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const refundSummary = item =>
  ['booking', 'amount', 'reason', 'status'].map(k => refundValue(item, k)).filter(v => v && v !== '-').join(' • ');
