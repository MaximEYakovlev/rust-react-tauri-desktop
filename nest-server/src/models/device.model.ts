import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  HasMany,
} from 'sequelize-typescript';
import { System } from './system.model';

@Table({
  tableName: 'devices',
  timestamps: true,
})
export class Device extends Model<Device> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  model: string;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  serial_number: string;

  @HasMany(() => System, { as: 'systems' })
  systems: System[];
}
