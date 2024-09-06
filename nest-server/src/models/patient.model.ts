import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { SkinType } from './skin-type.model';
import { Doctor } from './doctor.model';
import { DoctorPatient } from './doctor-patient.model';

@Table({
  tableName: 'patients',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
})
export class Patient extends Model<Patient> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => SkinType)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  skinTypeId: number;

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
  sex: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: true,
  })
  comment: string;

  @BelongsTo(() => SkinType, { as: 'skinType' })
  skinType: SkinType;

  //   @BelongsToMany(() => Doctor, () => DoctorPatient, {
  //     as: 'doctors', // Alias should match the one used in the Doctor model
  //     foreignKey: 'patientId',
  //     otherKey: 'doctorId',
  //   })
  //   doctors: Doctor[];
}
