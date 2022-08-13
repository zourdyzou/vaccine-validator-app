import express from 'express';
import { AdminDocument, TypedRequest } from '@interfaces/root';

export interface AdminInterface {
  summary(req: express.Request, res: express.Response): void;
  login(req: express.Request, res: express.Response): void;
}

export abstract class AdminInterfaceController implements AdminInterface {
  public abstract login(
    req: TypedRequest<AdminDocument>,
    res: express.Response
  ): Promise<void>;

  public abstract summary(
    req: TypedRequest<AdminDocument>,
    res: express.Response
  ): Promise<void>;
}
