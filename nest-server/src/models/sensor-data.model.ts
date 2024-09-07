import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Sensor } from './sensor.model';

@Table({
  tableName: 'sensor_data',
  timestamps: true,
})
export class SensorData extends Model<SensorData> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Sensor)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  sensorId: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  recordedAt: Date;

  @Column({
    type: DataType.FLOAT, // Use FLOAT for decimal values
    allowNull: false,
  })
  value: number;

  @BelongsTo(() => Sensor, { as: 'sensor' })
  sensor: Sensor;
}
