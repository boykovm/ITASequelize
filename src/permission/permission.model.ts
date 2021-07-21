import { BelongsToMany, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { STRING, UUID, UUIDV4 } from 'sequelize';
import { Permissions } from '../shared/constants';
import { Role } from '../role/role.model';
import { RolePermission } from '../shared/role-permission.model';

interface PermissionAttributesI {
  type: Permissions;
}

@Table
export class Permission extends Model<PermissionAttributesI>{
  @Column({
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true
  })
  uuid: string;

  @Column({
    type: STRING,
    allowNull: false
  })
  permission: Permissions;

  @BelongsToMany(() => Role, () => RolePermission)
  role: Role;

  @ForeignKey(() => Role)
  roles: Role[];
}
