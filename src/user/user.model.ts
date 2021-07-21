import {
  BelongsTo,
  Column,
  ForeignKey,
  IsEmail,
  Model,
  Table,
} from 'sequelize-typescript';
import { STRING, UUID, UUIDV4 } from 'sequelize';
import { Role } from '../role/role.model';

interface UserI {
  uuid: string;
  name: string;
  email: string;
  role?: Role;
  roleId?: number;
}

@Table
export class User extends Model<UserI>{
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
  name: string;

  @IsEmail
  @Column({
    type: STRING,
    allowNull: false
  })
  email: string;

  @ForeignKey(() => Role)
  @Column({
    type: UUID,
    allowNull: true
  })
  roleId?: string;

  @BelongsTo(() => Role)
  role?: Role;
}
