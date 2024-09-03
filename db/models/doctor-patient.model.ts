import { Model, InferAttributes, InferCreationAttributes, DataTypes, ForeignKey, CreationOptional } from 'sequelize';
import sequelize from '../config/sequelize';
import Doctor from './doctor.model';
import Patient from './patient.model';

class DoctorPatient extends Model<InferAttributes<DoctorPatient>, InferCreationAttributes<DoctorPatient>> {
  declare doctorId: ForeignKey<Doctor['id']>;
  declare patientId: ForeignKey<Patient['id']>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

DoctorPatient.init(
  {
    doctorId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    patientId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'doctor_patients',
    sequelize,
  }
);

Doctor.belongsToMany(Patient, {
  through: DoctorPatient,
  foreignKey: 'doctorId',
  otherKey: 'patientId',
  as: 'patients'
});

Patient.belongsToMany(Doctor, {
  through: DoctorPatient,
  foreignKey: 'patientId',
  otherKey: 'doctorId',
  as: 'doctors'
});

export { DoctorPatient };
