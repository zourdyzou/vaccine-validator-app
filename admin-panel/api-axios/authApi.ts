import axiosClient from './axiosClient';

export const authApi = {
  login: (params: { username: string; password: string }) =>
    axiosClient.post('admin/login', params),
  checkToken: () => axiosClient.post('admin/check-token'),
};
