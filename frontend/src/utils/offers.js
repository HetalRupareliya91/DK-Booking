import { formatINR, formatDate, show } from './format';

const MONEY = [];
const DATES = ['validTill'];

export const offerTitle = item => (item ? show(item.title) : '');

export const offerValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const offerSummary = item =>
  ['bank', 'discountPct', 'validTill'].map(k => offerValue(item, k)).filter(v => v && v !== '-').join(' • ');
