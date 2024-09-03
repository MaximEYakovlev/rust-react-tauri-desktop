import { Model, InferAttributes, InferCreationAttributes, DataTypes, CreationOptional } from 'sequelize';
import sequelize from '../config/sequelize';

class ExecutionUnit extends Model<InferAttributes<ExecutionUnit>, InferCreationAttributes<ExecutionUnit>> {
  declare id: number;
  declare volume: number;
  declare adjustment_coefficients: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

ExecutionUnit.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    volume: {
      type: new DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    adjustment_coefficients: {
      type: new DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'executionUnit',
    sequelize
  }
);

export default ExecutionUnit;

