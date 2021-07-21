import { Sequelize } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Role } from '../role/role.model';
import { Permission } from '../permission/permission.model';
import { RolePermission } from './role-permission.model';
import { DataBase } from './constants';

export const sequelize = new Sequelize({
  database: DataBase.DATABASE,
  dialect: DataBase.DIALECT,
  username: DataBase.USERNAME,
  password: DataBase.PASSWORD,
  host: DataBase.HOST,
  models: [
    User,
    Role,
    Permission,
    RolePermission
  ]
});
