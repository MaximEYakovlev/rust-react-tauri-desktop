import { Model, InferAttributes, InferCreationAttributes, DataTypes, CreationOptional, ForeignKey } from 'sequelize';
import sequelize from '../config/sequelize';
import Sensor from './sensor.model';

class SensorData extends Model<InferAttributes<SensorData>, InferCreationAttributes<SensorData>> {
  declare id: number;
  declare sensorId: ForeignKey<Sensor['id']>;
  declare recordedAt: CreationOptional<Date>;
  declare value: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

SensorData.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    recordedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'sensorData',
    sequelize
  }
);

SensorData.belongsTo(
  Sensor,
  {
    foreignKey: 'sensorId',
    as: 'sensor'
  }
);

export default SensorData;
