import { Injectable } from '@nestjs/common';
import { Admin } from './models/admin.model';

@Injectable()
export class AdminService {
  private readonly admins: Admin[];

  async findOne(username: string): Promise<Admin | undefined> {
    return this.admins.find((admin) => admin.username === username);
  }
}
