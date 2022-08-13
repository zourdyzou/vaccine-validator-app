import express, { RequestHandler } from 'express';

import { verfiyAdminMiddleware } from '@/middlewares/authAdmin.middleware';

import { vaccineController } from '@controllers/vaccine.controller';
import { vaccineLotController } from '@controllers/vaccine-lot.controller';

const vaccineRouter = express.Router();

vaccineRouter.post(
  '/',
  verfiyAdminMiddleware,
  vaccineController.create as RequestHandler
);

vaccineRouter.get(
  '/',
  verfiyAdminMiddleware,
  vaccineController.getAllVaccine as RequestHandler
);

vaccineRouter.get(
  '/:id',
  verfiyAdminMiddleware,
  vaccineController.getSingleVaccine as RequestHandler
);

vaccineRouter.put(
  '/:id',
  verfiyAdminMiddleware,
  vaccineController.update as RequestHandler
);

vaccineRouter.delete(
  '/:id',
  verfiyAdminMiddleware,
  vaccineController.delete as RequestHandler
);

/**
 * Vaccine Lot vaccineRouter
 */

vaccineRouter.post(
  '/lots',
  verfiyAdminMiddleware,
  vaccineLotController.create as RequestHandler
);

vaccineRouter.get(
  '/lots/get-all',
  verfiyAdminMiddleware,
  vaccineLotController.getAllVaccineLot as RequestHandler
);

vaccineRouter.get(
  '/lots/:id',
  verfiyAdminMiddleware,
  vaccineLotController.getSingleVaccineLot as RequestHandler
);

vaccineRouter.put(
  '/lots/:id',
  verfiyAdminMiddleware,
  vaccineLotController.update as RequestHandler
);

vaccineRouter.delete(
  '/lots/:id',
  verfiyAdminMiddleware,
  vaccineLotController.delete as RequestHandler
);

export default vaccineRouter;
