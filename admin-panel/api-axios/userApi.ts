import axiosClient from './axiosClient';
import { IVaccinated, TypedUserParams } from '@/interfaces/data-type';

const userEndpoint = 'user';

export const userApi = {
  getAll: () => axiosClient.get(userEndpoint),
  create: (params: TypedUserParams) => axiosClient.post(userEndpoint, params),
  getOne: (id: string) => axiosClient.get(`${userEndpoint}/${id}`),
  update: (id: string, params: TypedUserParams) =>
    axiosClient.put(`${userEndpoint}/${id}`, params),
  vaccinated: (params: IVaccinated) =>
    axiosClient.post(`${userEndpoint}/vaccinated`, params),
};
