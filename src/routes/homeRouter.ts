import express, { Request, Response, Router } from 'express';

const homeRouter: Router = express.Router();

homeRouter.get('/', (req, res) => {
  console.log('work');
});

export default homeRouter;