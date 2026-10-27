import { api, toQuery } from './client';

const BASE = '/api/payments';

export const listPayments = (params = {}) => api(BASE + toQuery(params));
export const getPayment = id => api(BASE + '/' + id);
export const createPayment = data => api(BASE, { method: 'POST', body: data });
export const updatePayment = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deletePayment = id => api(BASE + '/' + id, { method: 'DELETE' });
