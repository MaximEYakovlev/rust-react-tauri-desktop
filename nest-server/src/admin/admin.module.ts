import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DoctorsModule } from 'src/doctors/doctors.module';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Admin } from './models/admin.model';

@Module({
  imports: [SequelizeModule.forFeature([Admin]), DoctorsModule],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [SequelizeModule, AdminService],
})
export class AdminModule {}
