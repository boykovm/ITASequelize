import { Request, Response } from 'express';
import { Role } from './role.model';
import { getRoles, newRole, rolesWithPermissions } from './role.services';

export const getAllRoles = async (req: Request, res: Response) => {
  try {
    const roles: Role[] = await getRoles();
    res.send(roles);
  } catch (e) {
    res.sendStatus(500);
  }
};

export const createRole = async (req: Request, res: Response) => {
  try {
    const role: Role = await newRole(req);
    req.body.permissions.forEach(async (permission: string) => {
      // @ts-ignore
      await role.addPermission(permission);
    });
    res.status(201);
    res.send(role.uuid);
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};

export const getRolesWithPermissions = async (req: Request, res: Response) => {
  try {
    const roles: Role[] = await rolesWithPermissions();
    res.send(roles);
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};
