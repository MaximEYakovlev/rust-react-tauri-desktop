import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private readonly adminModel: typeof Admin) {}

  async findOne(username: string): Promise<Admin> {
    return this.adminModel.findOne({
      where: {
        username,
      },
    });
  }
}
