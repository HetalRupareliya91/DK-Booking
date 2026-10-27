import { api, toQuery } from './client';

const BASE = '/api/genres';

export const listGenres = (params = {}) => api(BASE + toQuery(params));
export const getGenre = id => api(BASE + '/' + id);
export const createGenre = data => api(BASE, { method: 'POST', body: data });
export const updateGenre = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteGenre = id => api(BASE + '/' + id, { method: 'DELETE' });
