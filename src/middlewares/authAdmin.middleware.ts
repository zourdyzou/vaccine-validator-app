import AdminSchema from '@/admin.schema';
import { NextFunction, Response } from 'express';
import { Payload } from '@interfaces/user.interface';
import jsonwebtoken from 'jsonwebtoken';
import { TypedRequest } from '@interfaces/root';

export const tokenDecode = (req: TypedRequest<Payload>) => {
  const bearerHeader = req.headers['authorization'];
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ')[1];
    try {
      return jsonwebtoken.verify(bearer, process.env.TOKEN_SECRET_KEY!);
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
};

export const authAdminMiddleware = async (
  req: TypedRequest<Payload>,
  res: Response,
  next: NextFunction
) => {
  try {
    const tokenDecoded = tokenDecode(req) as Pick<Payload, 'id'>;
    const admin = await AdminSchema.findById(tokenDecoded.id);
    // const user = await AdminSchema.findOne({ _id: req.user?.id });

    if (!admin) {
      return res.status(403).json({
        message: 'you are forbidden to access the materials! access denied',
      });
    }

    return next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
