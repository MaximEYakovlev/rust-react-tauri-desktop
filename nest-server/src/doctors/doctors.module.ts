import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { Doctor } from './models/doctor.model';
import { DoctorPatient } from './models/doctor-patient.model';

@Module({
  imports: [SequelizeModule.forFeature([Doctor, DoctorPatient])],
  controllers: [DoctorsController],
  providers: [DoctorsService],
  exports: [SequelizeModule, DoctorsService],
})
export class DoctorsModule {}
