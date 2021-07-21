import { Router } from 'express';
import homeRouter from '../routes/home.routes';

const routes = Router();

routes.use('/', homeRouter);

export default routes;
