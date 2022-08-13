import express, { RequestHandler } from 'express';

import { verifyTokenMiddleware } from '@/middlewares/verifyToken.middleware';
import { verfiyAdminMiddleware } from '@/middlewares/authAdmin.middleware';

import { placeController } from '@controllers/place.controller';

const router = express.Router();

// place created by user
router.post(
  '/',
  verifyTokenMiddleware,
  placeController.create as RequestHandler
);

router.get(
  '/',
  verfiyAdminMiddleware,
  placeController.getAllPlace as RequestHandler
);

router.get(
  '/:id',
  verifyTokenMiddleware,
  placeController.getSinglePlace as RequestHandler
);

router.put(
  '/:id',
  verifyTokenMiddleware,
  placeController.update as RequestHandler
);

router.delete(
  '/:id',
  verifyTokenMiddleware,
  placeController.delete as RequestHandler
);

export default router;
