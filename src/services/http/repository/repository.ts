import { HttpService } from '../httpService';

export class Repository<T> {
  private httpService: HttpService;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  public async getAll(endpoint: string): Promise<T[]> {
    return await this.httpService.get<T[]>(endpoint);
  }

  public async getById(endpoint: string, id: string): Promise<T> {
    return await this.httpService.get<T>(`${endpoint}/${id}`);
  }

  public async create(endpoint: string, data: T): Promise<T> {
    return await this.httpService.post<T>(endpoint, data);
  }

  public async update(endpoint: string, id: string, data: T): Promise<T> {
    return await this.httpService.put<T>(`${endpoint}/${id}`, data);
  }

  public async delete(endpoint: string, id: string): Promise<void> {
    await this.httpService.delete(`${endpoint}/${id}`);
  }
}
