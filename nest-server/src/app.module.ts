import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 3306,
      username: 'postgres_user',
      password: 'postgres_password',
      database: 'postgres_db',
      models: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
