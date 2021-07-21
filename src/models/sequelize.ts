import { Sequelize } from 'sequelize-typescript';
import { User } from './User';
import { Role } from './Role';
import { Permission } from './Permission';
import { RolePermission } from './RolePermission';
import { DataBase } from '../constants';

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
