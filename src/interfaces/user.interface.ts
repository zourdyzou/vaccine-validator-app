import { Request, Response } from 'express';
import { Controllers, UserDocument } from './root';

export abstract class UserController implements Controllers {
  public abstract create(req: Request, res: Response): void;
  public abstract update(req: Request, res: Response): void;
  public abstract delete(req: Request, res: Response): void;
  public abstract getSingleUser(req: Request, res: Response): void;
  public abstract getAllUser(req: Request, res: Response): void;
  public abstract vaccinated(
    req: TypedRequest<{
      userId: string;
      vaccineId: string;
      vaccineLotId: string;
    }>,
    res: Response
  ): void;
  public abstract getAllPlace(req: Request, res: Response): void;
  public abstract checkinPlace(
    req: TypedRequest<{ placeId: string }>,
    res: Response
  ): void;
  public abstract placeVisited(req: Request, res: Response): void;
}

export interface TypedRequest<T> extends Request {
  body: T;
  user?: UserDocument;
}

export interface Payload {
  name?: string;
  email?: string;
  password?: string;
  id?: string | number;
}
