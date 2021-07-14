import express, { Express, Request, Response } from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import { Constants } from './constants';
import { sequelize } from './models';

const app: Express = express();

app.use(bodyParser.json());
app.use(routes);

app.route('*')
  .all((req: Request, res: Response) => {
    res.sendStatus(404);
  });

app.listen(Constants.PORT, Constants.HOSTNAME, () => {
    console.log(`Server was running at http://${Constants.HOSTNAME}:${Constants.PORT}/`);

    sequelize.authenticate()
      .then(
        async () => {
          console.log('database connected');

          try {
            await sequelize.sync({force: true});
          } catch (e) {
            console.error(e);
          }
        }
      )
      .catch((e: Error) => {
        console.error(e);
      });
});

