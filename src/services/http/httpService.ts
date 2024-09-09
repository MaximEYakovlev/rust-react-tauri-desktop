import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { setupRequestInterceptor, setupResponseInterceptor } from './interceptors';
import { CustomError } from './errors/customErrors';
import { API_URL } from '../config'; // Assuming you have a config file with API_URL
    
export class HttpService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string = API_URL) {
    this.axiosInstance = axios.create({ baseURL });
    
    // Attach interceptors
    setupRequestInterceptor(this.axiosInstance);
    setupResponseInterceptor(this.axiosInstance);
  }

  // GET request
  public async get<T>(url: string, config?: AxiosRequestConfig, signal?: AbortSignal): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(url, { ...config, signal });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // POST request
  public async post<T>(url: string, data: any, config?: AxiosRequestConfig, signal?: AbortSignal): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(url, data, { ...config, signal });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // PUT request
  public async put<T>(url: string, data: any, config?: AxiosRequestConfig, signal?: AbortSignal): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.put(url, data, { ...config, signal });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // DELETE request
  public async delete<T>(url: string, config?: AxiosRequestConfig, signal?: AbortSignal): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.delete(url, { ...config, signal });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Method to handle errors
  private handleError(error: any): Error {
    if (axios.isCancel(error)) {
      return new CustomError('RequestCancelled', 'The request was canceled');
    } else if (error.response) {
      return new CustomError('APIError', error.response.data.message || 'An error occurred');
    } else {
      return new CustomError('NetworkError', 'Network error occurred');
    }
  }
}
