import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Role } from './Role';
import { Permission } from './Permission';
import { STRING } from 'sequelize';

@Table
export class RolePermission extends Model{
  @ForeignKey(() => Role)
  @Column({
    type: STRING
  })
  public roleId: string;

  @ForeignKey(() => Permission)
  @Column({
    type: STRING
  })
  public permissionId: string;
}