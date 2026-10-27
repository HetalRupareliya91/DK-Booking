import { api, toQuery } from './client';

const BASE = '/api/banners';

export const listBanners = (params = {}) => api(BASE + toQuery(params));
export const getBanner = id => api(BASE + '/' + id);
export const createBanner = data => api(BASE, { method: 'POST', body: data });
export const updateBanner = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteBanner = id => api(BASE + '/' + id, { method: 'DELETE' });
