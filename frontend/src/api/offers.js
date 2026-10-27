import { api, toQuery } from './client';

const BASE = '/api/offers';

export const listOffers = (params = {}) => api(BASE + toQuery(params));
export const getOffer = id => api(BASE + '/' + id);
export const createOffer = data => api(BASE, { method: 'POST', body: data });
export const updateOffer = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteOffer = id => api(BASE + '/' + id, { method: 'DELETE' });
