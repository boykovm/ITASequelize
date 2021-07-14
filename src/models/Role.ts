import { AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Permissions } from '../constants';
import { User } from './User';
import { DataType } from 'sequelize';

@Table
export class Role extends Model{
  @AutoIncrement
  @PrimaryKey
  @Column
  // @ts-ignore
  id: DataType.INTEGER;

  @Column
  // @ts-ignore
  uuid: DataType.UUID;

  @Column
  // @ts-ignore
  name: DataType.STRING;

  @Column
  // @ts-ignore
  permissions: Permissions[];

  // @ForeignKey(() => User)
  @Column
  // @ts-ignore
  usersId: number[];
}