import { Router } from 'express';
import homeRouter from './homeRouter';

const routes = Router();

routes.use('/', homeRouter);

export default routes;
