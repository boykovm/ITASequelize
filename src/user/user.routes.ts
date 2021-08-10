import express, { Router } from 'express';

import {
  addUsersRole,
  createUser,
  deleteUserById,
  getAll,
  getUser,
  updateUser, userRole
} from './user.controller';

const userRoutes: Router = express.Router();

userRoutes.get('/all', getAll);
userRoutes.get('/:id', getUser);
userRoutes.post('/', createUser);
userRoutes.patch('/:id', updateUser);
userRoutes.delete('/:id', deleteUserById);
userRoutes.patch('/:id/add-role', addUsersRole);
userRoutes.get('/role/:id', userRole);

export default userRoutes;
