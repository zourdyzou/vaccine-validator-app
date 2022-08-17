import axiosClient from './axiosClient';

const vaccineEndpoint = 'vaccine';

interface VaccineApiParams {
  // phoneNumber: string | number;
  // fullName: string | number;
  // idNumber: string | number;
  // address: string;
  name: string;
}

const vaccineApi = {
  getAllVaccine: () => axiosClient.get(vaccineEndpoint),
  create: (params: VaccineApiParams) =>
    axiosClient.post(vaccineEndpoint, params),
  getSingleVaccine: (id: string) => axiosClient.get(`${vaccineEndpoint}/${id}`),
  update: (id: string, params: Partial<VaccineApiParams>) =>
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
