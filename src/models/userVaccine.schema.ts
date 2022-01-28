import mongoose from 'mongoose';
import { schemaOptions } from '@/utils/schemaOptions';
import { UserVaccineDocument } from '@/interfaces/root';

const Schema = mongoose.Schema;

const userVaccineSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    vaccine: {
      type: Schema.Types.ObjectId,
      ref: 'Vaccine',
      required: true,
    },
    vaccineLot: {
      type: Schema.Types.ObjectId,
      ref: 'VaccineLot',
      required: true,
    },
  },
  schemaOptions
);

export default mongoose.model<UserVaccineDocument>(
  'UserVaccine',
  userVaccineSchema
);
