import { api, toQuery } from './client';

const BASE = '/api/showtimes';

export const listShowtimes = (params = {}) => api(BASE + toQuery(params));
export const getShowtime = id => api(BASE + '/' + id);
export const createShowtime = data => api(BASE, { method: 'POST', body: data });
export const updateShowtime = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteShowtime = id => api(BASE + '/' + id, { method: 'DELETE' });
