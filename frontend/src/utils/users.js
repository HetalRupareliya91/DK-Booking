import { formatINR, formatDate, show } from './format';

const MONEY = [];
const DATES = [];

export const userTitle = item => (item ? show(item.name) : '');

export const userValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const userSummary = item =>
  ['email', 'phone', 'city', 'role'].map(k => userValue(item, k)).filter(v => v && v !== '-').join(' • ');
