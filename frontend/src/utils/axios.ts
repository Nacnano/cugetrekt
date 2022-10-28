import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// const API_URL = process.env.API_URL;
const API_URL = "https://cugetrekt-backend-lgnud3ncza-as.a.run.app"
// const API_URL = "http://localhost:3001"

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

api.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (!token) return config;
    return {
      ...config,
      headers: { ...config.headers, Authorization: `Bearer ${token}` },
    };
  },
  (err: AxiosError) => Promise.reject(err)
);

api.interceptors.response.use(
  (res: AxiosResponse) => res,
  (err: AxiosError) => {
    const status = err.response?.status;
    if (status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);
