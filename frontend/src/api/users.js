import { api, toQuery } from './client';

const BASE = '/api/users';

export const listUsers = (params = {}) => api(BASE + toQuery(params));
export const getUser = id => api(BASE + '/' + id);
export const createUser = data => api(BASE, { method: 'POST', body: data });
export const updateUser = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteUser = id => api(BASE + '/' + id, { method: 'DELETE' });
