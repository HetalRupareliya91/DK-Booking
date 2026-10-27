import { api, toQuery } from './client';

const BASE = '/api/reports';

export const listReports = (params = {}) => api(BASE + toQuery(params));
export const getReport = id => api(BASE + '/' + id);
export const createReport = data => api(BASE, { method: 'POST', body: data });
export const updateReport = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteReport = id => api(BASE + '/' + id, { method: 'DELETE' });
