import { api, toQuery } from './client';

const BASE = '/api/events';

export const listEvents = (params = {}) => api(BASE + toQuery(params));
export const getEvent = id => api(BASE + '/' + id);
export const createEvent = data => api(BASE, { method: 'POST', body: data });
export const updateEvent = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteEvent = id => api(BASE + '/' + id, { method: 'DELETE' });
