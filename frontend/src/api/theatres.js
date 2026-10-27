import { api, toQuery } from './client';

const BASE = '/api/theatres';

export const listTheatres = (params = {}) => api(BASE + toQuery(params));
export const getTheatre = id => api(BASE + '/' + id);
export const createTheatre = data => api(BASE, { method: 'POST', body: data });
export const updateTheatre = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteTheatre = id => api(BASE + '/' + id, { method: 'DELETE' });
