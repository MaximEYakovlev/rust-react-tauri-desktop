import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { Doctor } from './doctor.model';
import { Patient } from '../../patients/models/patient.model';

@Table({
  tableName: 'doctor_patients',
  timestamps: true,
})
export class DoctorPatient extends Model<DoctorPatient> {
  @ForeignKey(() => Doctor)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  doctorId: number;

  @ForeignKey(() => Patient)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  patientId: number;
}
