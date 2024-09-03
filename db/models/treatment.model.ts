import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { ProcedureIndex } from './procedure-index.model';
import { DoctorIndex } from './doctor-index.model';
import { PatientIndex } from './patient-index.model';

@Table({
  timestamps: true,
  tableName: 'treatment',
})
export class Treatment extends Model<Treatment> {
  @ForeignKey(() => ProcedureIndex)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  procedureIndex_id!: number;

  @ForeignKey(() => DoctorIndex)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  doctorIndex_id!: number;

  @ForeignKey(() => PatientIndex)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  patientIndex_id!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date!: Date;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  total_shots!: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  total_energy!: number;

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
