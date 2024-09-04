import { Model, InferAttributes, InferCreationAttributes, DataTypes, CreationOptional, ForeignKey } from 'sequelize';
import sequelize from '../config/sequelize';
import System from './system.model';

class Sensor extends Model<InferAttributes<Sensor>, InferCreationAttributes<Sensor>> {
  declare id: number;
  declare systemId: ForeignKey<System['id']>;
  declare name: string;
  declare type: string;
  declare unit: string;
  declare location: string;
  declare description: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Sensor.init(
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
    type: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    unit: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    location: {
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
    tableName: 'sensors',
    sequelize
  }
);

Sensor.belongsTo(
  System,
  {
    foreignKey: 'systemId',
    as: 'system'
  }
);

export default Sensor;


