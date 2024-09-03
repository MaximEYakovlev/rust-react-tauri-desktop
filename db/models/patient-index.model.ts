import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { SkinTypeIndex } from './skin-type-index.model';

@Table({
  timestamps: true,
  tableName: 'patient_index',
})
export class PatientIndex extends Model<PatientIndex> {
  @ForeignKey(() => SkinTypeIndex)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  skinType_id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstname!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  surname!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  birthdate!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sex!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  comment?: string;

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
