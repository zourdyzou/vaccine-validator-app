import axiosClient from './axiosClient';

const vaccineEndpoint = 'vaccine';

const vaccineApi = {
  getAllVaccine: () => axiosClient.get(vaccineEndpoint),
  create: (params: any) => axiosClient.post(vaccineEndpoint, params),
  getSingleVaccine: (id: string) => axiosClient.get(`${vaccineEndpoint}/${id}`),
  update: (id: string, params: any) =>
    axiosClient.put(`${vaccineEndpoint}/${id}`, params),
  delete: (id: string) => axiosClient.delete(`${vaccineEndpoint}/${id}`),
};

const vaccineLotEndpoint = 'vaccine/lots';

const vaccineLotApi = {
  create: (params: any) => axiosClient.post(vaccineLotEndpoint, params),
  getSingleVaccineLot: (id: string) =>
    axiosClient.get(`${vaccineLotEndpoint}/${id}`),
  update: (id: string, params: any) =>
    axiosClient.put(`${vaccineLotEndpoint}/${id}`, params),
  delete: (id: string) => axiosClient.delete(`${vaccineLotEndpoint}/${id}`),
};

export { vaccineApi, vaccineLotEndpoint };
