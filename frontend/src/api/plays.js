import { api, toQuery } from './client';

const BASE = '/api/plays';

export const listPlays = (params = {}) => api(BASE + toQuery(params));
export const getPlay = id => api(BASE + '/' + id);
export const createPlay = data => api(BASE, { method: 'POST', body: data });
export const updatePlay = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deletePlay = id => api(BASE + '/' + id, { method: 'DELETE' });
