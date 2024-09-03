import { Model, InferAttributes, InferCreationAttributes, DataTypes, ForeignKey, CreationOptional } from 'sequelize';
import sequelize from '../config/sequelize';
import SkinType from './skin-type-index.model';
import Doctor from './doctor.model';
import { DoctorPatient } from './doctor-patient.model';

class Patient extends Model<InferAttributes<Patient>, InferCreationAttributes<Patient>> {
  declare id: number;
  declare skinTypeId: ForeignKey<SkinType['id']>;
  declare firstName: string;
  declare lastName: string;
  declare birthdate: Date;
  declare sex: string;
  declare comment: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare doctors?: Doctor[];
}

Patient.init(
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
    sex: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    comment: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'patients',
    sequelize
  }
);

Patient.belongsTo(
  SkinType,
  {
    foreignKey: 'skinTypeId',
    as: 'skinTypes'
  }
);

Patient.belongsToMany(Doctor, {
  through: DoctorPatient,
  foreignKey: 'patientId',
  otherKey: 'doctorId',
  as: 'doctors'
});

export default Patient;
