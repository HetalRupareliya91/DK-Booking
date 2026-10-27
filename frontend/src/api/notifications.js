import { api, toQuery } from './client';

const BASE = '/api/notifications';

export const listNotifications = (params = {}) => api(BASE + toQuery(params));
export const getNotification = id => api(BASE + '/' + id);
export const createNotification = data => api(BASE, { method: 'POST', body: data });
export const updateNotification = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteNotification = id => api(BASE + '/' + id, { method: 'DELETE' });
