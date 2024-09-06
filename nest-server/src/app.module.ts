import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { Doctor } from './models/doctor.model';
import { Patient } from './models/patient.model';
import { DoctorPatient } from './models/doctor-patient.model';
import { SkinType } from './models/skin-type.model';
import { Procedure } from './models/procedure.model';
import { Treatment } from './models/treatment.model';
import { Device } from './models/device.model';
import { System } from './models/system.model';
import { Sensor } from './models/sensor.model';
import { SensorData } from './models/sensor-data.model';
import { ExecutionUnit } from './models/execution-unit.model';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost', // or the container's network name if using Docker
      port: 5432,
      username: 'postgres_user',
      password: 'postgres_password',
      database: 'postgres_db',
      models: [
        Admin,
        Doctor,
        Patient,
        DoctorPatient,
        SkinType,
        Procedure,
        Treatment,
        Device,
        System,
        Sensor,
        SensorData,
        ExecutionUnit,
      ],
      autoLoadModels: true, // Automatically sync models with the database
      synchronize: true,
      logging: true,  // Enable logging
    }),
    SequelizeModule.forFeature([
      Admin,
      Doctor,
      Patient,
      DoctorPatient,
      SkinType,
      Procedure,
      Treatment,
      Device,
      System,
      Sensor,
      SensorData,
      ExecutionUnit,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
