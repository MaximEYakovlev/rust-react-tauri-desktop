import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { System } from './system.model';

@Table({
  timestamps: true,
  tableName: 'sensor',
})
export class Sensor extends Model<Sensor> {
  @ForeignKey(() => System)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  system_id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  unit!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  location?: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description?: string;

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
