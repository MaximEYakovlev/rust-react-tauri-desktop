import { Model, InferAttributes, InferCreationAttributes, DataTypes, CreationOptional } from 'sequelize';
import sequelize from '../config/sequelize';
import Treatment from './treatment.model';

class Procedure extends Model<InferAttributes<Procedure>, InferCreationAttributes<Procedure>> {
  declare id: number;
  declare name: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Procedure.init(
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
    tableName: 'procedures',
    sequelize
  }
);

Procedure.hasMany(
  Treatment,
  {
    sourceKey: 'id',
    foreignKey: 'procedureId',
    as: 'treatments'
  }
);

export default Procedure;
