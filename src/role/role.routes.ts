import express, { Router, Request, Response } from 'express';
import { Role } from './role.model';
import { Permission } from '../permission/permission.model';

const roleRoutes: Router = express.Router();

roleRoutes.get('/all', async (req: Request, res: Response) => {
  Role.findAll()
    .then((roles: Role[]) => {
      res.send(roles);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
    });
});

roleRoutes.post('/', async (req: Request, res: Response) => {
  Role.create(
    {
      name: req.body.name
    })
    .then((role: Role) => {
      req.body.permissions.forEach(async (permission: string) => {
      // @ts-ignore
       await role.addPermission(permission);
      });
      res.sendStatus(200);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
});

roleRoutes.get('/with-permission', async (req: Request, res: Response) => {
  const roles = await Role.findAll({include: Permission});
  res.send(roles);
  // res.sendStatus(200);
});

export default roleRoutes;
