export const formatINR = n => '₹' + Number(n || 0).toLocaleString('en-IN');

export const formatDate = d => {
  const date = new Date(d);
  return isNaN(date) ? String(d || '') : date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
};

export const show = v => (v === true ? 'Yes' : v === false ? 'No' : v === undefined || v === null ? '-' : String(v));
