import { api, toQuery } from './client';

const BASE = '/api/support-tickets';

export const listSupportTickets = (params = {}) => api(BASE + toQuery(params));
export const getSupportTicket = id => api(BASE + '/' + id);
export const createSupportTicket = data => api(BASE, { method: 'POST', body: data });
export const updateSupportTicket = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteSupportTicket = id => api(BASE + '/' + id, { method: 'DELETE' });
