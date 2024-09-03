import { Model, InferAttributes, InferCreationAttributes, DataTypes, CreationOptional, ForeignKey } from 'sequelize';
import sequelize from '../config/sequelize';
import Device from './device.model';

class System extends Model<InferAttributes<System>, InferCreationAttributes<System>> {
  declare id: number;
  declare deviceId: ForeignKey<Device['id']>;
  declare name: string;
  declare description: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

System.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    description: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'systems',
    sequelize
  }
);

System.belongsTo(
  Device,
  {
    foreignKey: 'deviceId',
    as: 'device'
  }
);

export default System;


