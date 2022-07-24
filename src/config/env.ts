import dotenv from 'dotenv';

dotenv.config();

const env = {
  MONGO_DB: process.env.MONGO_DB,
};

export default env;
