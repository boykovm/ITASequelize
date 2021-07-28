import { Router } from 'express';

import homeRouter from './shared/home.routes';
import userRoutes from './user/user.routes';
import permissionRoutes from './permission/permission.routes';
import roleRoutes from './role/role.routes';

const routes = Router();

routes.use('/', homeRouter);
routes.use('/user', userRoutes);
routes.use('/permissions', permissionRoutes);
routes.use('/role', roleRoutes);

export default routes;
