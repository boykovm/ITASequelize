import express, { Router } from 'express';

import {
  addUsersRole,
  createUser,
  deleteUserById,
  getAll,
  getUser,
  updateUser
} from './user.controller';

const userRoutes: Router = express.Router();

userRoutes.get('/all', getAll);
userRoutes.get('/:id', getUser);
userRoutes.post('/', createUser);
userRoutes.patch('/:id', updateUser);
userRoutes.delete('/:id', deleteUserById);
userRoutes.patch('/:id/add-role', addUsersRole);

export default userRoutes;
