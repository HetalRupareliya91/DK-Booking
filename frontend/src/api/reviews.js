import { api, toQuery } from './client';

const BASE = '/api/reviews';

export const listReviews = (params = {}) => api(BASE + toQuery(params));
export const getReview = id => api(BASE + '/' + id);
export const createReview = data => api(BASE, { method: 'POST', body: data });
export const updateReview = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteReview = id => api(BASE + '/' + id, { method: 'DELETE' });
