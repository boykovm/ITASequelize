import { Permission } from './permission.model';
import { Request } from 'express';

export const gelAllPermissions = async () => {
  return await Permission.findAll();
};

export const getPermission = async (req: Request) => {
  return await Permission.findByPk(req.params.id);
};

export const newPermission = async (req: Request) => {
  return await Permission.create(
    { ...req.body }
  );
};

export const permissionUpdate = async (req: Request) => {
  return await Permission.update(
    { ...req.body },
    {
      where: { uuid: req.params.id }
    });
};

export const permissionDelete = async (req: Request) => {
  return await Permission.destroy({
    where: { uuid: req.params.id }
  });
};