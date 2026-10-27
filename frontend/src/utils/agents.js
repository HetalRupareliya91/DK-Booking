import { formatINR, formatDate, show } from './format';

const MONEY = [];
const DATES = [];

export const agentTitle = item => (item ? show(item.name) : '');

export const agentValue = (item, key) => {
  if (!item) return '';
  if (MONEY.includes(key)) return formatINR(item[key]);
  if (DATES.includes(key)) return formatDate(item[key]);
  return show(item[key]);
};

export const agentSummary = item =>
  ['email', 'agency', 'commissionPct', 'active'].map(k => agentValue(item, k)).filter(v => v && v !== '-').join(' • ');
