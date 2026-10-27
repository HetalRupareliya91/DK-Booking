import { api, toQuery } from './client';

const BASE = '/api/comedy';

export const listComedyShows = (params = {}) => api(BASE + toQuery(params));
export const getComedyShow = id => api(BASE + '/' + id);
export const createComedyShow = data => api(BASE, { method: 'POST', body: data });
export const updateComedyShow = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteComedyShow = id => api(BASE + '/' + id, { method: 'DELETE' });
