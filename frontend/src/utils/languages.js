import { formatINR, formatDate, show } from './format';

const MONEY = [];
const DATES = [];

export const languageTitle = item => (item ? show(item.name) : '');

export const languageValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const languageSummary = item =>
  ['code'].map(k => languageValue(item, k)).filter(v => v && v !== '-').join(' • ');
