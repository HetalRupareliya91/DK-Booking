import { api, toQuery } from './client';

const BASE = '/api/wallets';

export const listWallets = (params = {}) => api(BASE + toQuery(params));
export const getWallet = id => api(BASE + '/' + id);
export const createWallet = data => api(BASE, { method: 'POST', body: data });
export const updateWallet = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteWallet = id => api(BASE + '/' + id, { method: 'DELETE' });
