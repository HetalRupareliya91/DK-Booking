import { api, toQuery } from './client';

const BASE = '/api/movies';

export const listMovies = (params = {}) => api(BASE + toQuery(params));
export const getMovie = id => api(BASE + '/' + id);
export const createMovie = data => api(BASE, { method: 'POST', body: data });
export const updateMovie = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteMovie = id => api(BASE + '/' + id, { method: 'DELETE' });
