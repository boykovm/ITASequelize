import { Sequelize } from 'sequelize-typescript';
import { User } from './User';
// import { Role } from './Role';

export const sequelize = new Sequelize({
  database: 'some_db',
  dialect: 'mysql',
  username: 'root',
  password: 'Ch3g0nyashka',
  // storage: ':memory:',
  host: 'localhost',
  models: [
    User,
    // Role
  ]
});