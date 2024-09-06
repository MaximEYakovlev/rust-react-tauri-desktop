import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'postgres_db',
  'postgres_user',
  'postgres_password',
  {
    dialect: 'postgres',
    host: 'localhost', // or the Docker container name
    port: 5432,
    logging: true,
  },
);

export default sequelize;
