import { BelongsToMany, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { STRING } from 'sequelize';
import { Permissions } from '../constants';
import { Role } from './Role';
import { RolePermission } from './RolePermission';

interface PermissionAttributesI {
  type: Permissions;
}

@Table
export class Permission extends Model<PermissionAttributesI>{
  @Column({
    type: STRING,
    allowNull: false
  })
  permission: Permissions;

  @BelongsToMany(() => Role, () => RolePermission)
  role: Role;
  // @Column({
  //   type: STRING,
  // })
  // roleId: string;

  @ForeignKey(() => Role)
  roles: Role[];
}