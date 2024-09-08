import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Patient } from './models/patient.model';
import { SkinType } from './models/skin-type.model';
import { DoctorPatient } from 'src/doctors/models/doctor-patient.model';

@Module({
  imports: [SequelizeModule.forFeature([Patient, SkinType, DoctorPatient])],
  controllers: [],
  providers: [],
  exports: [SequelizeModule],
})
export class PatientsModule {}
