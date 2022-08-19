import axios from 'axios';
import queryString from 'query-string';

export const IS_SERVER = typeof window === 'undefined';

const baseUrl = 'https://vaccine-validator-demo.herokuapp.com/api/';
export const getToken = () => !IS_SERVER && localStorage.getItem('token');

const axiosClient = axios.create({
  baseURL: baseUrl,
  paramsSerializer: (params) => queryString.stringify({ params }),
});

axiosClient.interceptors.request.use(async (config) => {
  const defaultHeaders = axios.defaults.headers.common;

  return {
    ...config,
    headers: {
      'Content-Type': 'application/json',
      ...defaultHeaders,
    },
  };
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    if (!err.response) {
      console.error('Error! there is something wrong with the network...');
    }
    throw err;
  }
);

export default axiosClient;
