import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { AdminModule } from './admin/admin.module';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DbModule, AdminModule, DoctorsModule, PatientsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
