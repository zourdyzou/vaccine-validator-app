import express from 'express';
import mongoose from 'mongoose';
export interface Controllers {
  create(req: express.Request, res: express.Response): void;
  update(req: express.Request, res: express.Response): void;
  delete(req: express.Request, res: express.Response): void;
}

interface DocumentResult<A> extends mongoose.Document {
  _doc: A;
}
export interface AdminController {
  summary(): void;
  login(): void;
}

export interface TypedRequest<T> extends express.Request {
  body: T;
}

export interface AdminDocument extends mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  username: string;
  password: string;
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

export interface PlaceDocument extends mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  name: string;
  address: string;
  creator: UserDocument['_id'];
}

export interface UserPlaceDocument extends mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  user: UserDocument['_id'];
  place: PlaceDocument['_id'];
}

export interface VaccineDocument extends mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  name: string;
}

export interface VaccineLOTDocument extends mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  name: string;
  quantity: number;
  vaccinated: number;
  vaccine: VaccineDocument['_id'];
}

export interface UserVaccineDocument extends mongoose.Document {
  user: UserDocument['_id'];
  vaccine: VaccineDocument['_id'];
  vaccineLot: VaccineLOTDocument['_id'];
  createdAt: Date;
  updatedAt: Date;
}
