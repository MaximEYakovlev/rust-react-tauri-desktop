import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Patient } from './patient.model';

@Table({
  tableName: 'skinTypes',
  timestamps: true,
})
export class SkinType extends Model<SkinType> {
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
  name: string;

  @HasMany(() => Patient, { as: 'patients' })
  patients: Patient[];
}
