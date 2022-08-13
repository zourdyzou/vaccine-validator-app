import express, { RequestHandler } from 'express';

import { verifyTokenMiddleware } from '@/middlewares/verifyToken.middleware';
import { verfiyAdminMiddleware } from '@/middlewares/authAdmin.middleware';

import { userController } from '@controllers/user.controller';

const userRouter = express.Router();

userRouter.post(
  '/',
  verfiyAdminMiddleware,
  userController.create as RequestHandler
);

userRouter.get(
  '/',
  verfiyAdminMiddleware,
  userController.getAllUser as RequestHandler
);

userRouter.get(
  '/:id',
  verfiyAdminMiddleware,
  userController.getSingleUser as RequestHandler
);

userRouter.put(
  '/:id',
  verfiyAdminMiddleware,
  userController.update as RequestHandler
);

userRouter.delete(
  '/:id',
  verfiyAdminMiddleware,
  userController.delete as RequestHandler
);

// add vaccination to user that has been vaccinated

userRouter.post(
  '/vaccinated',
  verfiyAdminMiddleware,
  userController.vaccinated as RequestHandler
);

userRouter.get(
  '/:userId/place',
  verifyTokenMiddleware,
  userController.getAllPlace as RequestHandler
);

userRouter.post(
  '/checkin-place',
  verifyTokenMiddleware,
  userController.checkinPlace as RequestHandler
);

// place that user visited
userRouter.get(
  '/:userId/place-visited',
  verifyTokenMiddleware,
  userController.placeVisited as RequestHandler
);

export default userRouter;
