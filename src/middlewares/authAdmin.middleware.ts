import Users from '@/models/user.schema';
import { Response, NextFunction } from 'express';
import { TypedRequest, Payload } from '@interfaces/user.interface';

export const authAdminMiddleware = async (
  req: TypedRequest<Payload>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await Users.findOne({ _id: req.user?.id });

    if (user?.role !== 1) {
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
