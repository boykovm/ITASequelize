/* tslint:disable:no-shadowed-variable */
import { Request, Response } from 'express';
import { Role } from './role.model';
import { Permission } from '../permission/permission.model';
import { getRoles, newRole, rolesWithPermissions } from './role.services';

export const getAllRoles = async (req: Request, res: Response) => {
  getRoles()
    .then((roles: Role[]) => {
      res.send(roles);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
    });
};

export const createRole = async (req: Request, res: Response) => {
  newRole(req)
    .then((role: Role) => {
      req.body.permissions.forEach(async (permission: string) => {
        // @ts-ignore
        await role.addPermission(permission);
      });
      res.status(201);
      res.send(role.uuid);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
};

export const getRolesWithPermissions = async (req: Request, res: Response) => {
  rolesWithPermissions()
    .then((roles: Role[]) => {
      res.send(roles);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
};
