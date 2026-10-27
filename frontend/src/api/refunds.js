import { api, toQuery } from './client';

const BASE = '/api/refunds';

export const listRefunds = (params = {}) => api(BASE + toQuery(params));
export const getRefund = id => api(BASE + '/' + id);
export const createRefund = data => api(BASE, { method: 'POST', body: data });
export const updateRefund = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteRefund = id => api(BASE + '/' + id, { method: 'DELETE' });
