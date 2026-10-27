import { api, toQuery } from './client';

const BASE = '/api/workshops';

export const listWorkshops = (params = {}) => api(BASE + toQuery(params));
export const getWorkshop = id => api(BASE + '/' + id);
export const createWorkshop = data => api(BASE, { method: 'POST', body: data });
export const updateWorkshop = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteWorkshop = id => api(BASE + '/' + id, { method: 'DELETE' });
