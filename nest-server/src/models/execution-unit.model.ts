import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'execution_units',
  timestamps: true,
})
export class ExecutionUnit extends Model<ExecutionUnit> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  volume: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  adjustment_coefficients: number;
}
