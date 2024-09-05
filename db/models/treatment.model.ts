import { Model, InferAttributes, InferCreationAttributes, DataTypes, CreationOptional, ForeignKey } from 'sequelize';
import sequelize from '../config/sequelize';
import Doctor from './doctor.model';
import Patient from './patient.model';
import Procedure from './procedure.model';

class Treatment extends Model<InferAttributes<Treatment>, InferCreationAttributes<Treatment>> {
  declare id: number;
  declare procedureId: ForeignKey<Procedure['id']>;
  declare doctorId: ForeignKey<Doctor['id']>;
  declare patientId: ForeignKey<Patient['id']>;
  declare date: string;
  declare totalShots: string;
  declare totalEnergy: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Treatment.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    totalShots: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalEnergy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'treatments',
    sequelize
  }
);

Treatment.belongsTo(
  Procedure,
  {
    foreignKey: 'procedureId',
    as: 'procedure'
  }
);

Treatment.belongsTo(
  Doctor,
  {
    foreignKey: 'doctorId',
    as: 'doctor'
  }
);

Treatment.belongsTo(
  Patient,
  {
    foreignKey: 'patientId',
    as: 'patient'
  }
);

export default Treatment;
