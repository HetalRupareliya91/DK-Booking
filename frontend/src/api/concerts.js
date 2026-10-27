import { api, toQuery } from './client';

const BASE = '/api/concerts';

export const listConcerts = (params = {}) => api(BASE + toQuery(params));
export const getConcert = id => api(BASE + '/' + id);
export const createConcert = data => api(BASE, { method: 'POST', body: data });
export const updateConcert = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteConcert = id => api(BASE + '/' + id, { method: 'DELETE' });
