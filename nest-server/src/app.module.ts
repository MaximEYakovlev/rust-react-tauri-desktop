import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { AdminModule } from './admin/admin.module';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [DbModule, AdminModule, DoctorsModule, PatientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
