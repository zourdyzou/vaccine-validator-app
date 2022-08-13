import { Response } from 'express';

import {
  Controllers,
  TypedRequest,
  VaccineDocument,
  VaccineLOTDocument,
} from './root';

export interface VaccineController extends Controllers {
  getSingleVaccine(req: TypedRequest<VaccineDocument>, res: Response): void;
  getAllVaccine(req: TypedRequest<VaccineDocument>, res: Response): void;
}

export interface VaccineLotController extends Controllers {
  getSingleVaccineLot(
    req: TypedRequest<VaccineLOTDocument>,
    res: Response
  ): void;
  getAllVaccineLot(): void;
}

export abstract class VaccineInterfaceController implements VaccineController {
  public abstract create(
    req: TypedRequest<VaccineDocument>,
    res: Response
  ): Promise<void>;

  public abstract delete(
    req: TypedRequest<VaccineDocument>,
    res: Response
  ): Promise<void>;

  public abstract getAllVaccine(
    req: TypedRequest<VaccineDocument>,
    res: Response
  ): Promise<void>;

  public abstract getSingleVaccine(
    req: TypedRequest<VaccineDocument>,
    res: Response
  ): Promise<void>;

  public abstract update(
    req: TypedRequest<VaccineDocument>,
    res: Response
  ): Promise<void>;
}
