import { api, toQuery } from './client';

const BASE = '/api/screens';

export const listScreens = (params = {}) => api(BASE + toQuery(params));
export const getScreen = id => api(BASE + '/' + id);
export const createScreen = data => api(BASE, { method: 'POST', body: data });
export const updateScreen = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteScreen = id => api(BASE + '/' + id, { method: 'DELETE' });
