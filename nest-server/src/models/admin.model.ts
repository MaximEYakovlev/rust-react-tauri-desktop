import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
} from 'sequelize-typescript';

@Table({
  tableName: 'admin',
  timestamps: true,
})
export class Admin extends Model<Admin> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  firstName: string;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  lastName: string;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  username: string;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  password: string;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  role: string;
}
