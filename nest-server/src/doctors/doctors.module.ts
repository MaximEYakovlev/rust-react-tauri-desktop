import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Doctor } from './models/doctor.model';
import { DoctorPatient } from './models/doctor-patient.model';

@Module({
  imports: [SequelizeModule.forFeature([Doctor, DoctorPatient])],
  controllers: [],
  providers: [],
  exports: [SequelizeModule],
})
export class DoctorsModule {}
