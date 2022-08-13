import express from 'express';

import PlaceSchema from '@models/place.schema';
import UserPlaceSchema from '@models/userPlace.schema';

import { PlaceDocument, TypedRequest } from '@interfaces/root';
import { PlaceInterfaceController } from '@interfaces/place.interface';

class PlaceController implements PlaceInterfaceController {
  public async create(req: TypedRequest<PlaceDocument>, res: express.Response) {
    try {
      const newPlace = new PlaceSchema({
        ...req.body,
        creator: req.user?._id,
      });

      const savedPlace = await newPlace.save();
      res.status(201).json(savedPlace);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async delete(req: TypedRequest<PlaceDocument>, res: express.Response) {
    try {
      await UserPlaceSchema.deleteMany({ place: req.params.id });
      await PlaceSchema.findOneAndDelete({
        _id: req.params.id,
        creator: req.user?._id,
      });

      res.status(200).json({ message: 'Deleted successfully!' });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async getAllPlace(
    _req: TypedRequest<PlaceDocument>,
    res: express.Response
  ) {
    try {
      const list = await PlaceSchema.find({})
        .populate('creator')
        .sort('-createdAt');
      for (const place of list) {
        place._doc.userVisitLast24h = await UserPlaceSchema.find({
          place: place._id,
          createdAt: {
            $gt: new Date(Date.now() - 24 * 60 * 60 * 1000),
          },
        });
      }
      res.status(200).json(list);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async getSinglePlace(
    req: TypedRequest<PlaceDocument>,
    res: express.Response
  ) {
    try {
      const place = await PlaceSchema.findById(req.params.id).populate(
        'creator'
      );

      place!._doc.userVisitLast24h = await UserPlaceSchema.find({
        place: place!._id,
        createdAt: {
          $gt: new Date(Date.now() - 24 * 60 * 60 * 1000),
        },
      }).populate('user');

      res.status(200).json(place);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async update(req: TypedRequest<PlaceDocument>, res: express.Response) {
    try {
      const place = await PlaceSchema.findOneAndUpdate(
        {
          _id: req.params.id,
          creator: req.user?._id,
        },
        {
          $set: req.body,
        }
      );
      res.status(200).json(place);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export const placeController = new PlaceController();
