import { api, toQuery } from './client';

const BASE = '/api/cities';

export const listCities = (params = {}) => api(BASE + toQuery(params));
export const getCity = id => api(BASE + '/' + id);
export const createCity = data => api(BASE, { method: 'POST', body: data });
export const updateCity = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteCity = id => api(BASE + '/' + id, { method: 'DELETE' });
