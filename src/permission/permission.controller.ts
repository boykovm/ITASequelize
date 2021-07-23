import { Request, Response } from 'express';
import { Permission } from './permission.model';
import { PermissionI } from './permission.interface';
import {
  gelAllPermissions,
  getPermission,
  newPermission,
  permissionDelete,
  permissionUpdate
} from './permission.services';

export const getAllPermissions = async (req: Request, res: Response) => {
  gelAllPermissions()
    .then((permissions: PermissionI[]) => {
      res.send(permissions);
    })
    .catch((e: Error) => {
      console.error(e);
      res.sendStatus(500);
    });
};

export const getPermissionById = async (req: Request, res: Response) => {
  getPermission(req)
    .then((permission: Permission | null) => {
      if (!permission) {
        return res.sendStatus(404);
      }
      res.send(permission);
    })
    .catch((e: Error) => {
      console.error(e);
      res.sendStatus(500);
    });
};

export const createPermission = async (req: Request, res: Response) => {
  newPermission(req)
    .then((permission: Permission) => {
      res.status(201);
      res.send(permission.uuid);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
};

export const updatePermission = async (req: Request, res: Response) => {
  permissionUpdate(req)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
};

export const deletePermission = async (req: Request, res: Response) => {
  permissionDelete(req)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
};