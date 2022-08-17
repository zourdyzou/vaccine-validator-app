import axiosClient from './axiosClient';

const userEndpoint = 'user';

interface UserApiParams {
  phoneNumber: string | number;
  fullName: string | number;
  idNumber: string | number;
  address: string;
}

export const userApi = {
  getAll: () => axiosClient.get(userEndpoint),
  create: (params: UserApiParams) => axiosClient.post(userEndpoint, params),
  getOne: (id: string) => axiosClient.get(`${userEndpoint}/${id}`),
  update: (id: string, params: UserApiParams) =>
    axiosClient.put(`${userEndpoint}/${id}`, params),
  vaccinated: (params: {
    userId: string;
    vaccineId: string;
    vaccineLotId: string;
  }) => axiosClient.post(`${userEndpoint}/vaccinated`, params),
};
