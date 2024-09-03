import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { Sensor } from './sensor.model';

@Table({
  timestamps: true,
  tableName: 'sensor_data',
})
export class SensorData extends Model<SensorData> {
  @ForeignKey(() => Sensor)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  sensor_id!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  recorded_at!: Date;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  value!: number;

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
