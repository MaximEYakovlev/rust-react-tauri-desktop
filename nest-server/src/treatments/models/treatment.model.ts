import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { Doctor } from '../../doctors/models/doctor.model';
import { Patient } from '../../patients/models/patient.model';
import { Procedure } from '../../procedures/models/procedure.model';

@Table({
  tableName: 'treatments',
  timestamps: true,
})
export class Treatment extends Model<Treatment> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Procedure)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  procedureId: number;

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

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date: Date;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  totalShots: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  totalEnergy: number;

  @BelongsTo(() => Procedure, { as: 'procedure' })
  procedure: Procedure;

  @BelongsTo(() => Doctor, { as: 'doctor' })
  doctor: Doctor;

  @BelongsTo(() => Patient, { as: 'patient' })
  patient: Patient;
}
