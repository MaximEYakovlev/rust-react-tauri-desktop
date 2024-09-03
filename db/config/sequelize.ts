import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'postgres_db',
  'postgres_user',
  'postgres_password',
  {
    host: '127.0.0.1',
    dialect: 'postgres',
  });

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;