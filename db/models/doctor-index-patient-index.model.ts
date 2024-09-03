import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { DoctorIndex } from './doctor-index.model';
import { PatientIndex } from './patient-index.model';

@Table({
  timestamps: true,
  tableName: 'doctor_index_patient_index',
})
export class DoctorIndexPatientIndex extends Model<DoctorIndexPatientIndex> {
  @ForeignKey(() => DoctorIndex)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  doctor_id!: number;

  @ForeignKey(() => PatientIndex)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  patient_id!: number;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  created_at!: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  updated_at!: Date;
}
