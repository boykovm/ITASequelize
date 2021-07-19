import { Sequelize } from 'sequelize-typescript';
import { User } from './User';
import { Role } from './Role';
import { Permission } from './Permission';
import { RolePermission } from './RolePermission';

export const sequelize = new Sequelize({
  database: 'some_db',
  dialect: 'mysql',
  username: 'root',
  password: 'password',
  // storage: ':memory:',
  host: 'localhost',
  models: [
    User,
    Role,
    Permission,
    RolePermission
  ]
});