import express, { Express, Request, Response } from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import { Constants } from './constants';
import { sequelize } from './models';
import { User } from './models/User';
import { v4 } from 'uuid';

const app: Express = express();

app.use(bodyParser.json());
app.use(routes);

app.route('*')
  .all((req: Request, res: Response) => {
    res.sendStatus(404);
  });

// function start() {
//   const user = new User({name: 'firstName', email: 'mygstyle19@gmail.com', role: 'read'});
//   user.save();
//   const user1 = new User({name: 'anotherName', email: 'mygswqtyle19@gmail.com', role: 'create'});
//   user1.save();
//   // await sequelize.
//   console.log('lol');
// }

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
            User.create({name: 'firstName', email: 'mygstyle19@gmail.com', role: 'read'});
            User.create({uuid: v4(), name: 'lol1', email: 'sfsdfsdfs@gmail.com', role: 'read', createdAt: Date.now()});
            // start();
          } catch (e) {
            console.error(e);
          }
        }
      )
      .catch((e: Error) => {
        console.error(e);
      });
});

