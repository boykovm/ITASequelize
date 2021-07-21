import express, { Express, Request, Response } from 'express';

import routes from './shared/index.routes';
import bodyParser from 'body-parser';
import { Constants, Permissions } from './shared/constants';
import { sequelize } from './shared/sequelize';
import { User } from './user/user.model';
import { Role } from './role/role.model';
import { read } from 'fs';
import { Permission } from './permission/permission.model';

const app: Express = express();

app.use(bodyParser.json());
app.use(routes);

app.route('*')
  .all((req: Request, res: Response) => {
    res.sendStatus(404);
  });

async function start() {
    await User.create({
    name: 'name',
    email: 'dfd@gmail.com',
  // @ts-ignore
    role: {name: 'read'}
    },
    {include: [
      Role
    ]}
  );

  await Role.create({
    name: 'admin',
  // @ts-ignore
    permissions: [
      {
        permission: Permissions.READ
      },{
        permission: Permissions.CREATE
      },{
        permission: Permissions.UPDATE
      },{
        permission: Permissions.DELETE
      },
    ],
    },
  {
    include: [
      Permission
    ]}
  );
}

app.listen(Constants.PORT, Constants.HOSTNAME, () => {
    console.log(`Server was running at http://${Constants.HOSTNAME}:${Constants.PORT}/`);

    sequelize.authenticate()
      .then(
        async () => {
          console.log('database connected');

          try {
            await sequelize.sync(
              // {force: true}
            );
            // await start();
          } catch (e) {
            console.error(e);
          }
        }
      )
      .catch((e: Error) => {
        console.error(e);
      });
});
