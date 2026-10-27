import { formatINR, formatDate, show } from './format';

const MONEY = [];
const DATES = ['date'];

export const notificationTitle = item => (item ? show(item.title) : '');

export const notificationValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const notificationSummary = item =>
  ['channel', 'audience', 'date'].map(k => notificationValue(item, k)).filter(v => v && v !== '-').join(' • ');
