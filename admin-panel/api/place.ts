import axiosClient from './axiosClient';

const placeEndpoint = 'place';

export const placeApi = {
  getAll: () => axiosClient.get(placeEndpoint),
  getOne: (id: string) => axiosClient.get(`${placeEndpoint}/${id}`),
};
