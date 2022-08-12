import jwt from 'jsonwebtoken';
import CryptoJs from 'crypto-js';
import express from 'express';

import AdminSchema from '@/admin.schema';
import UserSchema from '@/user.schema';
import PlaceSchema from '@/place.schema';
import VaccineLotSchema from '@/vaccineLot.schema';
import UserVaccineSchema from '@/userVaccine.schema';

import {
  AdminDocument,
  AdminInterfaceController,
  TypedRequest,
} from '@interfaces/root';

class AdminController extends AdminInterfaceController {
  public async login(
    req: TypedRequest<AdminDocument>,
    res: express.Response
  ): Promise<void> {
    const admin = (await AdminSchema.findOne({
      username: req.body.username,
    })) as AdminDocument;

    try {
      const decryptedPass = CryptoJs.AES.decrypt(
        admin.password,
        process.env.PASSWORD_SECRET_KEY!
      ).toString(CryptoJs.enc.Utf8);

      if (decryptedPass !== req.body.password) {
        res.status(401).json({ message: 'Not found' });
        return;
      }

      const token = jwt.sign(
        {
          id: admin._id,
        },
        process.env.TOKEN_SECRET_KEY!
      );

      admin.password = undefined;

      res.status(200).json({
        token,
        admin,
        message: 'Admin Data Requested',
      });

      return;
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async summary(
    _req: TypedRequest<AdminDocument>,
    res: express.Response
  ): Promise<void> {
    try {
      const totalUser = await UserSchema.find({}).count();
      const totalPlace = await PlaceSchema.find({}).count();

      // count user who has been vaccinated
      const userVaccinated = await UserVaccineSchema.aggregate([
        {
          $group: { _id: '$user' },
        },
      ]).count('user');

      // count total vaccine dose
      const totalVaccineDose = await VaccineLotSchema.aggregate([
        {
          $group: {
            _id: null,
            quantity: { $sum: '$quantity' },
          },
        },
      ]);

      // count total used vaccine dose
      const totalVaccineDoseUsed = await VaccineLotSchema.aggregate().group({
        _id: null,
        vaccinated: { $sum: '$vaccinated' },
      });

      // get lates vaccine lot
      const latestVaccineLot = await VaccineLotSchema.find({})
        .sort('-createdAt')
        .limit(4)
        .populate('vaccine');

      // count user who has one vaccine dose
      const userWithOneDose = await UserVaccineSchema.aggregate()
        .group({
          _id: '$user',
          quantity: { $sum: +1 },
        })
        .match({ quantity: 1 })
        .count('count');

      // count user who has >= two dose
      const userWithAboveTwoDose = await UserVaccineSchema.aggregate()
        .group({
          _id: '$user',
          quantity: { $sum: +1 },
        })
        .match({ quantity: { $gte: 2 } })
        .count('count');

      res.status(200).json({
        totalUser,
        totalPlace,
        userVaccinated: userVaccinated[0] ? userVaccinated[0].user : 0,
        availableVaccineDose:
          (totalVaccineDose[0] ? totalVaccineDose[0].quantity : 0) -
          (totalVaccineDoseUsed[0] ? totalVaccineDoseUsed[0].vaccinated : 0),
        latestVaccineLot,
        userVaccinatedAnalyst: {
          totalUser,
          userWithAboveTwoDose: userWithAboveTwoDose[0]
            ? userWithAboveTwoDose[0].count
            : 0,
          userWithOneDose: userWithOneDose[0] ? userWithOneDose[0].count : 0,
          userWithZeroDose:
            totalUser - (userVaccinated[0] ? userVaccinated[0].user : 0),
        },
      });

      return;
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export const adminController = new AdminController();
