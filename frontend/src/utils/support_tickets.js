import { formatINR, formatDate, show } from './format';

const MONEY = [];
const DATES = [];

export const supportTicketTitle = item => (item ? show(item.subject) : '');

export const supportTicketValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const supportTicketSummary = item =>
  ['customer', 'priority', 'status'].map(k => supportTicketValue(item, k)).filter(v => v && v !== '-').join(' • ');
