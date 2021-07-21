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
  // const permissions = req.body.permissions.map((permission: string) => {
  //   return {permission};
  // });
  // console.log(permissions);
  Role.create(
    {
      name: req.body.name,
  // @ts-ignore
      permissions: req.body.permissions
    },
    {
      include: Permission
    })
    .then((data) => {
      // res.sendStatus(200);
      res.send(data);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
});

export default roleRoutes;