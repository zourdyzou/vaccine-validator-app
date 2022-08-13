import express, { RequestHandler } from 'express';

import { verfiyAdminMiddleware } from '@/middlewares/authAdmin.middleware';

import { vaccineController } from '@controllers/vaccine.controller';
import { vaccineLotController } from '@controllers/vaccine-lot.controller';

const router = express.Router();

router.post(
  '/',
  verfiyAdminMiddleware,
  vaccineController.create as RequestHandler
);

router.get(
  '/',
  verfiyAdminMiddleware,
  vaccineController.getAllVaccine as RequestHandler
);

router.get(
  '/:id',
  verfiyAdminMiddleware,
  vaccineController.getSingleVaccine as RequestHandler
);

router.put(
  '/:id',
  verfiyAdminMiddleware,
  vaccineController.update as RequestHandler
);

router.delete(
  '/:id',
  verfiyAdminMiddleware,
  vaccineController.delete as RequestHandler
);

/**
 * Vaccine Lot router
 */

router.post(
  '/lots',
  verfiyAdminMiddleware,
  vaccineLotController.create as RequestHandler
);

router.get(
  '/lots/get-all',
  verfiyAdminMiddleware,
  vaccineLotController.getAllVaccineLot as RequestHandler
);

router.get(
  '/lots/:id',
  verfiyAdminMiddleware,
  vaccineLotController.getSingleVaccineLot as RequestHandler
);

router.put(
  '/lots/:id',
  verfiyAdminMiddleware,
  vaccineLotController.update as RequestHandler
);

router.delete(
  '/lots/:id',
  verfiyAdminMiddleware,
  vaccineLotController.delete as RequestHandler
);
