import { api, toQuery } from './client';

const BASE = '/api/coupons';

export const listCoupons = (params = {}) => api(BASE + toQuery(params));
export const getCoupon = id => api(BASE + '/' + id);
export const createCoupon = data => api(BASE, { method: 'POST', body: data });
export const updateCoupon = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteCoupon = id => api(BASE + '/' + id, { method: 'DELETE' });
