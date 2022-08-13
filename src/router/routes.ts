import express from 'express';

import userRouter from '@/router/user.router';
import adminRouter from '@/router/admin.router';
import placeRouter from '@/router/place.router';
import vaccineRouter from '@/router/vaccine.router';

const appRouter = express.Router();

appRouter.use('/user', userRouter);
appRouter.use('/place', placeRouter);
appRouter.use('/admin', adminRouter);
appRouter.use('/vaccine', vaccineRouter);

export default appRouter;
