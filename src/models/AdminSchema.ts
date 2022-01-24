import mongoose from 'mongoose';
import { schemaOptions } from '@/utils/schemaOptions';

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

export default mongoose.model('Admin', adminSchema);
