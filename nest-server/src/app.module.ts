import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { AdminModule } from './admin/admin.module';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';
import { AuthModule } from './auth/auth.module';
import { ProceduresController } from './procedures/procedures.controller';
import { ProceduresService } from './procedures/procedures.service';
import { ProceduresModule } from './procedures/procedures.module';
import { TreatmentsController } from './treatments/treatments.controller';
import { TreatmentsService } from './treatments/treatments.service';
import { TreatmentsModule } from './treatments/treatments.module';

@Module({
  imports: [
    DbModule,
    AdminModule,
    DoctorsModule,
    PatientsModule,
    AuthModule,
    ProceduresModule,
    TreatmentsModule,
  ],
  controllers: [ProceduresController, TreatmentsController],
  providers: [ProceduresService, TreatmentsService],
})
export class AppModule {}
