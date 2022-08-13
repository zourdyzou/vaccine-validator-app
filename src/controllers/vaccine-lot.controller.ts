import { Response } from 'express';

import { VaccineLotInterface } from '@interfaces/vaccine.interface';
import { TypedRequest, VaccineLOTDocument } from '@interfaces/root';

import VaccineLotSchema from '@models/vaccineLot.schema';
import UserVaccineSchema from '@models/userVaccine.schema';

class VaccineLotController implements VaccineLotInterface {
  public async create(req: TypedRequest<VaccineLOTDocument>, res: Response) {
    try {
      const newVaccineLot = new VaccineLotSchema({
        name: req.body.name,
        quantity: req.body.quantity,
        vaccinated: 0,
        vaccine: req.body.vaccineId,
      });
      const savedLot = await newVaccineLot.save();
      res.status(201).json(savedLot);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async delete(req: TypedRequest<VaccineLOTDocument>, res: Response) {
    try {
      await UserVaccineSchema.deleteMany({ vaccineLot: req.params.id });
      await VaccineLotSchema.findByIdAndDelete(req.params.id);
      res.status(200).json('Deleted');
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async getAllVaccineLot(
    _req: TypedRequest<VaccineLOTDocument>,
    res: Response
  ) {
    try {
      const list = await VaccineLotSchema.find({})
        .populate('vaccine')
        .sort('-createdAt');
      res.status(200).json(list);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async getSingleVaccineLot(
    req: TypedRequest<VaccineLOTDocument>,
    res: Response
  ) {
    try {
      const vaccineLot = await VaccineLotSchema.findById(
        req.params.id
      ).populate('vaccine');
      res.status(200).json(vaccineLot);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async update(req: TypedRequest<VaccineLOTDocument>, res: Response) {
    try {
      const vaccineLot = await VaccineLotSchema.findByIdAndUpdate(
        req.params.id,
        { $set: req.body }
      );
      res.status(200).json(vaccineLot);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export const vaccineLotController = new VaccineLotController();
