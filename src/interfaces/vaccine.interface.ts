import { Controllers } from './root';

export interface VaccineController extends Controllers {
  getSingleVaccine(): void;
  getAllVaccine(): void;
}

export interface VaccineLotController extends Controllers {
  getSingleVaccineLot(): void;
  getAllVaccineLot(): void;
}
