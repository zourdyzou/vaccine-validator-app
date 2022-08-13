import express, { RequestHandler } from 'express';

import { verifyTokenMiddleware } from '@/middlewares/verifyToken.middleware';
import { verfiyAdminMiddleware } from '@/middlewares/authAdmin.middleware';

import { placeController } from '@controllers/place.controller';

const placeRouter = express.Router();

// place created by user
placeRouter.post(
  '/',
  verifyTokenMiddleware,
  placeController.create as RequestHandler
);

placeRouter.get(
  '/',
  verfiyAdminMiddleware,
  placeController.getAllPlace as RequestHandler
);

placeRouter.get(
  '/:id',
  verifyTokenMiddleware,
  placeController.getSinglePlace as RequestHandler
);

placeRouter.put(
  '/:id',
  verifyTokenMiddleware,
  placeController.update as RequestHandler
);

placeRouter.delete(
  '/:id',
  verifyTokenMiddleware,
  placeController.delete as RequestHandler
);

export default placeRouter;
