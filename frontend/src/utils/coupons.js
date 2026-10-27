import { formatINR, formatDate, show } from './format';

const MONEY = ['maxDiscount'];
const DATES = [];

export const couponTitle = item => (item ? show(item.code) : '');

export const couponValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const couponSummary = item =>
  ['discountPct', 'maxDiscount', 'active'].map(k => couponValue(item, k)).filter(v => v && v !== '-').join(' • ');
