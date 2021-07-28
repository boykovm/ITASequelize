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
  try {
    const permissions: PermissionI[] = await gelAllPermissions();
    res.send(permissions);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

export const getPermissionById = async (req: Request, res: Response) => {
  try {
    const permission: Permission | null = await getPermission(req);
    if (!permission) {
      return res.sendStatus(404);
    }
    res.send(permission);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

export const createPermission = async (req: Request, res: Response) => {
  try {
    const permission: Permission = await newPermission(req);
    res.status(201);
    res.send(permission.uuid);
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};

export const updatePermission = async (req: Request, res: Response) => {
  try {
    await permissionUpdate(req);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};

export const deletePermission = async (req: Request, res: Response) => {
  try {
    await permissionDelete(req);
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
    console.error(e);
  }
};