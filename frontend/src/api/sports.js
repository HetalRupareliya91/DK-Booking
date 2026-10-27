import { api, toQuery } from './client';

const BASE = '/api/sports';

export const listSports = (params = {}) => api(BASE + toQuery(params));
export const getSport = id => api(BASE + '/' + id);
export const createSport = data => api(BASE, { method: 'POST', body: data });
export const updateSport = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteSport = id => api(BASE + '/' + id, { method: 'DELETE' });
