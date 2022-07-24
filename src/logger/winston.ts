import winston from 'winston';
import 'winston-mongodb';

import env from '../config/env';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.MongoDB({
      db: env.MONGO_DB,
      options: {
        useUnifiedTopology: true,
      },
    }),
  ],
});

export default logger;
