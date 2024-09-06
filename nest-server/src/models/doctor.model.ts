import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { DoctorPatient } from './doctor-patient.model';
import { Patient } from './patient.model';

@Table({
  tableName: 'doctors',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
})
export class Doctor extends Model<Doctor> {
  @BelongsToMany(() => Patient, () => DoctorPatient)
  patients: Patient[];

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  birthdate: Date;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  role: string;
}


