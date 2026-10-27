import { api, toQuery } from './client';

const BASE = '/api/agents';

export const listAgents = (params = {}) => api(BASE + toQuery(params));
export const getAgent = id => api(BASE + '/' + id);
export const createAgent = data => api(BASE, { method: 'POST', body: data });
export const updateAgent = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteAgent = id => api(BASE + '/' + id, { method: 'DELETE' });
