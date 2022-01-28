import mongoose from 'mongoose';
import { schemaOptions } from '@/utils/schemaOptions';
import { AdminDocument } from '@/interfaces/root';

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

export default mongoose.model<AdminDocument>('Admin', adminSchema);
