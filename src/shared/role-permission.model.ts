import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { STRING } from 'sequelize';

import { Role } from '../role/role.model';
import { Permission } from '../permission/permission.model';

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
