import express from 'express';

import { Controllers, PlaceDocument, TypedRequest } from './root';

export interface PlaceInterface extends Controllers {
  getSinglePlace(req: express.Request, res: express.Response): void;
  getAllPlace(req: express.Request, res: express.Response): void;
}

export abstract class PlaceInterfaceController implements PlaceInterface {
  public abstract create(
    req: TypedRequest<PlaceDocument>,
    res: express.Response
  ): Promise<void>;

  public abstract delete(
    req: TypedRequest<PlaceDocument>,
    res: express.Response
  ): Promise<void>;

  public abstract getAllPlace(
    req: TypedRequest<PlaceDocument>,
    res: express.Response
  ): Promise<void>;

  public abstract getSinglePlace(
    req: TypedRequest<PlaceDocument>,
    res: express.Response
  ): Promise<void>;

  public abstract update(
    req: TypedRequest<PlaceDocument>,
    res: express.Response
  ): Promise<void>;
}
