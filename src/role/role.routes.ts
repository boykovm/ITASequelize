import express, { Router } from 'express';
import { createRole, getAllRoles, getRolesWithPermissions } from './role.controller';

const roleRoutes: Router = express.Router();

roleRoutes.get('/all', getAllRoles);
roleRoutes.post('/', createRole);

roleRoutes.get('/with-permission', getRolesWithPermissions);

export default roleRoutes;
