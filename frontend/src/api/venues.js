import { api, toQuery } from './client';

const BASE = '/api/venues';

export const listVenues = (params = {}) => api(BASE + toQuery(params));
export const getVenue = id => api(BASE + '/' + id);
export const createVenue = data => api(BASE, { method: 'POST', body: data });
export const updateVenue = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteVenue = id => api(BASE + '/' + id, { method: 'DELETE' });
