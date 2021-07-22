import express, { Router, Request, Response } from 'express';

import { User } from './user.model';
import { UserI } from './user.interface';

const userRoutes: Router = express.Router();

userRoutes.get('/all', async (req: Request, res: Response) => {
  User.findAll()
    .then((users: User[]) => {
      res.send(users);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
});

userRoutes.get('/:id', async (req: Request, res: Response) => {
  User.findByPk(req.params.id)
    .catch((user: UserI) => {
      res.send(user);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
});

userRoutes.post('/', async (req: Request, res: Response) => {
  User.create(
    {
      ...req.body
    })
    .then((user: User) => {
      res.sendStatus(201);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
});

userRoutes.patch('/:id', async (req: Request, res: Response) => {
  User.update(
    {
      ...req.body
    },
  {
    where: {
      uuid: req.params.id
    }
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
});

userRoutes.delete('/:id', async (req: Request, res: Response) => {
  User.destroy({
      where: {
        uuid: req.params.id
      }
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
});

userRoutes.patch('/add-role', async (req: Request, res: Response) => {
  res.send('ok');
});

export default userRoutes;
