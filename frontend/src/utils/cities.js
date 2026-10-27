import { formatINR, formatDate, show } from './format';

const MONEY = [];
const DATES = [];

export const cityTitle = item => (item ? show(item.name) : '');

export const cityValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const citySummary = item =>
  ['state', 'active'].map(k => cityValue(item, k)).filter(v => v && v !== '-').join(' • ');
