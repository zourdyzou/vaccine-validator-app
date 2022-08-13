import express, { Request } from 'express';
import mongoose from 'mongoose';
export interface Controllers {
  create(req: express.Request, res: express.Response): void;
  update(req: express.Request, res: express.Response): void;
  delete(req: express.Request, res: express.Response): void;
}

interface DocumentResult<A> extends mongoose.Document {
  _doc: A;
}

export interface TypedRequest<T> extends Request {
  body: T;
  user?: UserDocument;
  admin?: AdminDocument;
}

export interface AdminDocument extends mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  username: string | any;
  password: string | any;
}

export interface UserDocument extends DocumentResult<UserDocument> {
  idNumber: string;
  phoneNumber: string;
  fullName: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  vaccine?: UserVaccineDocument | any;
  vaccinated?: UserVaccineDocument | any;
  placeVisited?: UserPlaceDocument | any;
}

export interface PlaceDocument extends DocumentResult<PlaceDocument> {
  createdAt: Date;
  updatedAt: Date;
  name: string;
  address: string;
  creator: UserDocument['_id'];
  userVisitLast24h: UserDocument | any;
}

export interface UserPlaceDocument extends mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  user: UserDocument['_id'];
  place: PlaceDocument['_id'];
}

export interface VaccineDocument extends DocumentResult<VaccineDocument> {
  createdAt: Date;
  updatedAt: Date;
  quantity: number;
  vaccinated: number;
  vaccineLot: VaccineLOTDocument[] | any;
  name: string;
}

export interface VaccineLOTDocument extends mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  name: string;
  quantity: number;
  vaccinated: number;
  vaccineId: number | VaccineDocument['_id'];
  vaccine: VaccineDocument['_id'];
}

export interface UserVaccineDocument
  extends DocumentResult<UserVaccineDocument> {
  user: UserDocument['_id'];
  vaccine: VaccineDocument['_id'];
  vaccineLot: VaccineLOTDocument['_id'];
  createdAt: Date;
  updatedAt: Date;
}
