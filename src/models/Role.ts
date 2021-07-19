import { BelongsToMany, Column, DataType, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { User } from './User';
import { STRING, UUID, UUIDV4 } from 'sequelize';
import { Permission } from './Permission';
import { RolePermission } from './RolePermission';

interface RoleI {
  // id: string;
  name: string;
  // permissions: Permission;
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