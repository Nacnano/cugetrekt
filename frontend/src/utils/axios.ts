import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// NEW VERSION OF AXIOS (1.1.3) BUGGED LOL
interface MyAxiosRequestConfig extends Omit<AxiosRequestConfig, "headers"> {
  headers?: any; // For this version of Axios the types of are "headerRawAxiosRequestHeaders | AxiosHeaders"
  // Let's make it "any" again to make it work again YAY.
}

// const API_URL = process.env.API_URL;
const API_URL = "https://cugetrekt-backend-lgnud3ncza-as.a.run.app";
// const API_URL = "http://localhost:3001";

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

api.interceptors.request.use(
  async (config: MyAxiosRequestConfig) => {
    const token = localStorage.getItem("token");
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
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);
