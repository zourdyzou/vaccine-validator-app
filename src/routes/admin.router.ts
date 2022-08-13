import express, { RequestHandler } from 'express';

import { adminController } from '@controllers/admin.controller';
import { verfiyAdminMiddleware } from '@/middlewares/authAdmin.middleware';

const adminRouter = express.Router();

adminRouter.post('/login', adminController.login as RequestHandler);

adminRouter.get(
  '/summary',
  verfiyAdminMiddleware,
  adminController.summary as RequestHandler
);

adminRouter.post('/check-token', verfiyAdminMiddleware, (_req, res) => {
  res.status(200).json('Authorized');
});

export default adminRouter;
