import { Request } from 'express';
import { Controllers } from './root';

export interface UserController extends Controllers {
  getSingleUser(): void;
  getAllUser(): void;
}

export interface TypedRequest<T> extends Request {
  body: T;

  user?: T;
}

export interface Payload {
  name?: string;
  email?: string;
  password?: string;
  id?: string | number;
}
