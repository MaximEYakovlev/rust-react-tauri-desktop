import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';

@Module({
  imports: [SequelizeModule.forFeature([Admin])],
  controllers: [],
  providers: [],
  exports: [SequelizeModule],
})
export class AdminModule {}
