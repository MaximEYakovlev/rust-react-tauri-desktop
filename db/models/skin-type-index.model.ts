import { Model, InferAttributes, InferCreationAttributes, DataTypes, CreationOptional } from 'sequelize';
import sequelize from '../config/sequelize';
import Patient from './patient.model';

class SkinType extends Model<InferAttributes<SkinType>, InferCreationAttributes<SkinType>> {
  declare id: number;
  declare name: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

SkinType.init(
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
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'skinTypes',
    sequelize
  }
);

SkinType.hasMany(
  Patient,
  {
    sourceKey: 'id',
    foreignKey: 'skinTypeId',
    as: 'patients'
  }
);

export default SkinType;





