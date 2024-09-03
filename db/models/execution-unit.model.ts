import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'execution_unit',
})
export class ExecutionUnit extends Model<ExecutionUnit> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  volume!: number;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  adjustment_coefficients!: number;
}
