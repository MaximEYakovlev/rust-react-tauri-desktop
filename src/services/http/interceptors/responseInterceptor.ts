import { AxiosInstance } from 'axios';
import { CustomError } from '../errors/customErrors';

export const setupResponseInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // Handle unauthorized
        return Promise.reject(new CustomError('UnauthorizedError', 'Unauthorized request'));
      }
      return Promise.reject(error);
    }
  );
};
