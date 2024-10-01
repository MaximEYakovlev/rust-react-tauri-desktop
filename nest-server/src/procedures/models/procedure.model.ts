import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Treatment } from '../../treatments/models/treatment.model';

@Table({
  tableName: 'procedures',
  timestamps: true,
})
export class Procedure extends Model<Procedure> {
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

  @HasMany(() => Treatment, { as: 'treatments' })
  treatments: Treatment[];
}
