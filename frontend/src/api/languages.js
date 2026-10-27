import { api, toQuery } from './client';

const BASE = '/api/languages';

export const listLanguages = (params = {}) => api(BASE + toQuery(params));
export const getLanguage = id => api(BASE + '/' + id);
export const createLanguage = data => api(BASE, { method: 'POST', body: data });
export const updateLanguage = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteLanguage = id => api(BASE + '/' + id, { method: 'DELETE' });
