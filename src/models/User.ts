import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  ForeignKey,
  IsEmail,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Role } from './Role';
import { DATE, STRING, UUID, UUIDV4 } from 'sequelize';

@Table
export class User extends Model{
  @Column({
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true
  })
  // @ts-ignore
  uuid: string;

  @Column({
    type: STRING,
    allowNull: false
  })
  // @ts-ignore
  name: string;

  @IsEmail
  @Column({
    type: STRING,
    allowNull: false
  })
  // @ts-ignore
  email: string;

  @ForeignKey(() => Role)
  // @ts-ignore
  role: Role[];
}