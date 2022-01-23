import { SchemaOptions } from 'mongoose';

export const schemaOptions: SchemaOptions = {
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
  timestamps: true,
};
