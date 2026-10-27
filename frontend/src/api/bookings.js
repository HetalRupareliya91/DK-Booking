import { api, toQuery } from './client';

const BASE = '/api/bookings';

export const listBookings = (params = {}) => api(BASE + toQuery(params));
export const getBooking = id => api(BASE + '/' + id);
export const createBooking = data => api(BASE, { method: 'POST', body: data });
export const updateBooking = (id, data) => api(BASE + '/' + id, { method: 'PUT', body: data });
export const deleteBooking = id => api(BASE + '/' + id, { method: 'DELETE' });
