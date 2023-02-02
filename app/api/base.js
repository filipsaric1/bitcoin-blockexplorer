import config from '../config';
import axios from 'axios';

const requestConfig = {
  baseURL: config.API,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
};

const axiosInstance = axios.create(requestConfig);

axiosInstance.interceptors.response.use(response => response.data);

export default axiosInstance;
