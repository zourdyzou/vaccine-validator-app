import mongoose, { mongo } from 'mongoose';
import { schemaOptions } from '@/utils/schemaOptions';

const userSchema = new mongoose.Schema(
  {
    idNumber: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
  },
  schemaOptions
);

export default mongoose.model('User', userSchema);
