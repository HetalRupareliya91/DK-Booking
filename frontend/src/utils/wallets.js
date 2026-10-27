import { formatINR, formatDate, show } from './format';

const MONEY = ['balance'];
const DATES = [];

export const walletTitle = item => (item ? show(item.owner) : '');

export const walletValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const walletSummary = item =>
  ['balance', 'currency'].map(k => walletValue(item, k)).filter(v => v && v !== '-').join(' • ');
