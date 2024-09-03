import { Model, InferAttributes, InferCreationAttributes, DataTypes, CreationOptional } from 'sequelize';
import sequelize from '../config/sequelize';
import System from './system.model';

class Device extends Model<InferAttributes<Device>, InferCreationAttributes<Device>> {
  declare id: number;
  declare name: string;
  declare model: string;
  declare serial_number: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare systems?: System[];
}

Device.init(
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
    model: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    serial_number: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'devices',
    sequelize
  }
);

Device.hasMany(
  System,
  {
    sourceKey: 'id',
    foreignKey: 'deviceId',
    as: 'systems'
  }
);

export default Device;

