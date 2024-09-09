import { AxiosInstance } from 'axios';
import { AuthService } from '../auth'; // Assuming AuthService for token retrieval

export const setupRequestInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = AuthService.getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      config.headers['X-TimeZone-Offset'] = new Date().getTimezoneOffset().toString();
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
