import mongoose from 'mongoose';
import { schemaOptions } from '@/utils/schemaOptions';
import { UserDocument } from '@/interfaces/root';

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

export default mongoose.model<UserDocument>('User', userSchema);
