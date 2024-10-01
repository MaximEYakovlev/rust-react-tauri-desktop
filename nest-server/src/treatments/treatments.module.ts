import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Treatment } from './models/treatment.model';

@Module({
  imports: [SequelizeModule.forFeature([Treatment])],
  controllers: [],
  providers: [],
  exports: [SequelizeModule],
})
export class TreatmentsModule {}
