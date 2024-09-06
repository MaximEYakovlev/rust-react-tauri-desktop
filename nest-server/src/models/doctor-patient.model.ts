// import {
//   Table,
//   Column,
//   Model,
//   DataType,
//   ForeignKey,
//   PrimaryKey,
//   AutoIncrement,
// } from 'sequelize-typescript';
// import { Doctor } from './doctor.model';
// import { Patient } from './patient.model';

// @Table({
//   tableName: 'doctor_patients',
//   timestamps: true, // Automatically manage createdAt and updatedAt fields
// })
// export class DoctorPatient extends Model<DoctorPatient> {
//   @PrimaryKey
//   @AutoIncrement
//   @Column(DataType.INTEGER)
//   id: number;

//   @ForeignKey(() => Doctor)
//   @Column(DataType.INTEGER)
//   doctorId: number;

//   @ForeignKey(() => Patient)
//   @Column(DataType.INTEGER)
//   patientId: number;
// }


import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import {Doctor} from './doctor.model';
import {Patient} from './patient.model';

@Table({
  tableName: 'doctor_patients',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
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
