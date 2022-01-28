import mongoose from 'mongoose';
import { schemaOptions } from '@/utils/schemaOptions';
import { VaccineDocument } from '@/interfaces/root';

const vaccineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

export default mongoose.model<VaccineDocument>('Vaccine', vaccineSchema);
