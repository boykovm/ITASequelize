import { Role } from './role.model';
import { Request } from 'express';
import { Permission } from '../permission/permission.model';

export const getRoles = async () => {
  return await Role.findAll();
};

export const newRole = async (req: Request) => {
  return await Role.create(
    {
      name: req.body.name
    });
};

export const rolesWithPermissions = async () => {
  return await Role.findAll(
    {include: Permission}
  );
};
