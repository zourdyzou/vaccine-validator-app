import jwt from 'jsonwebtoken';
import { User } from '@/models/schemas';
import {
  TypedRequest,
  UserController as UserInterface,
} from '@/interfaces/user.interface';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { UserDocument } from '@/interfaces/root';

class UserController extends UserInterface {
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

  public update(req: Request, res: Response): void {
    throw new Error('Method not implemented.');
  }

  public delete(req: Request, res: Response): void {
    throw new Error('Method not implemented.');
  }

  public getSingleUser(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): void {
    throw new Error('Method not implemented.');
  }

  public getAllUser(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): void {
    throw new Error('Method not implemented.');
  }

  public vaccinated(
    req: TypedRequest<{
      userId: string;
      vaccineId: string;
      vaccineLotId: string;
    }>,
    res: Response<any, Record<string, any>>
  ): void {
    throw new Error('Method not implemented.');
  }

  public getAllPlace(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): void {
    throw new Error('Method not implemented.');
  }

  public checkinPlace(
    req: TypedRequest<{ placeId: string }>,
    res: Response<any, Record<string, any>>
  ): void {
    throw new Error('Method not implemented.');
  }

  public placeVisited(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>
  ): void {
    throw new Error('Method not implemented.');
  }
}

export const userController = new UserController();
