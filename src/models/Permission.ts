import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { STRING } from 'sequelize';
import { Permissions } from '../constants';
import { Role } from './Role';

interface PermissionAttributesI {
  type: Permissions;
}

@Table
export class Permission extends Model<PermissionAttributesI>{
  @Column({
    type: STRING,
    allowNull: false
  })
  // @ts-ignore
  type: string;

  @ForeignKey(() => Role)
  // @ts-ignore
  roles: Role[];
}