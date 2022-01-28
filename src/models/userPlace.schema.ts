import mongoose from 'mongoose';
import { schemaOptions } from '@/utils/schemaOptions';
import { UserPlaceDocument } from '@/interfaces/root';

const Schema = mongoose.Schema;

const userPlaceSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    place: {
      type: Schema.Types.ObjectId,
      ref: 'Place',
      required: true,
    },
  },
  schemaOptions
);

export default mongoose.model<UserPlaceDocument>('UserPlace', userPlaceSchema);
