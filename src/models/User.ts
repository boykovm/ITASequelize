import {
  AutoIncrement,
  Column,
  CreatedAt,
  ForeignKey,
  Model, NotEmpty,
  PrimaryKey, Sequelize,
  Table,
  UpdatedAt
} from 'sequelize-typescript';
import { Role } from './Role';
import { UserI } from '../interfaces/user';
import { DataType } from 'sequelize';
import { Permissions } from '../constants';

@Table
export class User extends Model{
  // @AutoIncrement
  // @PrimaryKey
  // @Column
  // // @ts-ignore
  // uuid: Sequelize.UUID;
  //
  // @NotEmpty
  // @Column
  // // @ts-ignore
  // name: Sequelize.STRING;
  //
  // @NotEmpty
  // @Column
  // // @ts-ignore
  // email: Sequelize.STRING;
  //
  // @CreatedAt
  // // @ts-ignore
  // createdAt: Sequelize.DATE;
  //
  // @UpdatedAt
  // // @ts-ignore
  // updatedAt: Sequelize.DATE;
  //
  // // // @ForeignKey(() => Role)
  // // @Column
  // // // @ts-ignore
  // // role: Sequelize.ENUM(Permissions);
  // @Column({
  //   defaultValue: DataType.UUIDV4,
  //   primaryKey: true,
  //   type: DataType.UUID
  // }) public id: string;
}