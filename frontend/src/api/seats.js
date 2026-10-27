import { api, toQuery } from './client';

const BASE = '/api/seats';

export const listSeats = (params = {}) => api(BASE + toQuery(params));
export const getSeat = id => api(BASE + '/' + id);
export const createSeat = data => api(BASE, { method: 'POST', body: data });
export const updateSeat = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteSeat = id => api(BASE + '/' + id, { method: 'DELETE' });
