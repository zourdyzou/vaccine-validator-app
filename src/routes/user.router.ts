import express, { RequestHandler } from 'express';

import { verifyTokenMiddleware } from '@/middlewares/verifyToken.middleware';
import { verfiyAdminMiddleware } from '@/middlewares/authAdmin.middleware';

import { userController } from '@controllers/user.controller';

const router = express.Router();

router.post(
  '/',
  verfiyAdminMiddleware,
  userController.create as RequestHandler
);

router.get(
  '/',
  verfiyAdminMiddleware,
  userController.getAllUser as RequestHandler
);

router.get(
  '/:id',
  verfiyAdminMiddleware,
  userController.getSingleUser as RequestHandler
);

router.put(
  '/:id',
  verfiyAdminMiddleware,
  userController.update as RequestHandler
);

router.delete(
  '/:id',
  verfiyAdminMiddleware,
  userController.delete as RequestHandler
);

// add vaccination to user that has been vaccinated

router.post(
  '/vaccinated',
  verfiyAdminMiddleware,
  userController.vaccinated as RequestHandler
);

router.get(
  '/:userId/place',
  verifyTokenMiddleware,
  userController.getAllPlace as RequestHandler
);

router.post(
  '/checkin-place',
  verifyTokenMiddleware,
  userController.checkinPlace as RequestHandler
);

// place that user visited
router.get(
  '/:userId/place-visited',
  verifyTokenMiddleware,
  userController.placeVisited as RequestHandler
);

export default router;
