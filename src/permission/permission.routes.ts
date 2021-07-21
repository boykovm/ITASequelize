import express, { Request, Router, Response } from 'express';
import { Permission } from './permission.model';
import { PermissionI } from './permission.interface';

const permissionRoutes: Router = express.Router();

permissionRoutes.get('/all', async (req: Request, res: Response) => {
  Permission.findAll()
    .then((permissions: PermissionI[]) => {
      res.send(permissions);
    })
    .catch((e: Error) => {
      console.error(e);
      res.sendStatus(500);
    });
});

permissionRoutes.get('/:id', async (req: Request, res: Response) => {
  Permission.findByPk(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((e: Error) => {
      console.error(e);
      res.sendStatus(500);
    });
});

permissionRoutes.post('/', async (req: Request, res: Response) => {
  Permission.create(
    {
      ...req.body
    }
  )
    .then(() => {
      res.sendStatus(200);
    })
    .catch((e: Error) => {
      res.sendStatus(500);
      console.error(e);
    });
});

permissionRoutes.patch('/:id', async (req: Request, res: Response) => {
  Permission.update(
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

permissionRoutes.delete('/:id', async (req: Request, res: Response) => {
  Permission.destroy({
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

export default permissionRoutes;
