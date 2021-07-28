import express, { Router } from 'express';
import {
  createPermission,
  deletePermission,
  getAllPermissions,
  getPermissionById,
  updatePermission
} from './permission.controller';

const permissionRoutes: Router = express.Router();

permissionRoutes.get('/all', getAllPermissions);
permissionRoutes.get('/:id', getPermissionById);
permissionRoutes.post('/', createPermission);
permissionRoutes.patch('/:id', updatePermission);
permissionRoutes.delete('/:id', deletePermission);

export default permissionRoutes;
