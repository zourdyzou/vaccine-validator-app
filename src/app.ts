import 'dotenv/config';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import logger from 'morgan';
import { createAdmin } from '@utils/seedAdmin';
import { normalizePort } from '@utils/port-runtime-utilities';

// import path from 'path';
// import fileUpload from 'express-fileupload';

const app = express();

(() => {
  // miscellaneous
  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());
  app.use(helmet());
  app.use(logger('dev'));
  app.use(express.urlencoded({ extended: false }));

  // router
  app.get('/', (_req: Request, res: Response) => {
    res.send(' <div><h1>God bless humanity!</h1></div>  ');
  });

  // connect to db
  mongoose
    .connect(process.env.MONGODB_URI_CLOUD!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(async () => {
      console.log('Mongodb connected');
      await createAdmin();
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

  const PORT = normalizePort(process.env.PORT || '3000');
  app.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`);
  });
})();

export default app;
