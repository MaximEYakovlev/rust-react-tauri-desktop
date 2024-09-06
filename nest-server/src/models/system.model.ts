import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import {Device} from './device.model';
import {Sensor} from './sensor.model';

@Table({
  tableName: 'systems',
  timestamps: true, // Automatically manage createdAt and updatedAt fields
})
export class System extends Model<System> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Device)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  deviceId: number;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  description: string;

  @BelongsTo(() => Device, { as: 'device' })
  device: Device;

  @HasMany(() => Sensor, { as: 'sensors' })
  sensors: Sensor[];
}
