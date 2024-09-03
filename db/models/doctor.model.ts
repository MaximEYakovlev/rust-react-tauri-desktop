import { Model, InferAttributes, InferCreationAttributes, DataTypes, CreationOptional } from 'sequelize';
import sequelize from '../config/sequelize';
import { DoctorPatient } from './doctor-patient.model';
import Patient from './patient.model';

class Doctor extends Model<InferAttributes<Doctor>, InferCreationAttributes<Doctor>> {
  declare id: number;
  declare firstName: string;
  declare lastName: string;
  declare birthdate: Date;
  declare password: string;
  declare role: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare patients?: Patient[];
}

Doctor.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    lastName: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    birthdate: {
      type: new DataTypes.DATE,
      allowNull: false
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    role: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'doctors',
    sequelize
  }
);

Doctor.belongsToMany(Patient, {
  through: DoctorPatient,
  foreignKey: 'doctorId',
  otherKey: 'patientId',
  as: 'patients'
});

export default Doctor;

