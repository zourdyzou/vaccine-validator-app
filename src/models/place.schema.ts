import mongoose from 'mongoose';
import { schemaOptions } from '@/utils/schemaOptions';
import { PlaceDocument } from '@/interfaces/root';

const Schema = mongoose.Schema;

const placeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  schemaOptions
);

export default mongoose.model<PlaceDocument>('Place', placeSchema);
