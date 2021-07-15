import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from './User';
import { STRING, UUID, UUIDV4 } from 'sequelize';
import { Permission } from './Permission';

@Table
export class Role extends Model{
  @Column({
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true
  })
  uuid!: string;

  @Column({
    type: STRING,
    allowNull: false
  })
  name!: string;

  @HasMany(() => User)
  // @ts-ignore
  users: User[];

  @HasMany(() => Permission)
  // @ts-ignore
  permissions: Permission[];


}