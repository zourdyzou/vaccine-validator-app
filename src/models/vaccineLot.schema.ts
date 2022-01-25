import mongoose from 'mongoose';
import { schemaOptions } from '@/utils/schemaOptions';

const Schema = mongoose.Schema;

const vaccineLotSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    vaccinated: {
      type: Number,
      required: true,
      default: 0,
    },
    vaccine: {
      type: Schema.Types.ObjectId,
      ref: 'Vaccine',
      required: true,
    },
  },
  schemaOptions
);

export default mongoose.model('VaccineLot', vaccineLotSchema);
