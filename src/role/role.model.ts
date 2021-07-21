import { BelongsToMany, Column, DataType, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { STRING, UUID, UUIDV4 } from 'sequelize';
import { Permission } from '../permission/permission.model';
import { RolePermission } from '../shared/role-permission.model';

interface RoleI {
  uuid: string;
  name: string;
}

@Table
export class Role extends Model<RoleI>{
  @PrimaryKey
  @Column({
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    unique: true
  })
  uuid: string;

  @Column({
    type: STRING,
    allowNull: false,
  })
  name: string;

  @HasMany(() => User)
  users: User[];

  @BelongsToMany(() => Permission, () => RolePermission)
  permissions: Permission[];
}
