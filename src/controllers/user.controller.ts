import jwt from 'jsonwebtoken';
import { User } from '@/models/schemas';
import {
  TypedRequest,
  UserController as UserInterface,
} from '@/interfaces/user.interface';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

class UserController extends UserInterface {
  public create(req: Request, res: Response): void {
    throw new Error('Method not implemented.');
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
