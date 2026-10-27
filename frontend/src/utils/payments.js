import { formatINR, formatDate, show } from './format';

const MONEY = ['amount'];
const DATES = [];

export const paymentTitle = item => (item ? show(item.reference) : '');

export const paymentValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const paymentSummary = item =>
  ['booking', 'method', 'amount', 'status'].map(k => paymentValue(item, k)).filter(v => v && v !== '-').join(' • ');
