import axiosClient from './axiosClient';

export const adminApi = {
  getSummary: () => axiosClient.get('/admin/summary'),
};
