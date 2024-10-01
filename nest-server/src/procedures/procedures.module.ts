import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Procedure } from './models/procedure.model';

@Module({
  imports: [SequelizeModule.forFeature([Procedure])],
  controllers: [],
  providers: [],
  exports: [SequelizeModule],
})
export class ProceduresModule {}
