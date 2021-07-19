import express, { Express, Request, Response } from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import { Constants, Permissions } from './constants';
import { sequelize } from './models';
import { User } from './models/User';
import { v4 } from 'uuid';
import { Role } from './models/Role';
import { read } from 'fs';
import { Permission } from './models/Permission';

const app: Express = express();

app.use(bodyParser.json());
app.use(routes);

app.route('*')
  .all((req: Request, res: Response) => {
    res.sendStatus(404);
  });

async function start() {
  // const role1 = await Role.create({
  //   name: 'read'
  // });
  // const user1 = new User({
  //   name: 'lol1', email: 'sfsdfsdfs@gmail.com', role: role1
  // });
  // // @ts-ignore
  // console.log(user1.role);
  // // console.log(User.);
  // // @ts-ignore
  // user1.$set('roleId', [role1.id]);
  // user1.set('role', [role1]);
  // @ts-ignore
  //   .then(data => {
  //     console.log(data);
  //   });
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
              {force: true}
            );
            await start();
          } catch (e) {
            console.error(e);
          }
        }
      )
      .catch((e: Error) => {
        console.error(e);
      });
});

