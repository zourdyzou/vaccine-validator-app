import express from 'express';
import mongoose from 'mongoose';
export interface Controllers {
  create(): void;
  update(): void;
  delete(): void;
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

export interface UserDocument extends mongoose.Document {
  idNumber: string;
  phoneNumber: string;
  fullName: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
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
