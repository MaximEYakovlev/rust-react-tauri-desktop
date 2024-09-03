import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Device } from './device.model';

@Table({
  timestamps: true,
  tableName: 'system',
})
export class System extends Model<System> {
  @ForeignKey(() => Device)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  device_id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

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
