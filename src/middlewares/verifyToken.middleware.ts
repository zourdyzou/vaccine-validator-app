import { tokenDecode } from '@/middlewares/authAdmin.middleware';
import { Payload } from '@interfaces/user.interface';
import { NextFunction, Response } from 'express';
import AdminSchema from '@/admin.schema';
import UserSchema from '@/user.schema';
import { AdminDocument, UserDocument, TypedRequest } from '@interfaces/root';

export const verifyTokenMiddleware = async (
  req: TypedRequest<Payload>,
  res: Response,
  next: NextFunction
) => {
  const tokenDecoded = tokenDecode(req) as Pick<Payload, 'id'>;

  if (tokenDecoded) {
    const admin = await AdminSchema.findById(tokenDecoded.id);
    const user = await UserSchema.findById(tokenDecoded.id);
    if (!admin && !user)
      return res.status(403).json({ message: 'Not allowed!' });

    req.admin = admin as AdminDocument;
    req.user = user as UserDocument;
    return next();
  } else {
    res.status(401).json('Unauthorized');
  }
};
