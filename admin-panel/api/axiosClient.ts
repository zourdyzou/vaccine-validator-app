import axios from 'axios';
import queryString from 'query-string';

const baseUrl = 'https://vaccine-validator-demo.herokuapp.com/api/';
const getToken = () => localStorage.getItem('token');

const axiosClient = axios.create({
  baseURL: baseUrl,
  paramsSerializer: (params) => queryString.stringify({ params }),
});

axiosClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
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
      alert('Error! there is something wrong with the network...');
    }
    throw err;
  }
);

export default axiosClient;
