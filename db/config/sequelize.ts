import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'postgres_db',
  username: 'ostgres_user',
  password: 'postgres_password',
  host: '127.0.0.1',
  dialect: 'postgres',
  models: [__dirname + '/../models'],
});

export default sequelize;