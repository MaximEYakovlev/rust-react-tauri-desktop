import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import {System} from './system.model';
import {SensorData} from './sensor-data.model';

@Table({
  tableName: 'sensors',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
})
export class Sensor extends Model<Sensor> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => System)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  systemId: number;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  unit: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  location: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  description: string;

  @BelongsTo(() => System, { as: 'system' })
  system: System;

  @HasMany(() => SensorData, { as: 'sensorData' })
  sensorData: SensorData[];
}
