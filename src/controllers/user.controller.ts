import jwt from 'jsonwebtoken';
import {
  Place,
  User,
  UserPlace,
  UserVaccine,
  Vaccine,
  VaccineLot,
} from '@/models/schemas';
import { UserController as UserInterface } from '@/interfaces/user.interface';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { UserDocument, TypedRequest } from '@/interfaces/root';

class UserController implements UserInterface {
  public async create(
    req: TypedRequest<
      {
        phoneNumber: string;
        idNumber: string;
      } & UserDocument
    >,
    res: Response
  ): Promise<void> {
    const { phoneNumber, idNumber } = req.body;

    try {
      let user = await User.findOne({
        phoneNumber,
      });

      if (user) {
        res.status(403).json({
          message: 'phone number already registered for another account',
        });

        return;
      }

      user = await User.findOne({
        idNumber,
      });

      if (user) {
        res.status(403).json({
          message: 'ID number already registered for another account',
        });
        return;
      }

      const newUser = new User(req.body);
      const savedUser = await newUser.save();
      const token = jwt.sign(
        {
          id: savedUser._id,
        },
        process.env.TOKEN_SECRET_KEY!
      );

      res.status(201).json({
        user: savedUser,
        token,
      });

      return;
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  public async update(
    req: TypedRequest<UserDocument>,
    res: Response
  ): Promise<void> {
    const { phoneNumber, idNumber } = req.body;

    try {
      let user = await User.findOne({ phoneNumber });
      if (user && user._id.toString() !== req.params.id) {
        res.status(403).json({
          message: 'phone number is already registered for another account!',
          statusText: 'ERROR',
        });
        return;
      }

      user = await User.findOne({ idNumber });
      if (user && user._id.toString() !== req.params.id) {
        res.status(403).json({
          message: 'ID number is already registered for another account!',
          statusText: 'ERROR',
        });
        return;
      }

      const updateUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      res.status(200).json({
        message: 'successfully update user',
        updated_user: updateUser,
      });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      await UserVaccine.deleteMany({ user: id });
      await UserPlace.deleteMany({ user: id });
      await User.findByIdAndDelete(id);

      res.status(200).json({ message: 'deleted successfully!' });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getSingleUser(
    req: Request<ParamsDictionary, any, any, ParsedQs>,
    res: Response
  ): Promise<void> {
    try {
      const user = (await User.findById(req.params.id)) as UserDocument;
      const userVaccine = await UserVaccine.find({
        user: req.params.id,
      })
        .populate('vaccine')
        .populate('vaccineLot')
        .sort('-createdAt');
      const userPlaceVisit = await UserPlace.find({
        user: req.params.id,
      })
        .populate('place')
        .sort('-createdAt');

      user._doc.vaccinated = userVaccine;
      user._doc.placeVisited = userPlaceVisit;

      res.status(201).json({ message: 'send user data successful', user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getAllUser(
    _req: Request<ParamsDictionary, any, any, ParsedQs>,
    res: Response
  ): Promise<void> {
    try {
      const list = await User.find({}).sort('-createdAt');

      for (const user of list) {
        user._doc.vaccine = await UserVaccine.find({
          user: user._id,
        }).sort('-createdAt');
      }

      res
        .status(200)
        .json({ message: 'success getting all user', lists: list });
      return;
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  public async vaccinated(
    req: TypedRequest<{
      userId: string;
      vaccineId: string;
      vaccineLotId: string;
    }>,
    res: Response
  ): Promise<void> {
    try {
      const { userId, vaccineId, vaccineLotId } = req.body;

      const newVaccine = new UserVaccine({
        user: userId,
        vaccine: vaccineId,
        vaccineLot: vaccineLotId,
      });

      const savedUserVaccine = await newVaccine.save();

      await VaccineLot.findOneAndUpdate(
        {
          _id: vaccineLotId,
        },
        {
          $inc: {
            vaccinated: +1,
          },
        }
      );

      savedUserVaccine._doc.vaccine = await Vaccine.findById(vaccineId);
      savedUserVaccine._doc.vaccineLot = await VaccineLot.findById(
        vaccineLotId
      );

      res.status(200).json({
        message: 'successfully updated user, vaccination updated!',
        savedUserVaccine,
      });
      return;
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  // handling the place that user visit to do some vaccination and track it
  public async getAllPlace(
    req: Request<ParamsDictionary, any, any, ParsedQs>,
    res: Response
  ): Promise<void> {
    try {
      const listPlace = await Place.find({
        creator: req.params.userId,
      });

      res.status(200).json({
        message: 'get list of all vaccination place successfully',
        lists: listPlace,
      });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  public async checkinPlace(
    req: TypedRequest<{ placeId: string }>,
    res: Response
  ): Promise<void> {
    try {
      const newVisitVaccination = new UserPlace({
        user: req?.user?._id,
        place: req.body.placeId,
      });

      const savedUserPlace = await newVisitVaccination.save();
      res.status(201).json({
        message: 'checked in for vaccination completed!',
        user_data: savedUserPlace,
      });

      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  public async placeVisited(
    req: Request<ParamsDictionary, any, any, ParsedQs>,
    res: Response
  ): Promise<void> {
    try {
      const listVisitedPlace = await UserPlace.find({
        user: req.params.userId,
      }).populate('place');

      res.status(200).json({
        message: 'listing of visited place',
        visited_places: listVisitedPlace,
      });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export const userController = new UserController();
