import mongoose from 'mongoose';
import { schemaOptions } from '@/utils/schemaOptions';

const vaccineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

export default mongoose.model('Vaccine', vaccineSchema);
